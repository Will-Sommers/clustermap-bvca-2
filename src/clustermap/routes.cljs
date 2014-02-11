(ns clustermap.routes
  (:require [sablono.core :as html :refer [html] :include-macros true]))

(def type-name-keys
  {:portfolio-company :name
   :investor-company :name
   :constituency :compact_name})

(defn name-for
  [type obj]
  (get obj (get type-name-keys type)))

(defn portfolio-company-path
  [app-state obj]
  (str "#/" (some-> app-state deref :view name) "/portfolio-company/" (:company_no obj)))

(defn investor-company-path
  [app-state obj]
  (str "#/" (some-> app-state deref :view name) "/investor-company/" (:investor_company_uid obj)))

(defn constituency-path
  [app-state obj]
  (str "#/" (some-> app-state deref :view name) "/constituency/" (:boundaryline_id obj)))

(def type-paths
  {:portfolio-company portfolio-company-path
   :investor-company investor-company-path
   :constituency constituency-path})

(defn path-for
  [app-state type obj]
  (-> type-paths
      (get type)
      (apply [app-state obj])))

(defn link-for
  [app-state type obj]
  (html
   [:a {:href (path-for app-state type obj)}
    (name-for type obj)]))
