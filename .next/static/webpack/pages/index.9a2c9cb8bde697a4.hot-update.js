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

/***/ "./src/components/Speaker.jsx":
/*!************************************!*\
  !*** ./src/components/Speaker.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerImage */ \"./src/components/SpeakerImage.jsx\");\n/* harmony import */ var _SpeakerDemographics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerDemographics */ \"./src/components/SpeakerDemographics.jsx\");\n/* harmony import */ var _Sessions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sessions */ \"./src/components/Sessions.jsx\");\n/* harmony import */ var _Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Favorite */ \"./src/components/Favorite.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction App(param) {\n    var speaker = param.speaker, sessionState = param.sessionState;\n    _s();\n    var sessions = speaker.sessions, id = speaker.id, first = speaker.first, last = speaker.last, favorite = speaker.favorite;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(favorite), isFavorite = ref[0], setIsFavorite = ref[1];\n    var toggleFavourite = function() {\n        console.log(\"CLICKED\");\n        setIsFavorite(!isFavorite);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"/Users/musicollins/projects/react-components-build/src/components/Speaker.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDemographics__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, speaker), void 0, false, {\n                        fileName: \"/Users/musicollins/projects/react-components-build/src/components/Speaker.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Favorite__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        isFavourite: isFavorite,\n                        toggleIsFavourite: toggleFavourite\n                    }, void 0, false, {\n                        fileName: \"/Users/musicollins/projects/react-components-build/src/components/Speaker.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/musicollins/projects/react-components-build/src/components/Speaker.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            sessionState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sessions__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/src/components/Speaker.jsx\",\n                lineNumber: 23,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/musicollins/projects/react-components-build/src/components/Speaker.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n}\n_s(App, \"2RF+r91QyCf7+oac0ADtc/RzPlw=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFDdEI7QUFDQztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFdkJLLEdBQUcsQ0FBQyxLQUF5QixFQUFFLENBQUM7UUFBMUJDLE9BQU8sR0FBVCxLQUF5QixDQUF2QkEsT0FBTyxFQUFFQyxZQUFZLEdBQXZCLEtBQXlCLENBQWRBLFlBQVk7O0lBQ2xDLEdBQUssQ0FBR0MsUUFBUSxHQUFnQ0YsT0FBTyxDQUEvQ0UsUUFBUSxFQUFFQyxFQUFFLEdBQTRCSCxPQUFPLENBQXJDRyxFQUFFLEVBQUVDLEtBQUssR0FBcUJKLE9BQU8sQ0FBakNJLEtBQUssRUFBRUMsSUFBSSxHQUFlTCxPQUFPLENBQTFCSyxJQUFJLEVBQUVDLFFBQVEsR0FBS04sT0FBTyxDQUFwQk0sUUFBUTtJQUMzQyxHQUFLLENBQStCUixHQUFrQixHQUFsQkEsK0NBQVEsQ0FBQ1EsUUFBUSxHQUE5Q0MsVUFBVSxHQUFtQlQsR0FBa0IsS0FBbkNVLGFBQWEsR0FBSVYsR0FBa0I7SUFFdEQsR0FBSyxDQUFDVyxlQUFlLEdBQUUsUUFDeEIsR0FENkIsQ0FBQztRQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUztRQUNyQkgsYUFBYSxFQUFFRCxVQUFVO0lBQzNCLENBQUM7SUFFRCxNQUFNLDZFQUNISyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUEyRDs7d0ZBQ3ZFRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBMkI7O2dHQUN2Q25CLHFEQUFZO3dCQUFDUyxFQUFFLEVBQUVBLEVBQUU7d0JBQUVDLEtBQUssRUFBRUEsS0FBSzt3QkFBRUMsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Z0dBQzdDViw0REFBbUIsb0JBQUtLLE9BQU87Ozs7O2dHQUMvQkgsaURBQVM7d0JBQUNpQixXQUFXLEVBQUVQLFVBQVU7d0JBQUVRLGlCQUFpQixFQUFFTixlQUFlOzs7Ozs7Ozs7Ozs7WUFFdkVSLFlBQVksZ0ZBQUtMLGlEQUFRO2dCQUFDTSxRQUFRLEVBQUVBLFFBQVE7Ozs7Ozs7Ozs7OztBQUduRCxDQUFDO0dBbkJRSCxHQUFHO0tBQUhBLEdBQUc7QUFxQlosK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzeD9lOGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VySW1hZ2UgZnJvbSBcIi4vU3BlYWtlckltYWdlXCI7XG5pbXBvcnQgU3BlYWtlckRlbW9ncmFwaGljcyBmcm9tIFwiLi9TcGVha2VyRGVtb2dyYXBoaWNzXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBGYXZvdXJpdGUgZnJvbSBcIi4vRmF2b3JpdGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEFwcCh7IHNwZWFrZXIsIHNlc3Npb25TdGF0ZSB9KSB7XG4gIGNvbnN0IHsgc2Vzc2lvbnMsIGlkLCBmaXJzdCwgbGFzdCwgZmF2b3JpdGUgfSA9IHNwZWFrZXI7XG4gIGNvbnN0IFtpc0Zhdm9yaXRlLCBzZXRJc0Zhdm9yaXRlXSA9IHVzZVN0YXRlKGZhdm9yaXRlKTtcblxuICBjb25zdCB0b2dnbGVGYXZvdXJpdGU9ICgpID0+e1xuICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0tFRFwiKVxuICAgIHNldElzRmF2b3JpdGUoIWlzRmF2b3JpdGUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cbiAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cbiAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3Mgey4uLnNwZWFrZXJ9IC8+XG4gICAgICAgIDxGYXZvdXJpdGUgaXNGYXZvdXJpdGU9e2lzRmF2b3JpdGV9IHRvZ2dsZUlzRmF2b3VyaXRlPXt0b2dnbGVGYXZvdXJpdGV9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nlc3Npb25TdGF0ZSAmJiA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJTcGVha2VySW1hZ2UiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiU2Vzc2lvbnMiLCJGYXZvdXJpdGUiLCJ1c2VTdGF0ZSIsIkFwcCIsInNwZWFrZXIiLCJzZXNzaW9uU3RhdGUiLCJzZXNzaW9ucyIsImlkIiwiZmlyc3QiLCJsYXN0IiwiZmF2b3JpdGUiLCJpc0Zhdm9yaXRlIiwic2V0SXNGYXZvcml0ZSIsInRvZ2dsZUZhdm91cml0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpc0Zhdm91cml0ZSIsInRvZ2dsZUlzRmF2b3VyaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.jsx\n");

/***/ })

});