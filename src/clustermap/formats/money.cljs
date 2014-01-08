(ns clustermap.formats.money
  (:require [clustermap.formats.number :as nform]))

(def ^:private money-suffixes
  {0 ""
   3 "k"
   6 "m"
   9 "bn"
   12 "tn"})

(defn- money-suffix
  "take an exponent and return a suffix"
  [exp]
  (or (money-suffixes exp) (str "x10^" exp)))

(defn format-readable-money
  [n & {:keys [sigfigs curr plus?] :or {curr "£"}}]
  (let [[sig exp] (nform/eng-notation n :sigfigs sigfigs)
        abs-sig (js/Math.abs sig)
        suffix (money-suffix exp)]
    (apply str (filter identity
                       [(cond (and plus? (> sig 0)) "+"
                              (< sig 0) "-")
                        curr
                        abs-sig
                        suffix]))))
