"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _components_Sessions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sessions */ \"./pages/components/Sessions.jsx\");\n/* harmony import */ var _components_SpeakerImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SpeakerImage */ \"./pages/components/SpeakerImage.jsx\");\n\n\n\n\nvar _this = undefined;\nvar index = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                //destructuring properties in the data\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card card-height p-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SpeakerImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    id: id,\n                                    first: first,\n                                    last: last\n                                }, void 0, false, {\n                                    fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                                    first: first,\n                                    last: last,\n                                    bio: bio,\n                                    company: company,\n                                    twitterHandle: twitterHandle,\n                                    favorite: favorite\n                                }, void 0, false, {\n                                    fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sessions__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            sessions: sessions\n                        }, void 0, false, {\n                            fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, id, true, {\n                    fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, this));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQUNPO0FBQ1E7O0FBSXBELEdBQUssQ0FBQ0csS0FBSyxHQUFHLFFBQ2QsR0FEb0IsQ0FBQztJQUNuQixNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUF5Qjs4RkFDckNELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQUs7c0JBQ2pCTCxrREFBUSxDQUFDLFFBQVEsQ0FBRU8sT0FBTyxFQUFFLENBQUM7Z0JBQzVCLEVBQXNDO2dCQUN0QyxHQUFLLENBQ0hDLEVBQUUsR0FRQUQsT0FBTyxDQVJUQyxFQUFFLEVBQ0ZDLEdBQUcsR0FPREYsT0FBTyxDQVBURSxHQUFHLEVBQ0hDLEtBQUssR0FNSEgsT0FBTyxDQU5URyxLQUFLLEVBQ0xDLElBQUksR0FLRkosT0FBTyxDQUxUSSxJQUFJLEVBQ0pDLFFBQVEsR0FJTkwsT0FBTyxDQUpUSyxRQUFRLEVBQ1JDLGFBQWEsR0FHWE4sT0FBTyxDQUhUTSxhQUFhLEVBQ2JDLE9BQU8sR0FFTFAsT0FBTyxDQUZUTyxPQUFPLEVBQ1BDLFFBQVEsR0FDTlIsT0FBTyxDQURUUSxRQUFRO2dCQUdWLE1BQU0sNkVBQ0hYLENBQUc7b0JBRUZDLFNBQVMsRUFBQyxDQUEyRDs7b0dBRXBFRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBMkI7OzRHQUV2Q0gsZ0VBQVk7b0NBQUNNLEVBQUUsRUFBRUEsRUFBRTtvQ0FBRUUsS0FBSyxFQUFFQSxLQUFLO29DQUFFQyxJQUFJLEVBQUVBLElBQUk7Ozs7Ozs0R0FJN0NLLG1CQUFtQjtvQ0FDbEJOLEtBQUssRUFBRUEsS0FBSztvQ0FDWkMsSUFBSSxFQUFFQSxJQUFJO29DQUNWRixHQUFHLEVBQUVBLEdBQUc7b0NBQ1JLLE9BQU8sRUFBRUEsT0FBTztvQ0FDaEJELGFBQWEsRUFBRUEsYUFBYTtvQ0FDNUJELFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7Ozs7O29HQUtyQlgsNERBQVE7NEJBQUNjLFFBQVEsRUFBRUEsUUFBUTs7Ozs7OzttQkFwQnZCUCxFQUFFOzs7OztZQXVCYixDQUFDOzs7Ozs7Ozs7OztBQUlULENBQUM7QUFFRCwrREFBZUwsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9jb21wb25lbnRzL1Nlc3Npb25zXCI7XG5pbXBvcnQgU3BlYWtlckltYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvU3BlYWtlckltYWdlXCI7XG5cblxuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgICAvL2Rlc3RydWN0dXJpbmcgcHJvcGVydGllcyBpbiB0aGUgZGF0YVxuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgYmlvLFxuICAgICAgICAgICAgZmlyc3QsXG4gICAgICAgICAgICBsYXN0LFxuICAgICAgICAgICAgZmF2b3JpdGUsXG4gICAgICAgICAgICB0d2l0dGVySGFuZGxlLFxuICAgICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICAgIHNlc3Npb25zLFxuICAgICAgICAgIH0gPSBzcGVha2VyO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XG4gICAgICAgICAgICAgICAgey8qSW1hZ2UqL31cbiAgICAgICAgICAgICAgICA8U3BlYWtlckltYWdlIGlkPXtpZH0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSAvPlxuICAgICAgICAgICAgICAgIHsvKkltYWdlKi99XG5cbiAgICAgICAgICAgICAgICB7LypTcGVha2VyIERlbW9ncmFwaGljcyovfVxuICAgICAgICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzXG4gICAgICAgICAgICAgICAgICBmaXJzdD17Zmlyc3R9XG4gICAgICAgICAgICAgICAgICBsYXN0PXtsYXN0fVxuICAgICAgICAgICAgICAgICAgYmlvPXtiaW99XG4gICAgICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICAgICAgdHdpdHRlckhhbmRsZT17dHdpdHRlckhhbmRsZX1cbiAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgey8qU3BlYWtlciBEZW1vZ3JhcGhpY3MqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwibmFtZXMiOlsiZGF0YSIsIlNlc3Npb25zIiwiU3BlYWtlckltYWdlIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJiaW8iLCJmaXJzdCIsImxhc3QiLCJmYXZvcml0ZSIsInR3aXR0ZXJIYW5kbGUiLCJjb21wYW55Iiwic2Vzc2lvbnMiLCJTcGVha2VyRGVtb2dyYXBoaWNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});