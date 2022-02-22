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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _components_Sessions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sessions */ \"./pages/components/Sessions.jsx\");\n/* harmony import */ var _components_SpeakerImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SpeakerImage */ \"./pages/components/SpeakerImage.jsx\");\n/* harmony import */ var _components_SpeakerDemographics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SpeakerDemographics */ \"./pages/components/SpeakerDemographics.jsx\");\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nfunction Speaker(param) {\n    var speaker = param.speaker;\n    var sessions = speaker.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SpeakerImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SpeakerDemographics__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, speaker), void 0, false, {\n                        fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sessions__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, id, true, {\n        fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_c = Speaker;\nvar index = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                //destructuring properties in the data\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Speaker, {\n                    id: speaker.id,\n                    speaker: speaker\n                }, void 0, false, {\n                    fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 18\n                }, this));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/musicollins/projects/react-components-build/pages/index.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\nvar _c;\n$RefreshReg$(_c, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFDTztBQUNRO0FBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUV6REksT0FBTyxDQUFDLEtBQVMsRUFBRSxDQUFDO1FBQVhDLE9BQU8sR0FBUixLQUFTLENBQVJBLE9BQU87SUFDckIsR0FBSyxDQUFFQyxRQUFRLEdBQUlELE9BQU8sQ0FBbkJDLFFBQVE7SUFDakIsTUFBTSw2RUFDSEMsQ0FBRztRQUVGQyxTQUFTLEVBQUMsQ0FBMkQ7O3dGQUVwRUQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTJCOztnR0FFdkNOLGdFQUFZO3dCQUFDTyxFQUFFLEVBQUVBLEVBQUU7d0JBQUVDLEtBQUssRUFBRUEsS0FBSzt3QkFBRUMsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Z0dBRTdDUix1RUFBbUIsb0JBQUtFLE9BQU87Ozs7Ozs7Ozs7O3dGQUVqQ0osNERBQVE7Z0JBQUNLLFFBQVEsRUFBRUEsUUFBUTs7Ozs7OztPQVR2QkcsRUFBRTs7Ozs7QUFZYixDQUFDO0tBaEJRTCxPQUFPO0FBa0JoQixHQUFLLENBQUNRLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7SUFDbkIsTUFBTSw2RUFDSEwsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBeUI7OEZBQ3JDRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFLO3NCQUNqQlIsa0RBQVEsQ0FBQyxRQUFRLENBQUVLLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixFQUFzQztnQkFDdEMsR0FBSyxDQUNISSxFQUFFLEdBUUFKLE9BQU8sQ0FSVEksRUFBRSxFQUNGSyxHQUFHLEdBT0RULE9BQU8sQ0FQVFMsR0FBRyxFQUNISixLQUFLLEdBTUhMLE9BQU8sQ0FOVEssS0FBSyxFQUNMQyxJQUFJLEdBS0ZOLE9BQU8sQ0FMVE0sSUFBSSxFQUNKSSxRQUFRLEdBSU5WLE9BQU8sQ0FKVFUsUUFBUSxFQUNSQyxhQUFhLEdBR1hYLE9BQU8sQ0FIVFcsYUFBYSxFQUNiQyxPQUFPLEdBRUxaLE9BQU8sQ0FGVFksT0FBTyxFQUNQWCxRQUFRLEdBQ05ELE9BQU8sQ0FEVEMsUUFBUTtnQkFHVixNQUFNLDZFQUFFRixPQUFPO29CQUFDSyxFQUFFLEVBQUVKLE9BQU8sQ0FBQ0ksRUFBRTtvQkFBRUosT0FBTyxFQUFFQSxPQUFPOzs7Ozs7WUFDbEQsQ0FBQzs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0FBRUQsK0RBQWVPLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uL1NwZWFrZXJEYXRhXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9TZXNzaW9uc1wiO1xuaW1wb3J0IFNwZWFrZXJJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL1NwZWFrZXJJbWFnZVwiO1xuaW1wb3J0IFNwZWFrZXJEZW1vZ3JhcGhpY3MgZnJvbSBcIi4vY29tcG9uZW50cy9TcGVha2VyRGVtb2dyYXBoaWNzXCI7XG5cbmZ1bmN0aW9uIFNwZWFrZXIoe3NwZWFrZXJ9KSB7XG4gICAgY29uc3Qge3Nlc3Npb25zfSA9IHNwZWFrZXJcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBrZXk9e2lkfVxuICAgICAgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cbiAgICAgICAgey8qSW1hZ2UqL31cbiAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cbiAgICAgICAgey8qU3BlYWtlciBEZW1vZ3JhcGhpY3MqL31cbiAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3Mgey4uLnNwZWFrZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgIC8vZGVzdHJ1Y3R1cmluZyBwcm9wZXJ0aWVzIGluIHRoZSBkYXRhXG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBiaW8sXG4gICAgICAgICAgICBmaXJzdCxcbiAgICAgICAgICAgIGxhc3QsXG4gICAgICAgICAgICBmYXZvcml0ZSxcbiAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGUsXG4gICAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgICAgc2Vzc2lvbnMsXG4gICAgICAgICAgfSA9IHNwZWFrZXI7XG5cbiAgICAgICAgICByZXR1cm4gPFNwZWFrZXIgaWQ9e3NwZWFrZXIuaWR9IHNwZWFrZXI9e3NwZWFrZXJ9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwibmFtZXMiOlsiZGF0YSIsIlNlc3Npb25zIiwiU3BlYWtlckltYWdlIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2Vzc2lvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImZpcnN0IiwibGFzdCIsImluZGV4IiwibWFwIiwiYmlvIiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});