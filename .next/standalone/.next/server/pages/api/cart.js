"use strict";
(() => {
var exports = {};
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 9664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(async function customer(req, res) {
    // get the variables that were sent over
    var baconQty = req.body.baconQty;
    var doghnutQty = req.body.doghnutQty;
    var sandwichQty = req.body.sandwichQty;
    var drinksQty = req.body.drinksQty;
    // add the items to the cart object.
    req.session.cart = {
        bacon: baconQty,
        Doghnut: doghnutQty,
        Sandwich: sandwichQty,
        Drinks: drinksQty
    };
    await req.session.save();
    // send back a message that it went to plan!
    res.status(200).json("ok");
}, {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: "production" === "production"
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8534:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ withIronSessionApiRoute)
/* harmony export */ });
/* unused harmony export withIronSessionSsr */
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4014);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);
iron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// next/index.ts


// src/getPropertyDescriptorForReqSession.ts
function getPropertyDescriptorForReqSession(session) {
  return {
    enumerable: true,
    get() {
      return session;
    },
    set(value) {
      const keys = Object.keys(value);
      const currentKeys = Object.keys(session);
      currentKeys.forEach((key) => {
        if (!keys.includes(key)) {
          delete session[key];
        }
      });
      keys.forEach((key) => {
        session[key] = value[key];
      });
    }
  };
}

// next/index.ts
function withIronSessionApiRoute(handler, options) {
  return async function nextApiHandlerWrappedWithIronSession(req, res) {
    let sessionOptions;
    if (options instanceof Function) {
      sessionOptions = await options(req, res);
    } else {
      sessionOptions = options;
    }
    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);
    Object.defineProperty(
      req,
      "session",
      getPropertyDescriptorForReqSession(session)
    );
    return handler(req, res);
  };
}
function withIronSessionSsr(handler, options) {
  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {
    let sessionOptions;
    if (options instanceof Function) {
      sessionOptions = await options(context.req, context.res);
    } else {
      sessionOptions = options;
    }
    const session = await getIronSession(
      context.req,
      context.res,
      sessionOptions
    );
    Object.defineProperty(
      context.req,
      "session",
      getPropertyDescriptorForReqSession(session)
    );
    return handler(context);
  };
}

//# sourceMappingURL=index.mjs.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9664));
module.exports = __webpack_exports__;

})();