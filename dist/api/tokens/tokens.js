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

var _validation = require("../../services/validation");

/**
 * Class dealing with the /tokens endpoint
 *
 * @export
 * @class Tokens
 */
var Tokens = /*#__PURE__*/function () {
  function Tokens(config) {
    (0, _classCallCheck2["default"])(this, Tokens);
    this.config = config;
  }
  /**
   * Exchange card details or a digital wallet payment token for a reference token
   * that can be used later to request a card payment.
   *
   * @memberof Tokens
   * @param {Object} body Token request body.
   * @return {Promise<Object>} A promise to the request token response.
   */


  (0, _createClass2["default"])(Tokens, [{
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
        var response, error;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _validation.setTokenType)(body);
                _context.prev = 1;
                _context.next = 4;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent
                }, {
                  method: 'post',
                  url: "".concat(this.config.host, "/tokens"),
                  headers: {
                    Authorization: this.config.pk
                  },
                  body: body
                });

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json;

              case 7:
                return _context.abrupt("return", _context.sent);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                _context.next = 14;
                return (0, _errors.determineError)(_context.t0);

              case 14:
                error = _context.sent;
                throw error;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function request(_x) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }]);
  return Tokens;
}();

exports["default"] = Tokens;
//# sourceMappingURL=tokens.js.map