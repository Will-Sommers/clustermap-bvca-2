(ns clustermap.components.full-report.company-list
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.time :refer [get-year]]))

(defn render-many-links
  [link-fn owner-path type objs]
  (let [first-obj (first objs)
        next-objs (next objs)]
    (if next-objs
      (html
       [:div (link-fn type first-obj)
        [:a {:href owner-path} "\u00A0(" (count next-objs) " more...)"]])
      (link-fn type first-obj))))

(defn pos-neg
  [value]
  (cond
   (nil? value) nil
   (> value 0) (html [:i.icon-positive])
   (< value 0) (html [:i.icon-negative])
   true nil))

(defn portfolio-company
  [site owner {:keys [link-fn path-fn] :as opts}]
  (let [company-path (path-fn :portfolio-company site)]
    (om/component
     (html
      [:tr
       [:td (link-fn :portfolio-company site)]
       [:td (:postcode site)]
       [:td (render-many-links link-fn company-path :investor-company (:investor_companies site))]
       [:td (render-many-links link-fn company-path :constituency (some->> site :boundarylines (filter (fn [bl] (= "uk_constituencies" (:collection_id bl))))))]
       [:td (fmoney (:latest_turnover site) :sf 2 :default "-") [:small "\u00A0(" (get-year (:latest_accounts_date site)) ")" ]]
       [:td (pos-neg (:latest_turnover_delta site))]
       [:td (fmoney (:latest_turnover_delta site) :sf 2 :default "-")]
       [:td (fnum (:latest_employee_count site) :dec 0 :default "-") [:small "\u00A0(" (get-year (:latest_accounts_date site)) ")" ]]
       [:td (pos-neg (:latest_employee_count_delta site))]
       [:td (fnum (:latest_employee_count_delta site) :dec 0 :default "-") ]]))))

(defn company-list
  [selection-portfolio-company-sites-by-company owner opts]
  (om/component
       (html
        [:div.full-report-list
         [:div.table-responsive
          [:table.table
           [:thead
            [:tr
             [:th "Portfolio Company"]
             [:th "Postcode"]
             [:th "Investor"]
             [:th "Constituency"]
             [:th "Revenue"]
             [:th {:colSpan "2"} "Rev. change"]
             [:th "Employees"]
             [:th {:colSpan "2"} "Emp. change"]]]
           [:tbody
            (om/build-all portfolio-company (:records selection-portfolio-company-sites-by-company) {:key :portfolio_company_site_uid :opts opts})]]]])))
