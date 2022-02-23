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

/***/ "./src/components/SpeakersList.jsx":
/*!*****************************************!*\
  !*** ./src/components/SpeakersList.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakersList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.jsx\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction SpeakersList(param) {\n    var sessionState = param.sessionState;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_SpeakerData__WEBPACK_IMPORTED_MODULE_3__.data), speakersData = ref[0], setSpeakersData = ref[1];\n    var handleClickFavorite = function(id) {\n        console.log(\"CLICKED!\");\n        var speakerToBeUpdated = speakersData.find(function(speaker) {\n            return speaker.id === id;\n        });\n        var updatedSpeaker = _objectSpread({}, speakerToBeUpdated, {\n            favorite: !speakerToBeUpdated.favorite\n        });\n        var updatedData = speakerData.map(function(speaker) {\n            return speaker.id === id ? updatedSpeaker : speaker;\n        });\n        setSpeakersData(updatedData);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.map(function(speaker) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    speaker: speaker,\n                    sessionState: sessionState,\n                    handleClickFavorite: function() {\n                        return handleClickFavorite(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this));\n};\n_s(SpeakersList, \"wuvWnGDG1cZpF3THbsQMJHztE6w=\");\n_c = SpeakersList;\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1I7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLFFBQVEsQ0FBQ0ksWUFBWSxDQUFDLEtBQWMsRUFBRSxDQUFDO1FBQWhCQyxZQUFZLEdBQWIsS0FBYyxDQUFiQSxZQUFZOztJQUVoRCxHQUFLLENBQW1DSixHQUFjLEdBQWRBLCtDQUFRLENBQUNFLDhDQUFJLEdBQTlDRyxZQUFZLEdBQXFCTCxHQUFjLEtBQWpDTSxlQUFlLEdBQUlOLEdBQWM7SUFFdEQsR0FBSyxDQUFDTyxtQkFBbUIsR0FBRyxRQUFRLENBQVBDLEVBQUUsRUFBSSxDQUFDO1FBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFVO1FBQ3RCLEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUdOLFlBQVksQ0FBQ08sSUFBSSxDQUFDQyxRQUFRLENBQVJBLE9BQU87WUFBSUEsTUFBTSxDQUFOQSxPQUFPLENBQUNMLEVBQUUsS0FBS0EsRUFBRTs7UUFFekUsR0FBSyxDQUFDTSxjQUFjLHFCQUNmSCxrQkFBa0I7WUFDckJJLFFBQVEsR0FBR0osa0JBQWtCLENBQUNJLFFBQVE7O1FBR3hDLEdBQUssQ0FBQ0MsV0FBVyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQ0wsUUFBUSxDQUFSQSxPQUFPLEVBQUksQ0FBQztZQUM5QyxNQUFNLENBQUNBLE9BQU8sQ0FBQ0wsRUFBRSxLQUFLQSxFQUFFLEdBQUdNLGNBQWMsR0FBR0QsT0FBTztRQUNyRCxDQUFDO1FBQ0RQLGVBQWUsQ0FBQ1UsV0FBVztJQUM3QixDQUFDO0lBQ0QsTUFBTSw2RUFDSEcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBeUI7OEZBQ3ZDRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFLO3NCQUNqQmYsWUFBWSxDQUFDYSxHQUFHLENBQUMsUUFBUSxDQUFFTCxPQUFPLEVBQUUsQ0FBQztnQkFDcEMsTUFBTSw2RUFDTFosZ0RBQU87b0JBRU5ZLE9BQU8sRUFBRUEsT0FBTztvQkFDaEJULFlBQVksRUFBRUEsWUFBWTtvQkFDMUJHLG1CQUFtQixFQUNqQixRQUFRO3dCQUFGQSxNQUFNLENBQU5BLG1CQUFtQixDQUFDTSxPQUFPLENBQUNMLEVBQUU7O21CQUpqQ0ssT0FBTyxDQUFDTCxFQUFFOzs7OztZQU1uQixDQUFDOzs7Ozs7Ozs7OztBQUlQLENBQUM7R0FsQ3VCTCxZQUFZO0tBQVpBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzeD83MTg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi9TcGVha2VyJ1xuaW1wb3J0IHtkYXRhfSBmcm9tICcuLi8uLi9TcGVha2VyRGF0YSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHtzZXNzaW9uU3RhdGV9KSB7XG5cbiAgY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrRmF2b3JpdGUgPSAoaWQpID0+e1xuICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0tFRCFcIilcbiAgICBjb25zdCBzcGVha2VyVG9CZVVwZGF0ZWQgPSBzcGVha2Vyc0RhdGEuZmluZChzcGVha2VyID0+IHNwZWFrZXIuaWQgPT09IGlkKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRTcGVha2VyID0ge1xuICAgICAgLi4uc3BlYWtlclRvQmVVcGRhdGVkLFxuICAgICAgZmF2b3JpdGU6ICFzcGVha2VyVG9CZVVwZGF0ZWQuZmF2b3JpdGVcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHNwZWFrZXJEYXRhLm1hcChzcGVha2VyID0+IHtcbiAgICAgIHJldHVybiBzcGVha2VyLmlkID09PSBpZCA/IHVwZGF0ZWRTcGVha2VyIDogc3BlYWtlclxuICAgIH0pXG4gICAgc2V0U3BlYWtlcnNEYXRhKHVwZGF0ZWREYXRhKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8U3BlYWtlciBcbiAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9IFxuICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgc2Vzc2lvblN0YXRlPXtzZXNzaW9uU3RhdGV9IFxuICAgICAgICAgIGhhbmRsZUNsaWNrRmF2b3JpdGU9e1xuICAgICAgICAgICAgKCkgPT4gaGFuZGxlQ2xpY2tGYXZvcml0ZShzcGVha2VyLmlkKVxuICAgICAgICAgIH0vPik7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU3BlYWtlciIsImRhdGEiLCJTcGVha2Vyc0xpc3QiLCJzZXNzaW9uU3RhdGUiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJoYW5kbGVDbGlja0Zhdm9yaXRlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic3BlYWtlclRvQmVVcGRhdGVkIiwiZmluZCIsInNwZWFrZXIiLCJ1cGRhdGVkU3BlYWtlciIsImZhdm9yaXRlIiwidXBkYXRlZERhdGEiLCJzcGVha2VyRGF0YSIsIm1hcCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.jsx\n");

/***/ })

});