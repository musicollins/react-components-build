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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _components_Sessions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sessions */ \"./pages/components/Sessions.jsx\");\n/* harmony import */ var _components_SpeakerImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SpeakerImage */ \"./pages/components/SpeakerImage.jsx\");\n\n\n\n\nvar _this = undefined;\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        bio,\n                        \" \",\n                        company,\n                        \" \",\n                        twitterHandle,\n                        \" \",\n                        favorite\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n_c = SpeakerDemographics;\nvar index = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                //destructuring properties in the data\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card card-height p-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SpeakerImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    id: id,\n                                    first: first,\n                                    last: last\n                                }, void 0, false, {\n                                    fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                                    first: first,\n                                    last: last,\n                                    bio: bio,\n                                    company: company,\n                                    twitterHandle: twitterHandle,\n                                    favorite: favorite\n                                }, void 0, false, {\n                                    fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sessions__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            sessions: sessions\n                        }, void 0, false, {\n                            fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, id, true, {\n                    fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\nvar _c;\n$RefreshReg$(_c, \"SpeakerDemographics\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQUNPO0FBQ1E7O1NBRTNDRyxtQkFBbUIsQ0FBQyxLQUFvRCxFQUFFLENBQUM7UUFBdERDLEtBQUssR0FBTixLQUFvRCxDQUFuREEsS0FBSyxFQUFFQyxJQUFJLEdBQVosS0FBb0QsQ0FBNUNBLElBQUksRUFBRUMsR0FBRyxHQUFqQixLQUFvRCxDQUF0Q0EsR0FBRyxFQUFFQyxPQUFPLEdBQTFCLEtBQW9ELENBQWpDQSxPQUFPLEVBQUVDLGFBQWEsR0FBekMsS0FBb0QsQ0FBeEJBLGFBQWEsRUFBRUMsUUFBUSxHQUFuRCxLQUFvRCxDQUFUQSxRQUFRO0lBQzlFLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWM7O3dGQUMxQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXFDO3NHQUNqREMsQ0FBRTtvQkFBQ0QsU0FBUyxFQUFDLENBQXFCOzt3QkFDaENQLEtBQUs7d0JBQUMsQ0FBQzt3QkFBQ0MsSUFBSTs7Ozs7Ozs7Ozs7O3dGQUdoQkssQ0FBRztzR0FDREcsQ0FBQzs7d0JBQ0NQLEdBQUc7d0JBQUMsQ0FBQzt3QkFBQ0MsT0FBTzt3QkFBQyxDQUFDO3dCQUFDQyxhQUFhO3dCQUFDLENBQUM7d0JBQUNDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuRCxDQUFDO0tBZlFOLG1CQUFtQjtBQWlCNUIsR0FBSyxDQUFDVyxLQUFLLEdBQUcsUUFDZCxHQURvQixDQUFDO0lBQ25CLE1BQU0sNkVBQ0hKLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXlCOzhGQUNyQ0QsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBSztzQkFDakJYLGtEQUFRLENBQUMsUUFBUSxDQUFFZ0IsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLEVBQXNDO2dCQUN0QyxHQUFLLENBQ0hDLEVBQUUsR0FRQUQsT0FBTyxDQVJUQyxFQUFFLEVBQ0ZYLEdBQUcsR0FPRFUsT0FBTyxDQVBUVixHQUFHLEVBQ0hGLEtBQUssR0FNSFksT0FBTyxDQU5UWixLQUFLLEVBQ0xDLElBQUksR0FLRlcsT0FBTyxDQUxUWCxJQUFJLEVBQ0pJLFFBQVEsR0FJTk8sT0FBTyxDQUpUUCxRQUFRLEVBQ1JELGFBQWEsR0FHWFEsT0FBTyxDQUhUUixhQUFhLEVBQ2JELE9BQU8sR0FFTFMsT0FBTyxDQUZUVCxPQUFPLEVBQ1BXLFFBQVEsR0FDTkYsT0FBTyxDQURURSxRQUFRO2dCQUdWLE1BQU0sNkVBQ0hSLENBQUc7b0JBRUZDLFNBQVMsRUFBQyxDQUEyRDs7b0dBRXBFRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBMkI7OzRHQUV2Q1QsZ0VBQVk7b0NBQUNlLEVBQUUsRUFBRUEsRUFBRTtvQ0FBRWIsS0FBSyxFQUFFQSxLQUFLO29DQUFFQyxJQUFJLEVBQUVBLElBQUk7Ozs7Ozs0R0FJN0NGLG1CQUFtQjtvQ0FDbEJDLEtBQUssRUFBRUEsS0FBSztvQ0FDWkMsSUFBSSxFQUFFQSxJQUFJO29DQUNWQyxHQUFHLEVBQUVBLEdBQUc7b0NBQ1JDLE9BQU8sRUFBRUEsT0FBTztvQ0FDaEJDLGFBQWEsRUFBRUEsYUFBYTtvQ0FDNUJDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7Ozs7O29HQUtyQlIsNERBQVE7NEJBQUNpQixRQUFRLEVBQUVBLFFBQVE7Ozs7Ozs7bUJBcEJ2QkQsRUFBRTs7Ozs7WUF1QmIsQ0FBQzs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0FBRUQsK0RBQWVILEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uL1NwZWFrZXJEYXRhXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9TZXNzaW9uc1wiO1xuaW1wb3J0IFNwZWFrZXJJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL1NwZWFrZXJJbWFnZVwiO1xuXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZX0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtiaW99IHtjb21wYW55fSB7dHdpdHRlckhhbmRsZX0ge2Zhdm9yaXRlfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge2RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgLy9kZXN0cnVjdHVyaW5nIHByb3BlcnRpZXMgaW4gdGhlIGRhdGFcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGJpbyxcbiAgICAgICAgICAgIGZpcnN0LFxuICAgICAgICAgICAgbGFzdCxcbiAgICAgICAgICAgIGZhdm9yaXRlLFxuICAgICAgICAgICAgdHdpdHRlckhhbmRsZSxcbiAgICAgICAgICAgIGNvbXBhbnksXG4gICAgICAgICAgICBzZXNzaW9ucyxcbiAgICAgICAgICB9ID0gc3BlYWtlcjtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICAgICAgICAgIHsvKkltYWdlKi99XG4gICAgICAgICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cbiAgICAgICAgICAgICAgICB7LypJbWFnZSovfVxuXG4gICAgICAgICAgICAgICAgey8qU3BlYWtlciBEZW1vZ3JhcGhpY3MqL31cbiAgICAgICAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljc1xuICAgICAgICAgICAgICAgICAgZmlyc3Q9e2ZpcnN0fVxuICAgICAgICAgICAgICAgICAgbGFzdD17bGFzdH1cbiAgICAgICAgICAgICAgICAgIGJpbz17YmlvfVxuICAgICAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGU9e3R3aXR0ZXJIYW5kbGV9XG4gICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIHsvKlNwZWFrZXIgRGVtb2dyYXBoaWNzKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sIm5hbWVzIjpbImRhdGEiLCJTZXNzaW9ucyIsIlNwZWFrZXJJbWFnZSIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJmaXJzdCIsImxhc3QiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImZhdm9yaXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwiaW5kZXgiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJzZXNzaW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});