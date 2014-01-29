(ns clustermap.app
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [secretary.macros :refer [defroute]])
  (:require
   [cljs.core.async :refer [chan <! put! sliding-buffer]]
   [secretary.core :as secretary]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [clustermap.api :as api]
   [clustermap.nav :as nav]
   [clustermap.components.map :as map]
   [clustermap.components.map-report :as map-report]
   [clustermap.components.full-report :as full-report]
   [clustermap.components.page-title :as page-title]
   [clustermap.components.search :as search]
   [clustermap.boundarylines :as bl]))

(def state (atom {:all-portfolio-company-stats nil
                  :uk-constituencies nil

                  :search-results {}

                  :selector nil

                  :selection nil
                  :selection-portfolio-company-stats nil
                  :selection-portfolio-company-site-stats nil
                  :selection-portfolio-company-sites []
                  :selection-portfolio-company-site-account-timelines nil
                  :selection-portfolio-company-locations nil
                  }))

(defn new-state
  "create a new app-state based on the old state
   - state : the old state
   - path-values : a seq of [key-or-path value-or-fn] pairs
       - key-or-path : a single key or sequence of keys
                       describing a path into the state
       - value-or-fn : a new value or a function to mutate
                       the previous value "
  [state path-values]
  (reduce (fn [s [key-or-path value-or-fn]]
            (let [path (if (sequential? key-or-path) key-or-path [key-or-path])]
              (update-in s path (if (fn? value-or-fn) value-or-fn (fn [ov] value-or-fn)))))
          state
          path-values))

(defn set-state
  [& {:as path-values}]
  (swap! state new-state path-values))

(defn load-all-portfolio-company-stats
  []
  (go
   (let [pcs (<! (api/portfolio-company-stats))]
     (set-state :all-portfolio-company-stats pcs))))

(defn load-uk-constituencies
  []
  (go
   (let [bls (<! (api/boundaryline-collection-index "uk_constituencies" :raw true))]
     (set-state :uk-constituencies bls))))

(defn process-search-results
  "process a search"
  [results]
  (set-state :search-results (js->clj results)))

(defn process-selection
  [[selection
    selection-portfolio-company-stats
    selection-portfolio-company-site-stats
    selection-portfolio-company-sites
    selection-portfolio-company-site-account-timelines
    selection-portfolio-company-locations] type]
  ;; (.log js/console (clj->js [result type]))
  (set-state :selection {:type type :value selection}
             :selection-portfolio-company-stats selection-portfolio-company-stats
             :selection-portfolio-company-site-stats selection-portfolio-company-site-stats
             :selection-portfolio-company-sites selection-portfolio-company-sites
             :selection-portfolio-company-site-account-timelines selection-portfolio-company-site-account-timelines
             :selection-portfolio-company-locations selection-portfolio-company-locations))

(defn make-selection
  "set the selection
   - extractor selector id
   - record selector
   - kick-off selection retrievals"
  [[type val]]
  ;; (.log js/console (clj->js val))
  (let [id (condp = type
             :portfolio-company (:company_no val)
             :investor-company (:name val)
             :constituency (:boundaryline_id val)
             nil)
        selector (if type {type id} {})]

    (set-state :selector selector)

    (condp = type
      :portfolio-company [[(api/portfolio-company id)
                           (api/portfolio-company-stats selector)
                           (api/portfolio-company-site-stats selector)
                           (api/portfolio-company-sites selector)
                           (api/portfolio-company-site-account-timelines selector)
                           (api/portfolio-company-locations selector)] type]
      :investor-company [[(api/investor-company id)
                          (api/portfolio-company-stats selector)
                          (api/portfolio-company-site-stats selector)
                          (api/portfolio-company-sites selector)
                          (api/portfolio-company-site-account-timelines selector)
                          (api/portfolio-company-locations selector)] type]
      :constituency [[(api/constituency id)
                      (api/portfolio-company-stats selector)
                      (api/portfolio-company-site-stats selector)
                      (api/portfolio-company-sites selector)
                      (api/portfolio-company-site-account-timelines selector)
                      (api/portfolio-company-locations selector)] type]
      [[nil
        (api/portfolio-company-stats selector)
        (api/portfolio-company-site-stats selector)
        nil ;; (api/portfolio-company-sites selector)
        (api/portfolio-company-site-account-timelines selector)
        nil ;; (api/portfolio-company-locations selector)
        ] type])))

(defn change-view
  [view]
  (.log js/console (clj->js view))
  (nav/change-view view))

(def event-handlers
  {:search (api/ordered-api api/search process-search-results)
   :select (api/ordered-api make-selection process-selection)
   :change-view change-view})

(defn handle-event
  [type val]
  (let [handler (get event-handlers type)]
    (if-not handler (throw (js/Error. (str "no handler for event-type: " type))))
    (handler val)))

(defn init
  []
  (let [comm (chan)]
    (nav/init comm)

    (load-all-portfolio-company-stats)
    (load-uk-constituencies)
    (handle-event :select nil) ;; fetch results for empty selection

    (map/mount state "map-component" comm)
    (search/mount state "search-component" comm)
    (map-report/mount state "map-report-component")
    (page-title/mount state "page-title-component")
    (full-report/mount state "full-report-component")

    (go
     (while true
       (let [[type val] (<! comm)]
         (handle-event type val))))))
