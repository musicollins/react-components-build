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

/***/ "./src/components/Speakers.jsx":
/*!*************************************!*\
  !*** ./src/components/Speakers.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Speakers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _SpeakersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersList */ \"./src/components/SpeakersList.jsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.jsx\");\n/* harmony import */ var _SpeakersToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakersToolbar */ \"./src/components/SpeakersToolbar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Speakers() {\n    var handleShowSessions = function handleShowSessions(e) {\n        //Changes the component state when the checkbox input is toggled\n        //Toggles the checked attribute of the input (type=>checkbox)\n        setShowSessions(e.target.checked);\n    };\n    var handleShowTheme = function handleShowTheme(e) {\n        //Changes the component state when the dropdown label tag\n        console.log(e.target.value);\n        setTheme(e.target.value);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true), showSessions = ref[0], setShowSessions = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"light\"), theme = ref1[0], setTheme = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/src/components/Speakers.jsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersToolbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sessionState: showSessions,\n                themeState: theme,\n                toggleSessions: handleShowSessions,\n                toggleTheme: handleShowTheme\n            }, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/src/components/Speakers.jsx\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                speakers: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data,\n                sessionState: showSessions\n            }, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/src/components/Speakers.jsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/musicollins/projects/react-components-build/src/components/Speakers.jsx\",\n        lineNumber: 23,\n        columnNumber: 7\n    }, this));\n};\n_s(Speakers, \"+rjej0sXE5SRdzLZWRR/44WX6yA=\");\n_c = Speakers;\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNDO0FBQ1o7QUFDa0I7QUFDZjs7QUFFakIsUUFBUSxDQUFDSyxRQUFRLEdBQUcsQ0FBQztRQUl6QkMsa0JBQWtCLEdBQTNCLFFBQVEsQ0FBQ0Esa0JBQWtCLENBQUNDLENBQUMsRUFBRSxDQUFDO1FBQzlCLEVBQWdFO1FBQ2hFLEVBQTZEO1FBQzdEQyxlQUFlLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPO0lBQ2xDLENBQUM7UUFDUUMsZUFBZSxHQUF4QixRQUFRLENBQUNBLGVBQWUsQ0FBQ0osQ0FBQyxFQUFFLENBQUM7UUFDM0IsRUFBeUQ7UUFDekRLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixDQUFDLENBQUNFLE1BQU0sQ0FBQ0ssS0FBSztRQUMxQkMsUUFBUSxDQUFDUixDQUFDLENBQUNFLE1BQU0sQ0FBQ0ssS0FBSztJQUN6QixDQUFDOztJQVpELEdBQUssQ0FBbUNWLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlDWSxZQUFZLEdBQXFCWixHQUFjLEtBQWpDSSxlQUFlLEdBQUlKLEdBQWM7SUFDdEQsR0FBSyxDQUFxQkEsSUFBaUIsR0FBakJBLCtDQUFRLENBQUMsQ0FBTyxTQUFuQ2EsS0FBSyxHQUFjYixJQUFpQixLQUE3QlcsUUFBUSxHQUFJWCxJQUFpQjtJQWEzQyxNQUFNLDZFQUNEYyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFpQjs7d0ZBQzNCakIsK0NBQU07Ozs7O3dGQUNOQyx3REFBZTtnQkFDZGlCLFlBQVksRUFBRUosWUFBWTtnQkFDMUJLLFVBQVUsRUFBRUosS0FBSztnQkFDakJLLGNBQWMsRUFBRWhCLGtCQUFrQjtnQkFDbENpQixXQUFXLEVBQUVaLGVBQWU7Ozs7Ozt3RkFHN0JWLHFEQUFZO2dCQUFDdUIsUUFBUSxFQUFFeEIsOENBQUk7Z0JBQUVvQixZQUFZLEVBQUVKLFlBQVk7Ozs7Ozs7Ozs7OztBQUlsRSxDQUFDO0dBN0J1QlgsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzLmpzeD9kMDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcbmltcG9ydCBTcGVha2Vyc0xpc3QgZnJvbSAnLi9TcGVha2Vyc0xpc3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IFNwZWFrZXJzVG9vbGJhciBmcm9tIFwiLi9TcGVha2Vyc1Rvb2xiYXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWFrZXJzKCkge1xuICBjb25zdCBbc2hvd1Nlc3Npb25zLCBzZXRTaG93U2Vzc2lvbnNdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpXG5cbiAgZnVuY3Rpb24gaGFuZGxlU2hvd1Nlc3Npb25zKGUpIHtcbiAgICAvL0NoYW5nZXMgdGhlIGNvbXBvbmVudCBzdGF0ZSB3aGVuIHRoZSBjaGVja2JveCBpbnB1dCBpcyB0b2dnbGVkXG4gICAgLy9Ub2dnbGVzIHRoZSBjaGVja2VkIGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQgKHR5cGU9PmNoZWNrYm94KVxuICAgIHNldFNob3dTZXNzaW9ucyhlLnRhcmdldC5jaGVja2VkKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVTaG93VGhlbWUoZSkge1xuICAgIC8vQ2hhbmdlcyB0aGUgY29tcG9uZW50IHN0YXRlIHdoZW4gdGhlIGRyb3Bkb3duIGxhYmVsIHRhZ1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldFRoZW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8U3BlYWtlcnNUb29sYmFyIFxuICAgICAgICAgICAgc2Vzc2lvblN0YXRlPXtzaG93U2Vzc2lvbnN9IFxuICAgICAgICAgICAgdGhlbWVTdGF0ZT17dGhlbWV9XG4gICAgICAgICAgICB0b2dnbGVTZXNzaW9ucz17aGFuZGxlU2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgdG9nZ2xlVGhlbWU9e2hhbmRsZVNob3dUaGVtZX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8U3BlYWtlcnNMaXN0IHNwZWFrZXJzPXtkYXRhfSBzZXNzaW9uU3RhdGU9e3Nob3dTZXNzaW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIFxuICApXG59XG4iXSwibmFtZXMiOlsiZGF0YSIsIlNwZWFrZXJzTGlzdCIsIkhlYWRlciIsIlNwZWFrZXJzVG9vbGJhciIsInVzZVN0YXRlIiwiU3BlYWtlcnMiLCJoYW5kbGVTaG93U2Vzc2lvbnMiLCJlIiwic2V0U2hvd1Nlc3Npb25zIiwidGFyZ2V0IiwiY2hlY2tlZCIsImhhbmRsZVNob3dUaGVtZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInNldFRoZW1lIiwic2hvd1Nlc3Npb25zIiwidGhlbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJzZXNzaW9uU3RhdGUiLCJ0aGVtZVN0YXRlIiwidG9nZ2xlU2Vzc2lvbnMiLCJ0b2dnbGVUaGVtZSIsInNwZWFrZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speakers.jsx\n");

