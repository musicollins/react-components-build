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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakersList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.jsx\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction SpeakersList(param) {\n    var sessionState = param.sessionState, theme = param.theme;\n    _s();\n    var ref = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_SpeakerData__WEBPACK_IMPORTED_MODULE_4__[\"default\"], 2000), data = ref.data, requestStatus = ref.requestStatus, error = ref.error, updateRecord = ref.updateRecord;\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_1__.REQUEST_STATUS.FAILURE) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: theme === \"dark\" ? \"text-danger\" : \"text-dark\",\n        children: error\n    }, void 0, false, {\n        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        type: \"media\",\n        rows: 10,\n        className: \"speakerslist-placeholder\",\n        ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_1__.REQUEST_STATUS.SUCCESS,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container speakers-list\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: data.map(function(speaker) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speaker: speaker,\n                        sessionState: sessionState,\n                        handleClickFavorite: function() {\n                            updateRecord(//UPDATED RECORD (as function parameter)\n                            _objectSpread({}, speaker, {\n                                favorite: !speaker.favorite\n                            }));\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/musicollins/projects/react-components-build/src/components/SpeakersList.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n};\n_s(SpeakersList, \"+qCzkBKflyyGMa+63SZLJ03XE0I=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = SpeakersList;\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlFO0FBQzFDO0FBQ2lCO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixRQUFRLENBQUNLLFlBQVksQ0FBQyxLQUF1QixFQUFFLENBQUM7UUFBeEJDLFlBQVksR0FBZCxLQUF1QixDQUFyQkEsWUFBWSxFQUFFQyxLQUFLLEdBQXJCLEtBQXVCLENBQVBBLEtBQUs7O0lBRXhELEdBQUssQ0FFRFAsR0FBa0MsR0FBbENBLGtFQUFlLENBQUNJLG9EQUFXLEVBQUUsSUFBSSxHQURuQ0ksSUFBSSxHQUNGUixHQUFrQyxDQURwQ1EsSUFBSSxFQUFFQyxhQUFhLEdBQ2pCVCxHQUFrQyxDQUQ5QlMsYUFBYSxFQUFFQyxLQUFLLEdBQ3hCVixHQUFrQyxDQURmVSxLQUFLLEVBQUVDLFlBQVksR0FDdENYLEdBQWtDLENBRFJXLFlBQVk7SUFLMUMsRUFBRSxFQUFFRixhQUFhLEtBQUtSLDBFQUFzQixFQUMxQyxNQUFNLDZFQUNIWSxDQUFFO1FBQUNDLFNBQVMsRUFBRVAsS0FBSyxLQUFLLENBQU0sUUFBRyxDQUFhLGVBQUcsQ0FBVztrQkFDMURHLEtBQUs7Ozs7OztJQUtaLE1BQU0sNkVBQ0hQLHlEQUFnQjtRQUNmWSxJQUFJLEVBQUMsQ0FBTztRQUNaQyxJQUFJLEVBQUUsRUFBRTtRQUNSRixTQUFTLEVBQUMsQ0FBMEI7UUFDcENHLEtBQUssRUFBRVIsYUFBYSxLQUFLUiwwRUFBc0I7OEZBRTlDa0IsQ0FBRztZQUFDTCxTQUFTLEVBQUMsQ0FBeUI7a0dBQ3JDSyxDQUFHO2dCQUFDTCxTQUFTLEVBQUMsQ0FBSzswQkFDakJOLElBQUksQ0FBQ1ksR0FBRyxDQUFDLFFBQVEsQ0FBRUMsT0FBTyxFQUFFLENBQUM7b0JBQzVCLE1BQU0sNkVBQ0huQixnREFBTzt3QkFFTm1CLE9BQU8sRUFBRUEsT0FBTzt3QkFDaEJmLFlBQVksRUFBRUEsWUFBWTt3QkFDMUJnQixtQkFBbUIsRUFBRSxRQUNyQyxHQUQyQyxDQUFDOzRCQUMxQlgsWUFBWSxDQUNWLEVBQXdDOzhDQUVuQ1UsT0FBTztnQ0FDVkUsUUFBUSxHQUFHRixPQUFPLENBQUNFLFFBQVE7O3dCQUdqQyxDQUFDO3VCQVhJRixPQUFPLENBQUNHLEVBQUU7Ozs7O2dCQWNyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztHQS9DdUJuQixZQUFZOztRQUk5QkwsOERBQWU7OztLQUpHSyxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qc3g/NzE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7UkVRVUVTVF9TVEFUVVN9ICBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XG5pbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcbmltcG9ydCBpbml0aWFsRGF0YSBmcm9tICcuLi8uLi9TcGVha2VyRGF0YSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHsgc2Vzc2lvblN0YXRlLCB0aGVtZSB9KSB7XG5cbiAgY29uc3Qge1xuICAgIGRhdGEsIHJlcXVlc3RTdGF0dXMsIGVycm9yLCB1cGRhdGVSZWNvcmRcbiAgfSA9IHVzZVJlcXVlc3REZWxheShpbml0aWFsRGF0YSwgMjAwMCk7XG5cbiAgXG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpXG4gICAgcmV0dXJuIChcbiAgICAgIDxoMSBjbGFzc05hbWU9e3RoZW1lID09PSBcImRhcmtcIiA/IFwidGV4dC1kYW5nZXJcIiA6IFwidGV4dC1kYXJrXCJ9PlxuICAgICAgICB7ZXJyb3J9XG4gICAgICA8L2gxPlxuICAgICk7XG5cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdFBsYWNlaG9sZGVyXG4gICAgICB0eXBlPVwibWVkaWFcIlxuICAgICAgcm93cz17MTB9XG4gICAgICBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2Vob2xkZXJcIlxuICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFNwZWFrZXJcbiAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RhdGU9e3Nlc3Npb25TdGF0ZX1cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGlja0Zhdm9yaXRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQoXG4gICAgICAgICAgICAgICAgICAgIC8vVVBEQVRFRCBSRUNPUkQgKGFzIGZ1bmN0aW9uIHBhcmFtZXRlcilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnNwZWFrZXIsXG4gICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdFBsYWNlaG9sZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwiU3BlYWtlciIsIlJlYWN0UGxhY2Vob2xkZXIiLCJpbml0aWFsRGF0YSIsIlNwZWFrZXJzTGlzdCIsInNlc3Npb25TdGF0ZSIsInRoZW1lIiwiZGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsIkZBSUxVUkUiLCJoMSIsImNsYXNzTmFtZSIsInR5cGUiLCJyb3dzIiwicmVhZHkiLCJTVUNDRVNTIiwiZGl2IiwibWFwIiwic3BlYWtlciIsImhhbmRsZUNsaWNrRmF2b3JpdGUiLCJmYXZvcml0ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.jsx\n");

/***/ }),

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REQUEST_STATUS\": function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var _Users_musicollins_projects_react_components_build_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_musicollins_projects_react_components_build_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_musicollins_projects_react_components_build_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"success\",\n    FAILURE: \"failure\"\n};\nfunction useRequestDelay(initialData) {\n    var delayTime = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1000;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(REQUEST_STATUS.LOADING), requestStatus = ref1[0], setRequestStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), error = ref2[0], setError = ref2[1];\n    var delay = function(ms) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, ms);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function delayFunc() {\n            return _delayFunc.apply(this, arguments);\n        }\n        function _delayFunc() {\n            _delayFunc = _asyncToGenerator(_Users_musicollins_projects_react_components_build_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_musicollins_projects_react_components_build_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return delay(delayTime);\n                        case 3:\n                            // setIsLoading(false);\n                            setRequestStatus(REQUEST_STATUS.SUCCESS);\n                            console.log(data);\n                            setData(data);\n                            _ctx.next = 12;\n                            break;\n                        case 8:\n                            _ctx.prev = 8;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            // setIsLoading(false);\n                            // setHasErrored(true);\n                            setRequestStatus(REQUEST_STATUS.FAILURE);\n                            setError(_ctx.t0.message);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        8\n                    ]\n                ]);\n            }));\n            return _delayFunc.apply(this, arguments);\n        }\n        delayFunc();\n    }, []);\n    //Updates the state of the whole list\n    //After the \"favorite\" icon is toggled\n    var handleClickFavorite = function(id) {\n        var speakerToBeUpdated = data.find(function(speaker) {\n            return speaker.id === id;\n        });\n        var updatedSpeaker = _objectSpread({}, speakerToBeUpdated, {\n            favorite: !speakerToBeUpdated.favorite\n        });\n        var updatedData = data.map(function(speaker) {\n            return speaker.id === id ? updatedSpeaker : speaker;\n        });\n        setData(updatedData);\n    };\n    var updateRecord = function(updatedRecord) {\n        var updatedData = data.map(function(speaker) {\n            return speaker.id === updatedRecord.id ? updatedRecord : speaker;\n        });\n        var delayFunc = function() {\n            var _ref = _asyncToGenerator(_Users_musicollins_projects_react_components_build_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_musicollins_projects_react_components_build_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return delay(2000);\n                        case 3:\n                            setData(updatedData);\n                            _ctx.next = 10;\n                            break;\n                        case 6:\n                            _ctx.prev = 6;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(\"There's been a server ERROR!\");\n                            setError(_ctx.t0.message);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        6\n                    ]\n                ]);\n            }));\n            return function delayFunc() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        delayFunc();\n    };\n    return {\n        data: data,\n        // isLoading,\n        // hasErrored,\n        requestStatus: requestStatus,\n        error: error,\n        updateRecord: updateRecord\n    };\n}\n_s(useRequestDelay, \"cCVG4MyK8f9bdZsSFiXYwYDoyQc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsR0FBSyxDQUFDRSxjQUFjLEdBQUcsQ0FBQztJQUM3QkMsT0FBTyxFQUFFLENBQVM7SUFDbEJDLE9BQU8sRUFBRSxDQUFTO0lBQ2xCQyxPQUFPLEVBQUUsQ0FBUztBQUNwQixDQUFDO1NBRVFDLGVBQWUsQ0FBQ0MsV0FBVyxFQUFvQixDQUFDO1FBQW5CQyxTQUFTLG9FQUFHLElBQUk7O0lBQ3BELEdBQUssQ0FBbUJQLEdBQXFCLEdBQXJCQSwrQ0FBUSxDQUFDTSxXQUFXLEdBQXJDRSxJQUFJLEdBQWFSLEdBQXFCLEtBQWhDUyxPQUFPLEdBQUlULEdBQXFCO0lBQzdDLEdBQUssQ0FBdUNBLElBQWdDLEdBQWhDQSwrQ0FBUSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sR0FBbkVRLGFBQWEsR0FBdUJWLElBQWdDLEtBQXJEVyxnQkFBZ0IsR0FBS1gsSUFBZ0M7SUFDNUUsR0FBSyxDQUFxQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJZLEtBQUssR0FBY1osSUFBWSxLQUF4QmEsUUFBUSxHQUFJYixJQUFZO0lBRXRDLEdBQUssQ0FBQ2MsS0FBSyxHQUFHLFFBQVEsQ0FBUEMsRUFBRTtRQUFLLE1BQU0sQ0FBTixHQUFHLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLE9BQU87WUFBS0MsTUFBTSxDQUFOQSxVQUFVLENBQUNELE9BQU8sRUFBRUYsRUFBRTs7O0lBRXJFaEIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7aUJBQ0FvQixTQUFTO21CQUFUQSxVQUFTOztpQkFBVEEsVUFBUztZQUFUQSxVQUFTLG1MQUF4QixRQUFRLFdBQW1CLENBQUM7Ozs7OzttQ0FFbEJMLEtBQUssQ0FBQ1AsU0FBUzs7NEJBQ3JCLEVBQXVCOzRCQUN2QkksZ0JBQWdCLENBQUNWLGNBQWMsQ0FBQ0UsT0FBTzs0QkFDdkNpQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsSUFBSTs0QkFDaEJDLE9BQU8sQ0FBQ0QsSUFBSTs7Ozs7OzRCQUVaLEVBQXVCOzRCQUN2QixFQUF1Qjs0QkFDdkJHLGdCQUFnQixDQUFDVixjQUFjLENBQUNHLE9BQU87NEJBQ3ZDUyxRQUFRLFNBQUdTLE9BQU87Ozs7Ozs7Ozs7O1lBRXRCLENBQUM7bUJBYmNILFVBQVM7O1FBZXhCQSxTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEVBQXFDO0lBQ3JDLEVBQXNDO0lBQ3RDLEdBQUssQ0FBQ0ksbUJBQW1CLEdBQUcsUUFBUSxDQUFQQyxFQUFFLEVBQUssQ0FBQztRQUNuQyxHQUFLLENBQUNDLGtCQUFrQixHQUFHakIsSUFBSSxDQUFDa0IsSUFBSSxDQUNsQyxRQUFRLENBQVBDLE9BQU87WUFBS0EsTUFBTSxDQUFOQSxPQUFPLENBQUNILEVBQUUsS0FBS0EsRUFBRTs7UUFHaEMsR0FBSyxDQUFDSSxjQUFjLHFCQUNmSCxrQkFBa0I7WUFDckJJLFFBQVEsR0FBR0osa0JBQWtCLENBQUNJLFFBQVE7O1FBR3hDLEdBQUssQ0FBQ0MsV0FBVyxHQUFHdEIsSUFBSSxDQUFDdUIsR0FBRyxDQUFDLFFBQVEsQ0FBUEosT0FBTyxFQUFLLENBQUM7WUFDekMsTUFBTSxDQUFDQSxPQUFPLENBQUNILEVBQUUsS0FBS0EsRUFBRSxHQUFHSSxjQUFjLEdBQUdELE9BQU87UUFDckQsQ0FBQztRQUVEbEIsT0FBTyxDQUFDcUIsV0FBVztJQUNyQixDQUFDO0lBRUQsR0FBSyxDQUFDRSxZQUFZLEdBQUcsUUFBUSxDQUFQQyxhQUFhLEVBQUssQ0FBQztRQUV2QyxHQUFLLENBQUNILFdBQVcsR0FBR3RCLElBQUksQ0FBQ3VCLEdBQUcsQ0FBQyxRQUFRLENBQVBKLE9BQU8sRUFBSyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQ0EsT0FBTyxDQUFDSCxFQUFFLEtBQUtTLGFBQWEsQ0FBQ1QsRUFBRSxHQUFHUyxhQUFhLEdBQUdOLE9BQU87UUFDbEUsQ0FBQztRQUVELEdBQUssQ0FBQ1IsU0FBUzt1TUFBRyxRQUFRLFdBQUcsQ0FBQzs7Ozs7O21DQUVwQkwsS0FBSyxDQUFDLElBQUk7OzRCQUNoQkwsT0FBTyxDQUFDcUIsV0FBVzs7Ozs7OzRCQUVuQlYsT0FBTyxDQUFDUixLQUFLLENBQUMsQ0FBOEI7NEJBQzVDQyxRQUFRLFNBQU9TLE9BQU87Ozs7Ozs7Ozs7O1lBRTFCLENBQUM7NEJBUktILFNBQVM7Ozs7UUFTZkEsU0FBUztJQUVYLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNOWCxJQUFJLEVBQUpBLElBQUk7UUFDSixFQUFhO1FBQ2IsRUFBYztRQUNkRSxhQUFhLEVBQWJBLGFBQWE7UUFDYkUsS0FBSyxFQUFMQSxLQUFLO1FBQ0xvQixZQUFZLEVBQVpBLFlBQVk7SUFFZCxDQUFDO0FBQ0gsQ0FBQztHQXpFUTNCLGVBQWU7QUEyRXhCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3REZWxheS5qcz84ZWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xuICBMT0FESU5HOiBcImxvYWRpbmdcIixcbiAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXG4gIEZBSUxVUkU6IFwiZmFpbHVyZVwiLFxufTtcblxuZnVuY3Rpb24gdXNlUmVxdWVzdERlbGF5KGluaXRpYWxEYXRhLCBkZWxheVRpbWUgPSAxMDAwKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbiAgY29uc3QgWyByZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzIF0gPSB1c2VTdGF0ZShSRVFVRVNUX1NUQVRVUy5MT0FESU5HKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgLy8gc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAvLyBzZXRIYXNFcnJvcmVkKHRydWUpO1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpXG4gICAgICAgIHNldEVycm9yKGUubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVsYXlGdW5jKCk7XG4gIH0sIFtdKTtcblxuICAvL1VwZGF0ZXMgdGhlIHN0YXRlIG9mIHRoZSB3aG9sZSBsaXN0XG4gIC8vQWZ0ZXIgdGhlIFwiZmF2b3JpdGVcIiBpY29uIGlzIHRvZ2dsZWRcbiAgY29uc3QgaGFuZGxlQ2xpY2tGYXZvcml0ZSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHNwZWFrZXJUb0JlVXBkYXRlZCA9IGRhdGEuZmluZChcbiAgICAgIChzcGVha2VyKSA9PiBzcGVha2VyLmlkID09PSBpZFxuICAgICk7XG5cbiAgICBjb25zdCB1cGRhdGVkU3BlYWtlciA9IHtcbiAgICAgIC4uLnNwZWFrZXJUb0JlVXBkYXRlZCxcbiAgICAgIGZhdm9yaXRlOiAhc3BlYWtlclRvQmVVcGRhdGVkLmZhdm9yaXRlLFxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVkRGF0YSA9IGRhdGEubWFwKChzcGVha2VyKSA9PiB7XG4gICAgICByZXR1cm4gc3BlYWtlci5pZCA9PT0gaWQgPyB1cGRhdGVkU3BlYWtlciA6IHNwZWFrZXI7XG4gICAgfSk7XG5cbiAgICBzZXREYXRhKHVwZGF0ZWREYXRhKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVSZWNvcmQgPSAodXBkYXRlZFJlY29yZCkgPT4ge1xuXG4gICAgY29uc3QgdXBkYXRlZERhdGEgPSBkYXRhLm1hcCgoc3BlYWtlcikgPT4ge1xuICAgICAgcmV0dXJuIHNwZWFrZXIuaWQgPT09IHVwZGF0ZWRSZWNvcmQuaWQgPyB1cGRhdGVkUmVjb3JkIDogc3BlYWtlcjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGF5RnVuYyA9IGFzeW5jICgpID0+e1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoMjAwMClcbiAgICAgICAgc2V0RGF0YSh1cGRhdGVkRGF0YSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSdzIGJlZW4gYSBzZXJ2ZXIgRVJST1IhXCIpXG4gICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuYygpXG5cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgLy8gaXNMb2FkaW5nLFxuICAgIC8vIGhhc0Vycm9yZWQsXG4gICAgcmVxdWVzdFN0YXR1cyxcbiAgICBlcnJvcixcbiAgICB1cGRhdGVSZWNvcmRcbiAgICAvLyBoYW5kbGVDbGlja0Zhdm9yaXRlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RGVsYXk7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3REZWxheSIsImluaXRpYWxEYXRhIiwiZGVsYXlUaW1lIiwiZGF0YSIsInNldERhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJoYW5kbGVDbGlja0Zhdm9yaXRlIiwiaWQiLCJzcGVha2VyVG9CZVVwZGF0ZWQiLCJmaW5kIiwic3BlYWtlciIsInVwZGF0ZWRTcGVha2VyIiwiZmF2b3JpdGUiLCJ1cGRhdGVkRGF0YSIsIm1hcCIsInVwZGF0ZVJlY29yZCIsInVwZGF0ZWRSZWNvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n");

/***/ })

});