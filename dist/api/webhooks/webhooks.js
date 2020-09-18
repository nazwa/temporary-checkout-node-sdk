"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _errors = require("../../services/errors");

var _http = _interopRequireDefault(require("../../services/http"));

/**
 * Create and manage the webhook notifications you receive to keep up to date with
 * the status of your transactions.
 *
 * @export
 * @class Webhooks
 */
var Webhooks = /*#__PURE__*/function () {
  function Webhooks(config) {
    (0, _classCallCheck2["default"])(this, Webhooks);
    this.config = config;
  }
  /**
   * Retrieves the webhooks configured for the channel identified by your API key
   *
   * @memberof Webhooks
   * @return {Promise<Object>} A promise to the request webhooks response.
   */


  (0, _createClass2["default"])(Webhooks, [{
    key: "retrieveWebhooks",
    value: function () {
      var _retrieveWebhooks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var response, error;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent
                }, {
                  method: 'get',
                  url: "".concat(this.config.host, "/webhooks"),
                  headers: {
                    Authorization: this.config.sk
                  }
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json;

              case 6:
                return _context.abrupt("return", _context.sent);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                _context.next = 13;
                return (0, _errors.determineError)(_context.t0);

              case 13:
                error = _context.sent;
                throw error;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function retrieveWebhooks() {
        return _retrieveWebhooks.apply(this, arguments);
      }

      return retrieveWebhooks;
    }()
    /**
     * Register a new webhook endpoint that Checkout.com will post all or selected events to
     *
     * @memberof Webhooks
     * @return {Promise<Object>} A promise to the register webhook response.
     */

  }, {
    key: "registerWebhook",
    value: function () {
      var _registerWebhook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
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
                  method: 'post',
                  url: "".concat(this.config.host, "/webhooks"),
                  headers: {
                    Authorization: this.config.sk
                  },
                  body: body
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

      function registerWebhook(_x) {
        return _registerWebhook.apply(this, arguments);
      }

      return registerWebhook;
    }()
    /**
     * Retrieves the webhook with the specified identifier string
     *
     * @memberof Webhooks
     * @return {Promise<Object>} A promise to the retrieve webhook response.
     */

  }, {
    key: "retrieveWebhook",
    value: function () {
      var _retrieveWebhook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var response, error;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent
                }, {
                  method: 'get',
                  url: "".concat(this.config.host, "/webhooks/").concat(id),
                  headers: {
                    Authorization: this.config.sk
                  }
                });

              case 3:
                response = _context3.sent;
                _context3.next = 6;
                return response.json;

              case 6:
                return _context3.abrupt("return", _context3.sent);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                _context3.next = 13;
                return (0, _errors.determineError)(_context3.t0);

              case 13:
                error = _context3.sent;
                throw error;

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function retrieveWebhook(_x2) {
        return _retrieveWebhook.apply(this, arguments);
      }

      return retrieveWebhook;
    }()
    /**
     * Updates an existing webhook
     *
     * @memberof Webhooks
     * @return {Promise<Object>} A promise to the update webhook response.
     */

  }, {
    key: "updateWebhook",
    value: function () {
      var _updateWebhook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, body) {
        var response, error;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent
                }, {
                  method: 'put',
                  url: "".concat(this.config.host, "/webhooks/").concat(id),
                  headers: {
                    Authorization: this.config.sk
                  },
                  body: body
                });

              case 3:
                response = _context4.sent;
                _context4.next = 6;
                return response.json;

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                _context4.next = 13;
                return (0, _errors.determineError)(_context4.t0);

              case 13:
                error = _context4.sent;
                throw error;

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      function updateWebhook(_x3, _x4) {
        return _updateWebhook.apply(this, arguments);
      }

      return updateWebhook;
    }()
    /**
     * Updates all or some of the registered webhook details
     *
     * @memberof Webhooks
     * @return {Promise<Object>} A promise to the update webhook response.
     */

  }, {
    key: "partiallyUpdateWebhook",
    value: function () {
      var _partiallyUpdateWebhook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, body) {
        var response, error;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent
                }, {
                  method: 'patch',
                  url: "".concat(this.config.host, "/webhooks/").concat(id),
                  headers: {
                    Authorization: this.config.sk
                  },
                  body: body
                });

              case 3:
                response = _context5.sent;
                _context5.next = 6;
                return response.json;

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

      function partiallyUpdateWebhook(_x5, _x6) {
        return _partiallyUpdateWebhook.apply(this, arguments);
      }

      return partiallyUpdateWebhook;
    }()
    /**
     * Removes an existing webhook
     *
     * @memberof Webhooks
     * @return {Promise<Object>} A promise to the remove webhook response.
     */

  }, {
    key: "removeWebhook",
    value: function () {
      var _removeWebhook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        var response, error;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent
                }, {
                  method: 'delete',
                  url: "".concat(this.config.host, "/webhooks/").concat(id),
                  headers: {
                    Authorization: this.config.sk
                  }
                });

              case 3:
                response = _context6.sent;
                _context6.next = 6;
                return response.json;

              case 6:
                return _context6.abrupt("return", _context6.sent);

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                _context6.next = 13;
                return (0, _errors.determineError)(_context6.t0);

              case 13:
                error = _context6.sent;
                throw error;

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 9]]);
      }));

      function removeWebhook(_x7) {
        return _removeWebhook.apply(this, arguments);
      }

      return removeWebhook;
    }()
  }]);
  return Webhooks;
}();

exports["default"] = Webhooks;
//# sourceMappingURL=webhooks.js.map