/***/ }),

/***/ "./src/components/SpeakersList.jsx":
/*!*****************************************!*\
  !*** ./src/components/SpeakersList.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakersList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.jsx\");\n\n\n\nfunction SpeakersList(param) {\n    var speakers = param.speakers, sessionState = param.sessionState;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakers.map(function(speaker) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    speaker: speaker,\n                    sessionState: sessionState\n                }, speaker.id, false, {\n                    fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 16\n                }, this));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n};\n_c = SpeakersList;\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDTTtBQUVoQixRQUFRLENBQUNFLFlBQVksQ0FBQyxLQUF3QixFQUFFLENBQUM7UUFBMUJDLFFBQVEsR0FBVCxLQUF3QixDQUF2QkEsUUFBUSxFQUFFQyxZQUFZLEdBQXZCLEtBQXdCLENBQWJBLFlBQVk7SUFDMUQsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBeUI7OEZBQ3ZDRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFLO3NCQUNqQkgsUUFBUSxDQUFDSSxHQUFHLENBQUMsUUFBUSxDQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEMsTUFBTSw2RUFBRVAsZ0RBQU87b0JBQWtCTyxPQUFPLEVBQUVBLE9BQU87b0JBQUVKLFlBQVksRUFBRUEsWUFBWTttQkFBeERJLE9BQU8sQ0FBQ0MsRUFBRTs7Ozs7WUFDakMsQ0FBQzs7Ozs7Ozs7Ozs7QUFJUCxDQUFDO0tBVnVCUCxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qc3g/NzE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuL1NwZWFrZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7c3BlYWtlcnMsIHNlc3Npb25TdGF0ZX0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIHtzcGVha2Vycy5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgcmV0dXJuIDxTcGVha2VyIGtleT17c3BlYWtlci5pZH0gc3BlYWtlcj17c3BlYWtlcn0gc2Vzc2lvblN0YXRlPXtzZXNzaW9uU3RhdGV9IC8+O1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTcGVha2VyIiwiU3BlYWtlcnNMaXN0Iiwic3BlYWtlcnMiLCJzZXNzaW9uU3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJzcGVha2VyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.jsx\n");

/***/ })

});