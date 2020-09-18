"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = require("../config");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var pjson = require('../../package.json');

var http = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(fetch, config, request) {
    var headers, response, txt, csv, bodyParser, json;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            headers = _objectSpread(_objectSpread({}, request.headers), {}, {
              'Content-Type': config.csv ? 'text/csv' : 'application/json',
              'Cache-Control': 'no-cache',
              pragma: 'no-cache',
              'user-agent': "checkout-sdk-node/".concat(pjson.version)
            });

            if (config.formData) {
              delete headers['Content-Type'];
            }

            _context.next = 4;
            return fetch(request.url, {
              method: request.method,
              timeout: config.timeout,
              agent: config.agent,
              body: config.formData ? request.body : JSON.stringify(request.body),
              headers: headers
            });

          case 4:
            response = _context.sent;

            if (!(response.ok && config.csv)) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return response.text();

          case 8:
            txt = _context.sent;
            csv = Buffer.from(txt);
            return _context.abrupt("return", {
              status: response.status,
              csv: csv
            });

          case 11:
            // For 'no body' response, replace with empty object
            bodyParser = function bodyParser(rsp) {
              return rsp.text().then(function (text) {
                return text ? JSON.parse(text) : {};
              });
            };

            if (response.ok) {
              _context.next = 15;
              break;
            }

            json = bodyParser(response);
            throw {
              status: response.status,
              json: json
            };

          case 15:
            return _context.abrupt("return", response.text().then(function (text) {
              var data = text ? JSON.parse(text) : {}; // Return CKO response headers when available

              if (_config.REQUEST_ID_HEADER in response.headers.raw()) {
                return {
                  status: response.status,
                  json: data,
                  headers: {
                    'cko-request-id': response.headers.raw()[_config.REQUEST_ID_HEADER][0],
                    'cko-version': response.headers.raw()[_config.API_VERSION_HEADER][0]
                  }
                };
              }

              return {
                status: response.status,
                json: data
              };
            }));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function http(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = http;
exports["default"] = _default;
//# sourceMappingURL=http.js.map