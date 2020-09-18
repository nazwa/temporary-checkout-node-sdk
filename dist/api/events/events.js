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
 * Class dealing with the /events endpoint
 *
 * @export
 * @class Events
 */
var Events = /*#__PURE__*/function () {
  function Events(config) {
    (0, _classCallCheck2["default"])(this, Events);
    this.config = config;
  }
  /**
   * Retrieve a list of event types grouped by their respective version that you can
   * configure on your webhooks.
   *
   * @memberof Events
   * @param {string} version Events Version.
   * @return {Promise<Object>} A promise to the request events response.
   */


  (0, _createClass2["default"])(Events, [{
    key: "retrieveEventTypes",
    value: function () {
      var _retrieveEventTypes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(version) {
        var url, response, error;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                url = "".concat(this.config.host, "/event-types");

                if (version) {
                  url += "?version=".concat(version);
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
                return _context.abrupt("return", _context.sent);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                _context.next = 15;
                return (0, _errors.determineError)(_context.t0);

              case 15:
                error = _context.sent;
                throw error;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function retrieveEventTypes(_x) {
        return _retrieveEventTypes.apply(this, arguments);
      }

      return retrieveEventTypes;
    }()
    /**
     * Retrieves events ordered by the event date in descending order (latest first).
     * Results can be paged by specifying the skip and limit query parameters.
     *
     * @memberof Events
     * @param {Object} body Events request body.
     * @return {Promise<Object>} A promise to the request events response.
     */

  }, {
    key: "retrieveEvents",
    value: function () {
      var _retrieveEvents = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
        var url, queryString, response, error;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                url = "".concat(this.config.host, "/events");

                if (body) {
                  queryString = Object.keys(body).map(function (key) {
                    return "".concat(key, "=").concat(body[key]);
                  }).join('&');
                  url += "?".concat(queryString);
                }

                _context2.next = 5;
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
                response = _context2.sent;
                _context2.next = 8;
                return response.json;

              case 8:
                return _context2.abrupt("return", _context2.sent);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                _context2.next = 15;
                return (0, _errors.determineError)(_context2.t0);

              case 15:
                error = _context2.sent;
                throw error;

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function retrieveEvents(_x2) {
        return _retrieveEvents.apply(this, arguments);
      }

      return retrieveEvents;
    }()
    /**
     * Retrieves the event with the specified identifier string. The event data includes the full event
     * details, the schema of which will vary based on the type.
     *
     * @memberof Events
     * @param {string} eventId Event id.
     * @return {Promise<Object>} A promise to the request event response.
     */

  }, {
    key: "retrieveEvent",
    value: function () {
      var _retrieveEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(eventId) {
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
                  url: "".concat(this.config.host, "/events/").concat(eventId),
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

      function retrieveEvent(_x3) {
        return _retrieveEvent.apply(this, arguments);
      }

      return retrieveEvent;
    }()
    /**
     * Retrieves the attempts for a specific event notification
     *
     * @memberof Events
     * @param {Object} body Event request body.
     * @return {Promise<Object>} A promise to the request event notifications response.
     */

  }, {
    key: "retrieveEventNotification",
    value: function () {
      var _retrieveEventNotification = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(body) {
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
                  method: 'get',
                  url: "".concat(this.config.host, "/events/").concat(body.eventId, "/notifications/").concat(body.notificationId),
                  headers: {
                    Authorization: this.config.sk
                  }
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

      function retrieveEventNotification(_x4) {
        return _retrieveEventNotification.apply(this, arguments);
      }

      return retrieveEventNotification;
    }()
    /**
     * Retries a specific webhook notification for the given event
     *
     * @memberof Events
     * @param {Object} body Event request body.
     * @return {Promise<Object>} A promise to the retry event response.
     */

  }, {
    key: "retry",
    value: function () {
      var _retry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(body) {
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
                  method: 'post',
                  url: "".concat(this.config.host, "/events/").concat(body.eventId, "/webhooks/").concat(body.webhookId, "/retry"),
                  headers: {
                    Authorization: this.config.sk
                  }
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

      function retry(_x5) {
        return _retry.apply(this, arguments);
      }

      return retry;
    }()
    /**
     * Retries all webhook notifications configured for the specified event
     *
     * @memberof Events
     * @param {string} eventId Event id.
     * @return {Promise<Object>} A promise to the retry events response.
     */

  }, {
    key: "retryAll",
    value: function () {
      var _retryAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(eventId) {
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
                  method: 'post',
                  url: "".concat(this.config.host, "/events/").concat(eventId, "/webhooks/retry"),
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

      function retryAll(_x6) {
        return _retryAll.apply(this, arguments);
      }

      return retryAll;
    }()
  }]);
  return Events;
}();

exports["default"] = Events;
//# sourceMappingURL=events.js.map