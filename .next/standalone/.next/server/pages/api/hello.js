"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 7993:
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ 2677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
    //db call
    // get the client
    const mysql = __webpack_require__(7993);
    // create the connection to database
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database: "assignment1"
    });
    // simple query
    connection.query("SELECT * FROM `users`", function(err, results, fields) {
        console.log(results); // fields contains extra meta data about results, if available
        res.status(200).json(results);
    });
} // function


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2677));
module.exports = __webpack_exports__;

})();