(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("index.static", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
buf.push("<!DOCTYPE html><html lang=\"en\"><head><title>BVCA v2</title><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link type=\"text/css\" rel=\"stylesheet\" href=\"css/app.css\"><link type=\"text/css\" rel=\"stylesheet\" href=\"http://api.tiles.mapbox.com/mapbox.js/v1.5.2/mapbox.css\"><!--[if lte IE 8]><link type=\"text/css\" rel=\"stylesheet\" href=\"api.tiles.mapbox.com/mapbox.js/v1.5.2/mapbox.ie.css\"><![endif]--><!--[if lte IE 7]><script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js\"></script><![endif]--><!--[if lte IE 8]><script type=\"text/javascript\" src=\"/js/html5.js\"></script><![endif]--><script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-1.11.0-beta3.min.js\"></script><script type=\"text/javascript\" src=\"/js/vendor.js\"></script><script type=\"text/javascript\" src=\"http://api.tiles.mapbox.com/mapbox.js/v1.5.2/mapbox.js\"></script><script type=\"text/javascript\" src=\"http://fb.me/react-0.8.0.js\"></script><!--begin-static-app-config--><script type=\"text/javascript\">window.config={}</script><!--end-static-app-config--><!--app-config<script type=\"text/javascript\">window.config={{{app-config}}}\n</script>--></head><body class=\"view-map\"><div id=\"wrap\"><aside id=\"nav\"><ul><li class=\"search\"><a href=\"#\">Search</a></li><li class=\"map active\"><a href=\"#\">Map</a></li><li class=\"lists\"><a href=\"#\">Lists</a></li><li class=\"info\"><a href=\"#\">Info</a></li><li class=\"logo\"><a href=\"#\">BVCA</a></li></ul></aside><section id=\"main\"><div class=\"container\"><header id=\"main-header\"><div id=\"search-component\"><div id=\"search\"><h2>Search</h2><div><input type=\"text\" placeholder=\"Enter your search\"><button type=\"reset\">&times;</button></div><div id=\"search-results\"><ul><li><a href=\"#\">Hackney<small>Constituency</small></a></li><li><a href=\"#\">3i<small>Investor</small></a></li><li><a href=\"#\">Weetabix<small>Company</small></a></li></ul></div></div></div><div id=\"page-title-component\"><div id=\"page-title\"><button type=\"button\" class=\"btn\">View on map</button><h2>Company</h2><h3>ABC XYZ Company Name Limited</h3></div></div></header><div id=\"main-content\"><div id=\"page-map\"><div id=\"map-report\" class=\"open\"><a href=\"#\"><i>Show / hide</i></a><aside><header class=\"primary\"><h1>Welcome to the BVCA Private Equity Map</h1><h2>View Investment across the UK</h2></header><div id=\"map-report-component\"><header class=\"secondary\"><h2>-</h2><h3>-</h3></header><ul><li>-<small>Companies</small></li><li>-<small>Investors</small></li><li>-<small>Revenue (&pound;)</small></li><li>-<small>Employees</small></li></ul></div><button type=\"button\" class=\"btn\"><i class=\"icon-lists-sm\"></i>Full report</button><p>View advanced tabular results</p></aside></div><div id=\"map\"></div></div><div id=\"page-lists\"><div class=\"inner\"><div class=\"div-scroll\"><div class=\"div-fixed\"><h4>2013 Overview</h4><div class=\"table-responsive\"><table class=\"table-stats\"><thead><tr><th>&nbsp;</th><th>Companies</th><th>Investors</th><th>Revenue (&pound;)</th><th>Employees</th></tr></thead><tbody><tr><th><i data-toggle=\"tooltip\" data-container=\"body\" title=\"Total\" class=\"icon-info\"></i>Total</th><td><span class=\"totals\">44</span></td><td><span class=\"totals\">10</span></td><td><span class=\"totals\">1.8bn</span></td><td><span class=\"totals\">7,511</span></td></tr><tr><th><i data-toggle=\"tooltip\" data-container=\"body\" title=\"Average\" class=\"icon-info\"></i>Average</th><td><span class=\"averages\">37</span></td><td><span class=\"averages\">12</span></td><td><span class=\"averages\">80.0m</span></td><td><span class=\"averages\">3,566</span></td></tr></tbody></table></div><div class=\"table-responsive\"><table class=\"table\"><thead><tr><th>Company</th><th>Postcode</th><th>Investor</th><th>Revenue</th><th>Rev. change</th><th>Employess</th><th>Emp. change</th></tr></thead><tbody>");
var i = 1;
while(i--)
{
buf.push("<tr><td><a href=\"#\">Compny name</a></td><td>EC1 9XY</td><td><a href=\"#\">Investor name</a></td><td>&pound;78.9m<small>&nbsp;(2011)</small></td><td>&pound;7.1m<i class=\"icon-negative\"></i></td><td>1,234<small>&nbsp;(2011)</small></td><td>987<i class=\"icon-positive\"></i></td></tr><tr><td><a href=\"#\">Compny name</a></td><td>N1 2AB</td><td><a href=\"#\">Investor name</a></td><td>&pound;34.5m<small>&nbsp;(2011)</small></td><td>&pound;2.5m<i class=\"icon-positive\"></i></td><td>987<small>&nbsp;(2011)</small></td><td>123<i class=\"icon-negative\"></i></td></tr>");
}
buf.push("</tbody></table></div><div class=\"grid\"><div class=\"tbl\"><div class=\"tbl-cell charts\"><div class=\"tbl\"><div class=\"tbl-row\"><div class=\"tbl-cell\"><div class=\"box box-first\"><header>Box Title</header><div><p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac? Ut adipiscing tellus enim, eu pharetra eros consequat eget!</p><p>Donec sit amet turpis quis magna dictum aliquet. Vestibulum dictum vestibulum risus dictum facilisis! Etiam semper nulla vitae nunc porttitor pretium sit amet vel tellus.</p><p>Aenean ut diam sit amet est sagittis sagittis. Donec quis diam eleifend, tempus turpis fringilla, dictum eros.</p></div></div></div><div class=\"tbl-cell\"><div class=\"box box-last\"><header>Box Title</header><div><p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac? Ut adipiscing tellus enim, eu pharetra eros consequat eget!</p><p>Donec sit amet turpis quis magna dictum aliquet. Vestibulum dictum vestibulum risus dictum facilisis! Etiam semper nulla vitae nunc porttitor pretium sit amet vel tellus.</p></div></div></div></div><div class=\"tbl-row\"><div class=\"tbl-cell\"><div class=\"box box-first\"><header>Box Title</header><div><p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac?</p><p>Aenean ut diam sit amet est sagittis sagittis. Donec quis diam eleifend, tempus turpis fringilla, dictum eros.</p></div></div></div><div class=\"tbl-cell\"><div class=\"box box-last\"><header>Box Title</header><div><p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac? Ut adipiscing tellus enim, eu pharetra eros consequat eget!</p><p>Donec sit amet turpis quis magna dictum aliquet. Vestibulum dictum vestibulum risus dictum facilisis! Etiam semper nulla vitae nunc porttitor pretium sit amet vel tellus.</p><p>Aenean ut diam sit amet est sagittis sagittis. Donec quis diam eleifend, tempus turpis fringilla, dictum eros.</p></div></div></div></div></div></div><div class=\"tbl-cell details\"><div class=\"tbl\"><div class=\"tbl-cell\"><div class=\"box\"><header>Box Title</header><div><ul><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li></ul><p><a href=\"#\">Show more...</a></p></div></div></div></div><div class=\"tbl\"><div class=\"tbl-cell\"><div class=\"box\"><header>Box Title</header><div><ul><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li></ul><p><a href=\"#\">Show more...</a></p></div></div></div></div><div class=\"tbl\"><div class=\"tbl-cell\"><div class=\"box\"><header>Box Title</header><div><ul><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li></ul><p><a href=\"#\">Show more...</a></p></div></div></div></div></div></div></div></div></div></div></div></div><footer id=\"main-footer\"><div class=\"inner\"><div class=\"trampoline\"><p>Produced by the&nbsp;<a href=\"#\">BVCA</a>&nbsp;and&nbsp;<a href=\"#\">Trampoline Systems</a></p><p><a href=\"#\">Terms</a></p></div><div class=\"issues\"><p><a href=\"#\">Report issue</a></p></div></div></footer></div></section></div><!--begin-static-base-js--><script type=\"text/javascript\" src=\"cljs/goog/base.js\"></script><!--end-static-base-js--><!--base-js{{{base-js}}}--><script type=\"text/javascript\" src=\"clustermap.js\"></script><script type=\"text/javascript\">goog.require(\"clustermap.core\");</script><!--begin-static-repl-js--><!--end-static-repl-js--><!--repl-js<script type=\"text/javascript\">{{{repl-js}}}</script>--></body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//# sourceMappingURL=templates.js.map