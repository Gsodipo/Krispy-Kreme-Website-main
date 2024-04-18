"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 7993:
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ 8307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    console.log("login api page called...");
    console.log("looking at the variables we got from the browser..");
    console.log(req.body);
    // Get just the username and password and put them into variables.
    const username = req.body.username;
    const pass = req.body.password;
    const email = req.body.email;
    const address = req.body.address;
    console.log("username is: " + username);
    console.log("password  is: " + pass);
    console.log("address is " + address);
    console.log("email is " + email);
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
    connection.query("INSERT INTO `assignment1`.`users` (`username`, `pass`, `email`, `address`, `acctype`) VALUES ('" + username + "', '" + pass + "', '" + email + "', '" + address + "', 'yyy');", function(err, results, fields) {
        console.log(results); // results contains rows returned by server
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
var __webpack_exports__ = (__webpack_exec__(8307));
module.exports = __webpack_exports__;

})();