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

/***/ "./src/components/SpeakerDemographics.jsx":
/*!************************************************!*\
  !*** ./src/components/SpeakerDemographics.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Favorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Favorite */ \"./src/components/Favorite.jsx\");\n\n\n\nvar _s = $RefreshSig$();\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(favorite), isFavorite = ref[0], setIsFavorite = ref[1];\n    var handleClickFavorite = function(e) {\n        setIsFavorite(!isFavorite);\n        console.log(isFavorite);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Favorite__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                favorite: favorite,\n                toggleIsFavourite: handleClickFavorite\n            }, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakerDemographics.jsx\",\n        lineNumber: 12,\n        columnNumber: 7\n    }, this));\n}\n_s(SpeakerDemographics, \"2RF+r91QyCf7+oac0ADtc/RzPlw=\");\n_c = SpeakerDemographics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerDemographics);\nvar _c;\n$RefreshReg$(_c, \"SpeakerDemographics\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyRGVtb2dyYXBoaWNzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ0M7O1NBQ3hCRSxtQkFBbUIsQ0FBQyxLQUFvRCxFQUFFLENBQUM7UUFBdERDLEtBQUssR0FBTixLQUFvRCxDQUFuREEsS0FBSyxFQUFFQyxJQUFJLEdBQVosS0FBb0QsQ0FBNUNBLElBQUksRUFBRUMsR0FBRyxHQUFqQixLQUFvRCxDQUF0Q0EsR0FBRyxFQUFFQyxPQUFPLEdBQTFCLEtBQW9ELENBQWpDQSxPQUFPLEVBQUVDLGFBQWEsR0FBekMsS0FBb0QsQ0FBeEJBLGFBQWEsRUFBRUMsUUFBUSxHQUFuRCxLQUFvRCxDQUFUQSxRQUFROztJQUM1RSxHQUFLLENBQStCUixHQUFrQixHQUFsQkEsK0NBQVEsQ0FBQ1EsUUFBUSxHQUE5Q0MsVUFBVSxHQUFtQlQsR0FBa0IsS0FBbkNVLGFBQWEsR0FBSVYsR0FBa0I7SUFFdEQsR0FBSyxDQUFDVyxtQkFBbUIsR0FBRyxRQUNoQyxDQURpQ0MsQ0FBQyxFQUFJLENBQUM7UUFDakNGLGFBQWEsRUFBRUQsVUFBVTtRQUN6QkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLFVBQVU7SUFDeEIsQ0FBQztJQUVILE1BQU0sNkVBQ0RNLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWM7O3dGQUMxQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXFDO3NHQUNqREMsQ0FBRTtvQkFBQ0QsU0FBUyxFQUFDLENBQXFCOzt3QkFDaENiLEtBQUs7d0JBQUMsQ0FBQzt3QkFBQ0MsSUFBSTs7Ozs7Ozs7Ozs7O3dGQUdoQkgsaURBQVE7Z0JBQUNPLFFBQVEsRUFBRUEsUUFBUTtnQkFBRVUsaUJBQWlCLEVBQUVQLG1CQUFtQjs7Ozs7O3dGQUVuRUksQ0FBRzs7Z0dBQ0RJLENBQUM7d0JBQUNILFNBQVMsRUFBQyxDQUFrQjtrQ0FDNUJYLEdBQUc7Ozs7OztnR0FFTFUsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQTZCOzt3R0FDekNELENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFTOztnSEFDckJJLENBQUU7a0RBQUMsQ0FBTzs7Ozs7O2dIQUNWQyxDQUFFO2tEQUFFZixPQUFPOzs7Ozs7Ozs7Ozs7d0dBRWJTLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFTOztnSEFDckJJLENBQUU7a0RBQUMsQ0FBTzs7Ozs7O2dIQUNWQyxDQUFFO2tEQUFFZCxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUIsQ0FBQztHQWxDTUwsbUJBQW1CO0tBQW5CQSxtQkFBbUI7QUFvQzFCLCtEQUFlQSxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyRGVtb2dyYXBoaWNzLmpzeD8zNjZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmF2b3JpdGUgZnJvbSBcIi4vRmF2b3JpdGVcIjtcbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3Moe2ZpcnN0LCBsYXN0LCBiaW8sIGNvbXBhbnksIHR3aXR0ZXJIYW5kbGUsIGZhdm9yaXRlfSkge1xuICAgIGNvbnN0IFtpc0Zhdm9yaXRlLCBzZXRJc0Zhdm9yaXRlXSA9IHVzZVN0YXRlKGZhdm9yaXRlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrRmF2b3JpdGUgPSAoZSkgPT57XG4gICAgICBzZXRJc0Zhdm9yaXRlKCFpc0Zhdm9yaXRlKVxuICAgICAgY29uc29sZS5sb2coaXNGYXZvcml0ZSlcbiAgICB9XG4gIFxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RmF2b3JpdGUgZmF2b3JpdGU9e2Zhdm9yaXRlfSB0b2dnbGVJc0Zhdm91cml0ZT17aGFuZGxlQ2xpY2tGYXZvcml0ZX0vPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge2Jpb31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxuICAgICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XG4gICAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxuICAgICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBTcGVha2VyRGVtb2dyYXBoaWNzOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZhdm9yaXRlIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImZpcnN0IiwibGFzdCIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiZmF2b3JpdGUiLCJpc0Zhdm9yaXRlIiwic2V0SXNGYXZvcml0ZSIsImhhbmRsZUNsaWNrRmF2b3JpdGUiLCJlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwidG9nZ2xlSXNGYXZvdXJpdGUiLCJwIiwiaDUiLCJoNiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakerDemographics.jsx\n");

/***/ })

});