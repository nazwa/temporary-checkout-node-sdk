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
 * Class dealing with the /disputes endpoint
 *
 * @export
 * @class Disputes
 */
var Disputes = /*#__PURE__*/function () {
  function Disputes(config) {
    (0, _classCallCheck2["default"])(this, Disputes);
    this.config = config;
  }
  /**
   * Returns a list of all disputes against your business. The results will be returned
   * in reverse chronological order, showing the last modified dispute (for example,
   * where you've recently added a piece of evidence) first. You can use the optional
   * parameters below to skip or limit results.
   *
   * @memberof Disputes
   * @param {Object} body Disputes params.
   * @return {Promise<Object>} A promise to the disputes response.
   */


  (0, _createClass2["default"])(Disputes, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
        var url, queryString, response, error;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                url = "".concat(this.config.host, "/disputes");

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

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * Returns all the details of a dispute using the dispute identifier.
     *
     * @memberof Disputes
     * @param {String} disputeId Dispute id.
     * @return {Promise<Object>} A promise to the dispute response.
     */

  }, {
    key: "getDetails",
    value: function () {
      var _getDetails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(disputeId) {
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
                  url: "".concat(this.config.host, "/disputes/").concat(disputeId),
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

      function getDetails(_x2) {
        return _getDetails.apply(this, arguments);
      }

      return getDetails;
    }()
    /**
     * Returns all the details of a dispute using the dispute identifier.
     *
     * @memberof Disputes
     * @param {String} disputeId Dispute id.
     * @return {Promise<Object>} A promise to the dispute response.
     */

  }, {
    key: "accept",
    value: function () {
      var _accept = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(disputeId) {
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
                  method: 'post',
                  url: "".concat(this.config.host, "/disputes/").concat(disputeId, "/accept"),
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

      function accept(_x3) {
        return _accept.apply(this, arguments);
      }

      return accept;
    }()
    /**
     * Adds supporting evidence to a dispute. Before using this endpoint, you first need
     * to upload your files using the file uploader. You will receive a file id
     * (prefixed by file_) which you can then use in your request. Note that this only
     * attaches the evidence to the dispute, it does not send it to us.
     * Once ready, you will need to submit it.
     *
     * You must provide at least one evidence type in the body of your request.
     *
     * @memberof Disputes
     * @param {String} disputeId Dispute id.
     * @param {Object} body Evidence
     * @return {Promise<Object>} A promise to the dispute response.
     */

  }, {
    key: "provideEvidence",
    value: function () {
      var _provideEvidence = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(disputeId, body) {
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
                  url: "".concat(this.config.host, "/disputes/").concat(disputeId, "/evidence"),
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

      function provideEvidence(_x4, _x5) {
        return _provideEvidence.apply(this, arguments);
      }

      return provideEvidence;
    }()
    /**
     * Retrieves a list of the evidence submitted in response to a specific dispute.
     *
     * @memberof Disputes
     * @param {String} disputeId Dispute id.
     * @return {Promise<Object>} A promise to the dispute response.
     */

  }, {
    key: "getEvidence",
    value: function () {
      var _getEvidence = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(disputeId) {
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
                  method: 'get',
                  url: "".concat(this.config.host, "/disputes/").concat(disputeId, "/evidence"),
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

      function getEvidence(_x6) {
        return _getEvidence.apply(this, arguments);
      }

      return getEvidence;
    }()
    /**
     * With this final request, you can submit the evidence that you have previously
     * provided. Make sure you have provided all the relevant information before using
     * this request. You will not be able to amend your evidence once you have submitted it.
     *
     * @memberof Disputes
     * @param {String} disputeId Dispute id.
     * @return {Promise<Object>} A promise to the dispute response.
     */

  }, {
    key: "submit",
    value: function () {
      var _submit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(disputeId) {
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
                  url: "".concat(this.config.host, "/disputes/").concat(disputeId, "/evidence"),
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

      function submit(_x7) {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }]);
  return Disputes;
}();

exports["default"] = Disputes;
//# sourceMappingURL=disputes.js.map