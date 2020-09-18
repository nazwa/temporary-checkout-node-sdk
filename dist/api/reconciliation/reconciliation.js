"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _errors = require("../../services/errors");

var _http = _interopRequireDefault(require("../../services/http"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Class dealing with the /reporting endpoint
 *
 * @export
 * @class Reconciliation
 */
var Reconciliation = /*#__PURE__*/function () {
  function Reconciliation(config) {
    (0, _classCallCheck2["default"])(this, Reconciliation);
    this.config = config;
  }
  /**
   * Returns a JSON report containing all payments within your specified parameters
   *
   * @memberof Reconciliation
   * @param {Object} body Reconciliation request body.
   * @return {Promise<Object>} A promise to the request reconciliation response.
   */


  (0, _createClass2["default"])(Reconciliation, [{
    key: "getPayments",
    value: function () {
      var _getPayments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
        var url, queryString, response, res, nextLink, error;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                url = "".concat(this.config.host, "/reporting/payments");

                if (body) {
                  queryString = Object.keys(body).map(function (key) {
                    return "".concat(key, "=").concat(body[key]);
                  }).join('&');
                  url += "?".concat(queryString);
                }

                _context.next = 5;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent
                }, {
                  method: 'get',
                  url: url,
                  headers: {
                    Authorization: this.config.sk
                  }
                });

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json;

              case 8:
                res = _context.sent;

                if (!(res._links && res._links.next)) {
                  _context.next = 14;
                  break;
                }

                nextLink = res._links.next.href;
                _context.next = 13;
                return _objectSpread(_objectSpread({}, res), {}, {
                  page: nextLink.match(/after=([^&]*)/)[1]
                });

              case 13:
                return _context.abrupt("return", _context.sent);

              case 14:
                _context.next = 16;
                return res;

              case 16:
                return _context.abrupt("return", _context.sent);

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                _context.next = 23;
                return (0, _errors.determineError)(_context.t0);

              case 23:
                error = _context.sent;
                throw error;

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 19]]);
      }));

      function getPayments(_x) {
        return _getPayments.apply(this, arguments);
      }

      return getPayments;
    }()
    /**
     * Returns a JSON payment report containing all of the data related to a specific payment,
     * based on the payment's identifier.
     *
     * @memberof Reconciliation
     * @param {String} paymentId Payment id.
     * @return {Promise<Object>} A promise to the request reconciliation response.
     */

  }, {
    key: "getPayment",
    value: function () {
      var _getPayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(paymentId) {
        var response, error;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent
                }, {
                  method: 'get',
                  url: "".concat(this.config.host, "/reporting/payments/").concat(paymentId),
                  headers: {
                    Authorization: this.config.sk
                  }
                });

              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.json;

              case 6:
                return _context2.abrupt("return", _context2.sent);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                _context2.next = 13;
                return (0, _errors.determineError)(_context2.t0);

              case 13:
                error = _context2.sent;
                throw error;

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function getPayment(_x2) {
        return _getPayment.apply(this, arguments);
      }

      return getPayment;
    }()
    /**
     * Returns a JSON report containing all payments within your specified parameters
     *
     * @memberof Reconciliation
     * @param {Object} body Reconciliation request body.
     * @return {Promise<Object>} A promise to the request reconciliation response.
     */

  }, {
    key: "getPaymentsCsv",
    value: function () {
      var _getPaymentsCsv = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
        var url, queryString, response, error;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                url = "".concat(this.config.host, "/reporting/payments/download");

                if (body) {
                  queryString = Object.keys(body).map(function (key) {
                    return "".concat(key, "=").concat(body[key]);
                  }).join('&');
                  url += "?".concat(queryString);
                }

                _context3.next = 5;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent,
                  csv: true
                }, {
                  method: 'get',
                  url: url,
                  headers: {
                    Authorization: this.config.sk
                  }
                });

              case 5:
                response = _context3.sent;
                _context3.next = 8;
                return response.csv;

              case 8:
                return _context3.abrupt("return", _context3.sent);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                _context3.next = 15;
                return (0, _errors.determineError)(_context3.t0);

              case 15:
                error = _context3.sent;
                throw error;

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 11]]);
      }));

      function getPaymentsCsv(_x3) {
        return _getPaymentsCsv.apply(this, arguments);
      }

      return getPaymentsCsv;
    }()
    /**
     * Returns a JSON report containing all statements within your specified parameters.
     * Please note that the timezone for the request will be UTC.
     *
     * @memberof Reconciliation
     * @param {Object} body Reconciliation request body.
     * @return {Promise<Object>} A promise to the request reconciliation response.
     */

  }, {
    key: "getStatements",
    value: function () {
      var _getStatements = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(body) {
        var url, queryString, response, error;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                url = "".concat(this.config.host, "/reporting/statements");

                if (body) {
                  queryString = Object.keys(body).map(function (key) {
                    return "".concat(key, "=").concat(body[key]);
                  }).join('&');
                  url += "?".concat(queryString);
                }

                _context4.next = 5;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent
                }, {
                  method: 'get',
                  url: url,
                  headers: {
                    Authorization: this.config.sk
                  }
                });

              case 5:
                response = _context4.sent;
                _context4.next = 8;
                return response.json;

              case 8:
                return _context4.abrupt("return", _context4.sent);

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                _context4.next = 15;
                return (0, _errors.determineError)(_context4.t0);

              case 15:
                error = _context4.sent;
                throw error;

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 11]]);
      }));

      function getStatements(_x4) {
        return _getStatements.apply(this, arguments);
      }

      return getStatements;
    }()
    /**
     * Downloads a CSV statement report containing all of the data related to a specific
     * statement, based on the statement's identifier.
     *
     * @memberof Reconciliation
     * @param {String} statementId Statement id.
     * @return {Promise<Object>} A promise to the request reconciliation response.
     */

  }, {
    key: "getStatementCsv",
    value: function () {
      var _getStatementCsv = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(statementId) {
        var response, error;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent,
                  csv: true
                }, {
                  method: 'get',
                  url: "".concat(this.config.host, "/reporting/statements/").concat(statementId, "/payments/download"),
                  headers: {
                    Authorization: this.config.sk
                  }
                });

              case 3:
                response = _context5.sent;
                _context5.next = 6;
                return response.csv;

              case 6:
                return _context5.abrupt("return", _context5.sent);

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                _context5.next = 13;
                return (0, _errors.determineError)(_context5.t0);

              case 13:
                error = _context5.sent;
                throw error;

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9]]);
      }));

      function getStatementCsv(_x5) {
        return _getStatementCsv.apply(this, arguments);
      }

      return getStatementCsv;
    }()
  }]);
  return Reconciliation;
}();

exports["default"] = Reconciliation;
//# sourceMappingURL=reconciliation.js.map