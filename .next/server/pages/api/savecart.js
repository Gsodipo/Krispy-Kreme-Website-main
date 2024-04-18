"use strict";
(() => {
var exports = {};
exports.id = 264;
exports.ids = [264];
exports.modules = {

/***/ 7993:
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ 4709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    console.log("savecart.js api page called...");
    console.log("looking at the variables ");
    console.log(req.body);
    const cart = JSON.stringify(req.body.cart);
    // db
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
    connection.query("INSERT INTO `assignment1`.`orders` (`productids`) VALUES ('" + cart + "');", function(err, results, fields) {
        res.status(200).json("ok");
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4709));
module.exports = __webpack_exports__;

})();