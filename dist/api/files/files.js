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

var FormData = require('form-data');
/**
 * Class dealing with the /files endpoint
 *
 * @export
 * @class Files
 */


var Files = /*#__PURE__*/function () {
  function Files(config) {
    (0, _classCallCheck2["default"])(this, Files);
    this.config = config;
  }
  /**
   * Upload a file to use as evidence in a dispute. Your file must be in either JPEG/JPG,
   * PNG or PDF format, and be no larger than 4MB.
   *
   * @memberof Files
   * @param {Object} body Files request body.
   * @return {Promise<Object>} A promise to the files response.
   */


  (0, _createClass2["default"])(Files, [{
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
        var form, response, error;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                form = new FormData();
                form.append('file', body.path);
                form.append('purpose', 'dispute_evidence');
                _context.next = 6;
                return (0, _http["default"])(_nodeFetch["default"], {
                  timeout: this.config.timeout,
                  agent: this.config.agent,
                  formData: true
                }, {
                  method: 'post',
                  url: "".concat(this.config.host, "/files"),
                  headers: {
                    Authorization: this.config.sk
                  },
                  body: form
                });

              case 6:
                response = _context.sent;
                _context.next = 9;
                return response.json;

              case 9:
                return _context.abrupt("return", _context.sent);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                _context.next = 16;
                return (0, _errors.determineError)(_context.t0);

              case 16:
                error = _context.sent;
                throw error;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function upload(_x) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }()
    /**
     * Retrieve information about a file that was previously uploaded.
     *
     * @memberof Files
     * @param {String} fileId Files id.
     * @return {Promise<Object>} A promise to the files response.
     */

  }, {
    key: "getFile",
    value: function () {
      var _getFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fileId) {
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
                  url: "".concat(this.config.host, "/files/").concat(fileId),
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

      function getFile(_x2) {
        return _getFile.apply(this, arguments);
      }

      return getFile;
    }()
  }]);
  return Files;
}();

exports["default"] = Files;
//# sourceMappingURL=files.js.map