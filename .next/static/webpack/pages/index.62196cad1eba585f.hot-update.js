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

/***/ "./src/components/Favorite.jsx":
/*!*************************************!*\
  !*** ./src/components/Favorite.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Favorite; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Favorite(param) {\n    var favorite = param.favorite, toggleIsFavourite = param.toggleIsFavourite;\n    var doneCallBack = function doneCallBack() {\n        setLoading(false);\n        console.log(\"Component Updated => \".concat(new Date().getMilliseconds()));\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref[0], setLoading = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function onClick() {\n                setLoading(true);\n                return toggleIsFavourite(doneCallBack);\n            },\n            className: \"d-flex align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/Users/musicollins/projects/react-components-build/src/components/Favorite.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                \"   \",\n                \"Favorite\",\n                \" \",\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"fa fa-circle-notch fa-spin\"\n                }, void 0, false, {\n                    fileName: \"/Users/musicollins/projects/react-components-build/src/components/Favorite.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 20\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/musicollins/projects/react-components-build/src/components/Favorite.jsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/musicollins/projects/react-components-build/src/components/Favorite.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n};\n_s(Favorite, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Favorite;\nvar _c;\n$RefreshReg$(_c, \"Favorite\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GYXZvcml0ZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDOztBQUV0QixRQUFRLENBQUNFLFFBQVEsQ0FBQyxLQUErQixFQUFFLENBQUM7UUFBaENDLFFBQVEsR0FBVixLQUErQixDQUE3QkEsUUFBUSxFQUFFQyxpQkFBaUIsR0FBN0IsS0FBK0IsQ0FBbkJBLGlCQUFpQjtRQUtuREMsWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksR0FBRyxDQUFDO1FBQ3ZCQyxVQUFVLENBQUMsS0FBSztRQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBcUIsdUJBQStCLE9BQTdCLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHQyxlQUFlO0lBQ2hFLENBQUM7O0lBTkQsR0FBSyxDQUF5QlQsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckNVLE9BQU8sR0FBZ0JWLEdBQWUsS0FBN0JLLFVBQVUsR0FBSUwsR0FBZTtJQU83QyxNQUFNLDZFQUNIVyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFjOzhGQUMxQkMsQ0FBSTtZQUNIQyxPQUFPLEVBQUUsUUFBUSxDQUFqQkEsT0FBTyxHQUFjLENBQUM7Z0JBQ3BCVCxVQUFVLENBQUMsSUFBSTtnQkFDZixNQUFNLENBQUNGLGlCQUFpQixDQUFDQyxZQUFZO1lBQ3ZDLENBQUM7WUFDRFEsU0FBUyxFQUFDLENBQTJCOzs0RkFFcENHLENBQUM7b0JBQ0FILFNBQVMsRUFDUFYsUUFBUSxLQUFLLElBQUksR0FBRyxDQUFtQixxQkFBRyxDQUFxQjs7Ozs7O2dCQUdsRSxDQUFLO2dCQUFDLENBQVE7Z0JBQUMsQ0FBRztnQkFDbEJRLE9BQU8sK0VBQUlHLENBQUk7b0JBQUNELFNBQVMsRUFBQyxDQUE0Qjs7Ozs7MkJBQVcsSUFBSTs7Ozs7Ozs7Ozs7O0FBSTlFLENBQUM7R0E1QnVCWCxRQUFRO0tBQVJBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmF2b3JpdGUuanN4P2Y2ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXZvcml0ZSh7IGZhdm9yaXRlLCB0b2dnbGVJc0Zhdm91cml0ZSB9KSB7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgZnVuY3Rpb24gZG9uZUNhbGxCYWNrKCkge1xuICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgY29uc29sZS5sb2coYENvbXBvbmVudCBVcGRhdGVkID0+ICR7bmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKX1gKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XG4gICAgICA8c3BhblxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICAgIHJldHVybiB0b2dnbGVJc0Zhdm91cml0ZShkb25lQ2FsbEJhY2spO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAge1wiICAgXCJ9RmF2b3JpdGV7XCIgXCJ9XG4gICAgICAgIHtsb2FkaW5nID8gPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+IDogbnVsbH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmF2b3JpdGUiLCJmYXZvcml0ZSIsInRvZ2dsZUlzRmF2b3VyaXRlIiwiZG9uZUNhbGxCYWNrIiwic2V0TG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwibG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJvbkNsaWNrIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Favorite.jsx\n");

/***/ })

});