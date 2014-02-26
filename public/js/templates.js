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
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <title>BVCA v2</title>\n    <meta charset=\"utf-8\">\n    <!--if IEmeta(http-equiv=\"X-UA-Compatible\", content=\"IE=edge,chrome=1\")\n    -->\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"http://api.tiles.mapbox.com/mapbox.js/v1.6.1/mapbox.css\">\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"css/app.css\">\n    <!--if lte IE 7\n    <script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js\"></script>\n    \n    -->\n    <!--if lte IE 8\n    <script type=\"text/javascript\" src=\"/js/html5.js\"></script>\n    \n    -->\n    <script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-1.11.0.min.js\"></script>\n    <script type=\"text/javascript\" src=\"http://api.tiles.mapbox.com/mapbox.js/v1.6.1/mapbox.js\"></script>\n    <script type=\"text/javascript\" src=\"/js/vendor.js\"></script>\n    <script type=\"text/javascript\" src=\"http://code.highcharts.com/highcharts.js\"></script>\n    <script type=\"text/javascript\" src=\"http://code.highcharts.com/highcharts-more.js\"></script>\n    <script type=\"text/javascript\" src=\"http://fb.me/react-0.8.0.js\"></script>\n    <!--begin-static-app-config-->\n    <script type=\"text/javascript\">window.config={}</script>\n    <!--end-static-app-config-->\n    <!--app-config\n    <script type=\"text/javascript\">window.config={{{app-config}}}</script>\n    \n    -->\n  </head>\n  <body class=\"view-map\">\n    <div id=\"page-info\" class=\"modal fade\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>\n            <h4>BVCA Private Equity Map</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>\n              Private equity and venture capital play a key role in the British economy.\n              Over the last five years £33bn has been invested in over 4,500 UK companies.\n              In 2012 alone £5.7bn was invested in over 800 businesses, employing the equivalent\n              of around 130,000 full time jobs. Around 90% of these were small and medium-sized\n              enterprises, a crucial component of economic health.\n            </p>\n            <p>\n              Many are unfamiliar with the work of private equity and venture capital and its\n              impact in their local community. To help address this the BVCA has produced the\n              Impact Map to demonstrate the industry’s role in supporting businesses across the country.\n            </p>\n            <p>This map is constantly updated. Please contact&ensp;<a href=\"mailto:communications@bvca.co.uk\">communications@bvca.co.uk</a>&ensp;if you have any comments or questions. If you require further information about private\n              equity and venture capital in the UK please head to the&ensp;<a href=\"http://www.bvca.co.uk\" class=\"no-rmargin\">BVCA website here</a>.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"page-methodology\" class=\"modal fade\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>\n            <h4>Methodology</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>We track and regularly update investment information as supplied by our members covering Portfolio Company sites across the UK.</p>\n            <p>Portfolio Companies were matched up with the Companies House database and site addresses were matched to Parliamentary Constituencies using the ONS Postcode database and the Ordnance Survey Boundary-Line product.</p>\n            <p>\n              Historical turnover and employment information was then taken from Companies House accounts filings. In cases where investments were made in Portfolio Companies with multiple sites, the declared revenue and employees of those companies were shared equally amongst the company's sites\n              \n              \n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"wrap\">\n      <aside id=\"nav\">\n        <ul>\n          <li data-toggle=\"tooltip\" data-placement=\"right\" title=\"Search for a Constituency or Company\" class=\"search\"><a href=\"#\">Search</a></li>\n          <li data-toggle=\"tooltip\" data-placement=\"right\" title=\"View on map\" class=\"map active\"><a href=\"#\">Map</a></li>\n          <li data-toggle=\"tooltip\" data-placement=\"right\" title=\"View full report\" class=\"lists\"><a href=\"#\">Full Report</a></li>\n          <li data-toggle=\"tooltip\" data-placement=\"right\" title=\"More Information\" class=\"info\"><a data-toggle=\"modal\" data-target=\"#page-info\">Info</a></li>\n          <li data-toggle=\"tooltip\" data-placement=\"right\" title=\"Methodology\" class=\"method\"><a data-toggle=\"modal\" data-target=\"#page-methodology\">Methodology</a></li>\n          <li class=\"logo\"><a href=\"http://www.bvca.co.uk\">BVCA</a></li>\n        </ul>\n      </aside>\n      <section id=\"main\">\n        <div class=\"container\">\n          <header id=\"main-header\">\n            <div id=\"search-component\">\n              <div id=\"search\">\n                <div class=\"tbl\">\n                  <div style=\"width: 100%\" class=\"tbl-cell\">\n                    <input type=\"text\" placeholder=\"Search\">\n                  </div>\n                  <div style=\"width: 38px\" class=\"tbl-cell\">\n                    <button type=\"reset\" class=\"btn-clear\">&times;</button>\n                  </div>\n                </div>\n                <div id=\"search-results\" class=\"hide\">\n                  <ul>\n                    <li><a href=\"#\">Hackney<small>Constituency</small></a></li>\n                    <li><a href=\"#\">3i<small>Investor</small></a></li>\n                    <li><a href=\"#\">Weetabix<small>Company</small></a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div id=\"page-title-component\">\n              <div id=\"page-title\">\n                <button type=\"button\" class=\"btn\">View on map</button>\n                <button type=\"reset\" class=\"btn btn-link btn-reset\">Reset to UK wide</button>\n                <h2>Company</h2>\n                <h3>ABC XYZ Company Name Limited</h3>\n              </div>\n            </div>\n          </header>\n          <div id=\"main-content\">\n            <div id=\"page-map\">\n              <div id=\"map-report\" class=\"open\"><a href=\"#\"><i>Show / hide</i></a>\n                <aside>\n                  <header class=\"primary\">\n                    <h1>Welcome to the BVCA Private Equity Map</h1>\n                    <h2>View Investment across the UK</h2>\n                  </header>\n                  <div id=\"map-report-component\">\n                    <header class=\"secondary\">\n                      <h2>-</h2>\n                      <h3>-</h3>\n                      <button type=\"reset\" class=\"btn-reset\">Reset to UK wide</button>\n                    </header>\n                    <ul>\n                      <li>-<small>Companies</small></li>\n                      <li>-<small>Investors</small></li>\n                      <li>-<small>Revenue (&pound;)</small></li>\n                      <li>-<small>Employees</small></li>\n                    </ul><a href=\"#\">\n                      <button type=\"button\" class=\"btn\"><i class=\"icon-lists-sm\"></i>Full report</button></a>\n                    <p>View advanced tabular results</p>\n                  </div>\n                </aside>\n              </div>\n              <div id=\"map-component\"></div>\n            </div>\n            <div id=\"page-lists\">\n              <div class=\"inner\">\n                <div class=\"div-scroll\">\n                  <div class=\"div-fixed\">\n                    <div id=\"full-report-component\">\n                      <div class=\"full-report-overview\">\n                        <h4>- Overview</h4>\n                        <div class=\"table-responsive\">\n                          <table class=\"table-stats\">\n                            <thead>\n                              <tr>\n                                <th>&nbsp;</th>\n                                <th>Companies</th>\n                                <th>Investors</th>\n                                <th>Revenue (&pound;)</th>\n                                <th>Employees</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr>\n                                <th><i data-toggle=\"tooltip\" data-container=\"body\" title=\"Total\" class=\"icon-info\"></i>Total</th>\n                                <td><span class=\"totals\">-</span></td>\n                                <td><span class=\"totals\">-</span></td>\n                                <td><span class=\"totals\">-</span></td>\n                                <td><span class=\"totals\">-</span></td>\n                              </tr>\n                              <tr>\n                                <th><i data-toggle=\"tooltip\" data-container=\"body\" title=\"Average\" class=\"icon-info\"></i>Average</th>\n                                <td><span class=\"averages\">-</span></td>\n                                <td><span class=\"averages\">-</span></td>\n                                <td><span class=\"averages\">-</span></td>\n                                <td><span class=\"averages\">-</span></td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                      </div>\n                      <div class=\"full-report-portfolio-company-sites\">\n                        <div class=\"table-responsive\">\n                          <table class=\"table\">\n                            <thead>\n                              <tr>\n                                <th>Company</th>\n                                <th>Postcode</th>\n                                <th>Investor</th>\n                                <th>Revenue</th>\n                                <th>Rev. change</th>\n                                <th>Employess</th>\n                                <th>Emp. change</th>\n                              </tr>\n                            </thead>\n                            <tbody>");
var i = 1;
while(i--)
{
buf.push("\n                              <tr>\n                                <td><a href=\"#\">Company name</a></td>\n                                <td>-</td>\n                                <td><a href=\"#\">Investor name</a></td>\n                                <td>-<small>&nbsp;(-)</small></td>\n                                <td>-<i class=\"icon-negative\"></i></td>\n                                <td>-<small>&nbsp;(-)</small></td>\n                                <td>-<i class=\"icon-positive\"></i></td>\n                              </tr>");
}
buf.push("\n                            </tbody>\n                          </table>\n                        </div>\n                      </div>\n                      <div class=\"full-report-details\">\n                        <div class=\"grid\">\n                          <div class=\"tbl\">\n                            <div class=\"tbl-cell charts\">\n                              <div class=\"tbl\">\n                                <div class=\"tbl-row\">\n                                  <div class=\"tbl-cell\">\n                                    <div class=\"box box-first\">\n                                      <header>Box Title</header>\n                                      <div>\n                                        <p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac? Ut adipiscing tellus enim, eu pharetra eros consequat eget!</p>\n                                        <p>Donec sit amet turpis quis magna dictum aliquet. Vestibulum dictum vestibulum risus dictum facilisis! Etiam semper nulla vitae nunc porttitor pretium sit amet vel tellus.</p>\n                                        <p>Aenean ut diam sit amet est sagittis sagittis. Donec quis diam eleifend, tempus turpis fringilla, dictum eros.</p>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class=\"tbl-cell\">\n                                    <div class=\"box box-last\">\n                                      <header>Box Title</header>\n                                      <div>\n                                        <p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac? Ut adipiscing tellus enim, eu pharetra eros consequat eget!</p>\n                                        <p>Donec sit amet turpis quis magna dictum aliquet. Vestibulum dictum vestibulum risus dictum facilisis! Etiam semper nulla vitae nunc porttitor pretium sit amet vel tellus.</p>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"tbl-row\">\n                                  <div class=\"tbl-cell\">\n                                    <div class=\"box box-first\">\n                                      <header>Box Title</header>\n                                      <div>\n                                        <p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac?</p>\n                                        <p>Aenean ut diam sit amet est sagittis sagittis. Donec quis diam eleifend, tempus turpis fringilla, dictum eros.</p>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class=\"tbl-cell\">\n                                    <div class=\"box box-last\">\n                                      <header>Box Title</header>\n                                      <div>\n                                        <p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac? Ut adipiscing tellus enim, eu pharetra eros consequat eget!</p>\n                                        <p>Donec sit amet turpis quis magna dictum aliquet. Vestibulum dictum vestibulum risus dictum facilisis! Etiam semper nulla vitae nunc porttitor pretium sit amet vel tellus.</p>\n                                        <p>Aenean ut diam sit amet est sagittis sagittis. Donec quis diam eleifend, tempus turpis fringilla, dictum eros.</p>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"tbl-cell details\">\n                              <div class=\"tbl\">\n                                <div class=\"tbl-cell\">\n                                  <div class=\"box\">\n                                    <header>Box Title</header>\n                                    <div>\n                                      <ul>\n                                        <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                        <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                        <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                        <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                      </ul>\n                                      <p><a href=\"#\">Show more...</a></p>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"tbl\">\n                                <div class=\"tbl-cell\">\n                                  <div class=\"box\">\n                                    <header>Box Title</header>\n                                    <div>\n                                      <ul>\n                                        <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                        <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                        <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                        <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                      </ul>\n                                      <p><a href=\"#\">Show more...</a></p>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"tbl\">\n                                <div class=\"tbl-cell\">\n                                  <div class=\"box\">\n                                    <header>Box Title</header>\n                                    <div>\n                                      <ul>\n                                        <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                        <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                      </ul>\n                                      <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                      <li>Donec sit amet turpis quis magna dictum aliquet.</li>\n                                    </div>\n                                    <p><a href=\"#\">Show more...</a></p>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <footer id=\"main-footer\">\n            <div class=\"inner\">\n              <div class=\"trampoline\">\n                <p>Produced by the&nbsp;<a href=\"http://www.bvca.co.uk\">BVCA</a>&nbsp;and&nbsp;<a href=\"http://www.trampolinesystems.com/\">Trampoline Systems</a></p>\n                <p><a href=\"mailto:bvca-pemap-issues@trampolinesystems.com?subject=BVCA Private Equity Map issue report\">Report issue</a></p>\n              </div>\n              <!--   p-->\n              <!--     a(href='#') Terms-->\n              <!-- .issues-->\n            </div>\n          </footer>\n        </div>\n      </section>\n    </div>\n    <!--begin-static-base-js-->\n    <script type=\"text/javascript\" src=\"cljs/goog/base.js\"></script>\n    <!--end-static-base-js-->\n    <!--base-js\n    {{{base-js}}}\n    \n    -->\n    <!--begin-dynamic-js-->\n    <!--end-dynamic-js-->\n    <!--dynamic-js\n    <script type=\"text/javascript\" src=\"clustermap.js\"></script><script type=\"text/javascript\">goog.require(\"clustermap.core\");</script>\n    \n    -->\n    <!--begin-static-repl-js-->\n    <!--end-static-repl-js-->\n    <!--repl-js<script type=\"text/javascript\">{{{repl-js}}}</script>\n    -->\n  </body>\n</html>");;return buf.join("");
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