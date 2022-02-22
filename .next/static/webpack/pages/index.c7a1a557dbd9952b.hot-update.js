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

/***/ "./pages/components/Speaker.jsx":
/*!**************************************!*\
  !*** ./pages/components/Speaker.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerImage */ \"./pages/components/SpeakerImage.jsx\");\n/* harmony import */ var _SpeakerDemographics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerDemographics */ \"./pages/components/SpeakerDemographics.jsx\");\n/* harmony import */ var _Sessions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sessions */ \"./pages/components/Sessions.jsx\");\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction Speaker(param) {\n    var speaker = param.speaker;\n    var sessions = speaker.sessions, id = speaker.id, first = speaker.first, last = speaker.last;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"/Users/musicollins/projects/react-components-build/pages/components/Speaker.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDemographics__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, speaker), void 0, false, {\n                        fileName: \"/Users/musicollins/projects/react-components-build/pages/components/Speaker.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/musicollins/projects/react-components-build/pages/components/Speaker.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sessions__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/pages/components/Speaker.jsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/musicollins/projects/react-components-build/pages/components/Speaker.jsx\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, this));\n}\n_c = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c;\n$RefreshReg$(_c, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDYztBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFeEJHLE9BQU8sQ0FBQyxLQUFXLEVBQUUsQ0FBQztRQUFaQyxPQUFPLEdBQVQsS0FBVyxDQUFUQSxPQUFPO0lBQ3RCLEdBQUssQ0FBR0MsUUFBUSxHQUFzQkQsT0FBTyxDQUFyQ0MsUUFBUSxFQUFFQyxFQUFFLEdBQWtCRixPQUFPLENBQTNCRSxFQUFFLEVBQUVDLEtBQUssR0FBV0gsT0FBTyxDQUF2QkcsS0FBSyxFQUFFQyxJQUFJLEdBQUtKLE9BQU8sQ0FBaEJJLElBQUk7SUFDakMsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBMkQ7O3dGQUN2RUQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTJCOztnR0FDdkNWLHFEQUFZO3dCQUFDTSxFQUFFLEVBQUVBLEVBQUU7d0JBQUVDLEtBQUssRUFBRUEsS0FBSzt3QkFBRUMsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Z0dBQzdDUCw0REFBbUIsb0JBQUtHLE9BQU87Ozs7Ozs7Ozs7O3dGQUVqQ0YsaURBQVE7Z0JBQUNHLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7Ozs7O0FBR2xDLENBQUM7S0FYTUYsT0FBTztBQWNkLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TcGVha2VyLmpzeD8zZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VySW1hZ2UgZnJvbSBcIi4vU3BlYWtlckltYWdlXCI7XG5pbXBvcnQgU3BlYWtlckRlbW9ncmFwaGljcyBmcm9tIFwiLi9TcGVha2VyRGVtb2dyYXBoaWNzXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSAnLi9TZXNzaW9ucydcblxuZnVuY3Rpb24gU3BlYWtlcih7IHNwZWFrZXIgfSkge1xuICAgIGNvbnN0IHsgc2Vzc2lvbnMsIGlkLCBmaXJzdCwgbGFzdCB9ID0gc3BlYWtlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cbiAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyB7Li4uc3BlYWtlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cblxuICBleHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJuYW1lcyI6WyJTcGVha2VySW1hZ2UiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiU2Vzc2lvbnMiLCJTcGVha2VyIiwic3BlYWtlciIsInNlc3Npb25zIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Speaker.jsx\n");

/***/ })

});