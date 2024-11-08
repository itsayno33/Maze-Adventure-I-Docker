/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar createError = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'http-errors'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar express = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'express'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar path = __webpack_require__(/*! path */ \"path\");\nvar cookieParser = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'cookie-parser'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar logger = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'morgan'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar indexRouter = __webpack_require__(/*! ./routes/index */ \"./routes/index.ts\");\nvar usersRouter = __webpack_require__(/*! ./routes/mai */ \"./routes/mai.ts\");\nvar app = express();\n// view engine setup\napp.set('views', path.join(__dirname, 'views'));\napp.set('view engine', 'ejs');\napp.use(logger('dev'));\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\napp.use(cookieParser());\napp.use(express.static(path.join(__dirname, 'public')));\napp.use('/', indexRouter);\napp.use('/mai', usersRouter);\n// catch 404 and forward to error handler\napp.use(function (req, res, next) {\n    next(createError(404));\n});\n// error handler\napp.use(function (err, req, res, next) {\n    // set locals, only providing error in development\n    res.locals.message = err.message;\n    res.locals.error = req.app.get('env') === 'development' ? err : {};\n    // render the error page\n    res.status(err.status || 500);\n    res.render('error');\n});\nmodule.exports = app;\n\n\n//# sourceURL=webpack://mai-express/./app.ts?");

/***/ }),

/***/ "./routes/index.ts":
/*!*************************!*\
  !*** ./routes/index.ts ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar express = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'express'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar router = express.Router();\n/* GET home page. */\nrouter.get('/', function (req, res, next) {\n    res.render('index', { title: 'Express' });\n});\nmodule.exports = router;\n\n\n//# sourceURL=webpack://mai-express/./routes/index.ts?");

/***/ }),

/***/ "./routes/mai.ts":
/*!***********************!*\
  !*** ./routes/mai.ts ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar express = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'express'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar router = express.Router();\n/* GET users listing. */\nrouter.get('/', (req, res, next) => {\n    res.send('respond with a resource');\n});\nmodule.exports = router;\n\n\n//# sourceURL=webpack://mai-express/./routes/mai.ts?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.ts");
/******/ 	
/******/ })()
;