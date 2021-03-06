"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _errors = require("../../services/errors");

var _http = _interopRequireDefault(require("../../services/http"));

var _validation = require("../../services/validation");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var actionHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(config, action, paymentId, body, idempotencyKey) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _http["default"])(_nodeFetch["default"], {
              timeout: config.timeout,
              agent: config.agent
            }, {
              method: 'post',
              url: "".concat(config.host, "/payments/").concat(paymentId, "/").concat(action),
              headers: determineHeaders(config, idempotencyKey),
              body: body || {}
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.json);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function actionHandler(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var getHandler = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(config, url) {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _http["default"])(_nodeFetch["default"], {
              timeout: config.timeout,
              agent: config.agent
            }, {
              method: 'get',
              url: url,
              headers: {
                Authorization: config.sk
              }
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getHandler(_x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

var determineHeaders = function determineHeaders(config, idempotencyKey) {
  if (idempotencyKey !== undefined) {
    return {
      Authorization: config.sk,
      'Cko-Idempotency-Key': idempotencyKey
    };
  }

  return {
    Authorization: config.sk
  };
};

var addUtilityParams = function addUtilityParams(json) {
  var requiresRedirect = false;

  if (json.destination) {
    requiresRedirect = false;
  } else {
    requiresRedirect = json.status === 'Pending';
  } // If the redirection URL exists add it to the response body as 'redirectLink'


  var redirectLink;

  if (requiresRedirect && json._links.redirect) {
    redirectLink = json._links.redirect.href;
  }

  return _objectSpread(_objectSpread({}, json), {}, {
    requiresRedirect: requiresRedirect,
    redirectLink: redirectLink
  });
};
/**
 * Class dealing with the /payments endpoint
 *
 * @export
 * @class Payments
 */


var Payments = /*#__PURE__*/function () {
  function Payments(config) {
    (0, _classCallCheck2["default"])(this, Payments);
    this.config = config;
  }
  /**
   * Sends payment or a payout requests.
   *
   * @memberof Payments
   * @param {Object} body Payment Request body.
   * @param {string} [idempotencyKey] Idempotency Key.
   * @return {Promise<Object>} A promise to payment response.
   */


  (0, _createClass2["default"])(Payments, [{
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body, idempotencyKey) {
        var response, error;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                (0, _validation.setSourceOrDestinationType)(body);
                (0, _validation.validatePayment)(body);
                _context3.next = 5;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent
                }, {
                  method: 'post',
                  url: "".concat(this.config.host, "/payments"),
                  headers: determineHeaders(this.config, idempotencyKey),
                  body: body
                });

              case 5:
                response = _context3.sent;
                _context3.t0 = addUtilityParams;
                _context3.next = 9;
                return response.json;

              case 9:
                _context3.t1 = _context3.sent;
                return _context3.abrupt("return", (0, _context3.t0)(_context3.t1));

              case 13:
                _context3.prev = 13;
                _context3.t2 = _context3["catch"](0);
                _context3.next = 17;
                return (0, _errors.determineError)(_context3.t2);

              case 17:
                error = _context3.sent;
                throw error;

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 13]]);
      }));

      function request(_x8, _x9) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
    /**
     * Returns the details of the payment with the specified identifier string.
     *
     * @memberof Payments
     * @param {string} id /^(pay|sid)_(\w{26})$/ The payment or payment session identifier.
     * @return {Promise<Object>} A promise to the get payment response.
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var response;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return getHandler(this.config, "".concat(this.config.host, "/payments/").concat(id));

              case 3:
                response = _context4.sent;
                return _context4.abrupt("return", response.json);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                _context4.next = 11;
                return (0, _errors.determineError)(_context4.t0);

              case 11:
                throw _context4.sent;

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function get(_x10) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * Returns all the actions associated with a payment ordered by processing date in
     * descending order (latest first).
     *
     * @memberof Payments
     * @param {string} id /^(pay)_(\w{26})$/ The payment identifier.
     * @return {Promise<Object>} A promise to the getActions response.
     */

  }, {
    key: "getActions",
    value: function () {
      var _getActions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        var response;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return getHandler(this.config, "".concat(this.config.host, "/payments/").concat(id, "/actions"));

              case 3:
                response = _context5.sent;
                return _context5.abrupt("return", response.json);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                _context5.next = 11;
                return (0, _errors.determineError)(_context5.t0);

              case 11:
                throw _context5.sent;

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      function getActions(_x11) {
        return _getActions.apply(this, arguments);
      }

      return getActions;
    }()
    /**
     * Captures a payment if supported by the payment method.
     *
     * @memberof Payments
     * @param {string} paymentId /^(pay)_(\w{26})$/ The payment or payment session identifier.
     * @param {Object} [body] Capture request body.
     * @param {string} [idempotencyKey] Idempotency Key.
     * @return {Promise<Object>} A promise to the capture response.
     */

  }, {
    key: "capture",
    value: function () {
      var _capture = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(paymentId, body, idempotencyKey) {
        var response;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return actionHandler(this.config, 'captures', paymentId, body, idempotencyKey);

              case 3:
                response = _context6.sent;
                return _context6.abrupt("return", response);

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                _context6.next = 11;
                return (0, _errors.determineError)(_context6.t0);

              case 11:
                throw _context6.sent;

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      function capture(_x12, _x13, _x14) {
        return _capture.apply(this, arguments);
      }

      return capture;
    }()
    /**
     * Refunds a payment if supported by the payment method.
     *
     * @memberof Payments
     * @param {string} id /^(pay)_(\w{26})$/ The payment or payment session identifier.
     * @param {Object} [body] Refund request body.
     * @param {string} [idempotencyKey] Idempotency Key.
     * @return {Promise<Object>} A promise to the refund response.
     */

  }, {
    key: "refund",
    value: function () {
      var _refund = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(paymentId, body, idempotencyKey) {
        var response;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return actionHandler(this.config, 'refunds', paymentId, body, idempotencyKey);

              case 3:
                response = _context7.sent;
                return _context7.abrupt("return", response);

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                _context7.next = 11;
                return (0, _errors.determineError)(_context7.t0);

              case 11:
                throw _context7.sent;

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 7]]);
      }));

      function refund(_x15, _x16, _x17) {
        return _refund.apply(this, arguments);
      }

      return refund;
    }()
    /**
     * Voids a payment if supported by the payment method.
     *
     * @memberof Payments
     * @param {string} id /^(pay)_(\w{26})$/ The payment or payment session identifier.
     * @param {Object} [body] Void request body.
     * @param {string} [idempotencyKey] Idempotency Key.
     * @return {Promise<Object>} A promise to the void response.
     */

  }, {
    key: "void",
    value: function () {
      var _void2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(paymentId, body, idempotencyKey) {
        var response;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return actionHandler(this.config, 'voids', paymentId, body, idempotencyKey);

              case 3:
                response = _context8.sent;
                return _context8.abrupt("return", response);

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                _context8.next = 11;
                return (0, _errors.determineError)(_context8.t0);

              case 11:
                throw _context8.sent;

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      function _void(_x18, _x19, _x20) {
        return _void2.apply(this, arguments);
      }

      return _void;
    }()
  }]);
  return Payments;
}();

exports["default"] = Payments;
//# sourceMappingURL=payments.js.map