"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.determineError = exports.ValueError = exports.ApiError = exports.BadGateway = exports.TooManyRequestsError = exports.ValidationError = exports.ErrorWithBody = exports.NotFoundError = exports.UrlAlreadyRegistered = exports.ActionNotAllowed = exports.AuthenticationError = exports.ApiTimeout = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable camelcase */

/* eslint-disable max-classes-per-file */

/**
 * Error raised for pre-api value validation
 *
 * @export
 * @class ApiTimeout
 * @extends {Error}
 */
var ApiTimeout = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ApiTimeout, _Error);

  var _super = _createSuper(ApiTimeout);

  function ApiTimeout() {
    var _this;

    (0, _classCallCheck2["default"])(this, ApiTimeout);
    _this = _super.call(this, 'ApiTimeout');
    Object.setPrototypeOf((0, _assertThisInitialized2["default"])(_this), (this instanceof ApiTimeout ? this.constructor : void 0).prototype);
    _this.name = 'ApiTimeout';
    return _this;
  }

  return ApiTimeout;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
/**
 * AuthenticationError
 *
 * @export
 * @class AuthenticationError
 * @extends {Error}
 */


exports.ApiTimeout = ApiTimeout;

var AuthenticationError = /*#__PURE__*/function (_Error2) {
  (0, _inherits2["default"])(AuthenticationError, _Error2);

  var _super2 = _createSuper(AuthenticationError);

  function AuthenticationError(message) {
    var _this2;

    (0, _classCallCheck2["default"])(this, AuthenticationError);
    _this2 = _super2.call(this, message);
    Object.setPrototypeOf((0, _assertThisInitialized2["default"])(_this2), (this instanceof AuthenticationError ? this.constructor : void 0).prototype);
    _this2.http_code = 401;
    _this2.name = 'AuthenticationError';
    return _this2;
  }

  return AuthenticationError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
/**
 * ActionNotAllowed
 *
 * @export
 * @class ActionNotAllowed
 * @extends {Error}
 */


exports.AuthenticationError = AuthenticationError;

var ActionNotAllowed = /*#__PURE__*/function (_Error3) {
  (0, _inherits2["default"])(ActionNotAllowed, _Error3);

  var _super3 = _createSuper(ActionNotAllowed);

  function ActionNotAllowed() {
    var _this3;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ActionNotAllowed';
    (0, _classCallCheck2["default"])(this, ActionNotAllowed);
    _this3 = _super3.call(this, message);
    Object.setPrototypeOf((0, _assertThisInitialized2["default"])(_this3), (this instanceof ActionNotAllowed ? this.constructor : void 0).prototype);
    _this3.http_code = 403;
    _this3.name = 'ActionNotAllowed';
    return _this3;
  }

  return ActionNotAllowed;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
/**
 * UrlAlreadyRegistered
 *
 * @export
 * @class UrlAlreadyRegistered
 * @extends {Error}
 */


exports.ActionNotAllowed = ActionNotAllowed;

var UrlAlreadyRegistered = /*#__PURE__*/function (_Error4) {
  (0, _inherits2["default"])(UrlAlreadyRegistered, _Error4);

  var _super4 = _createSuper(UrlAlreadyRegistered);

  function UrlAlreadyRegistered() {
    var _this4;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'UrlAlreadyRegistered';
    (0, _classCallCheck2["default"])(this, UrlAlreadyRegistered);
    _this4 = _super4.call(this, message);
    Object.setPrototypeOf((0, _assertThisInitialized2["default"])(_this4), (this instanceof UrlAlreadyRegistered ? this.constructor : void 0).prototype);
    _this4.http_code = 409;
    _this4.name = 'UrlAlreadyRegistered';
    return _this4;
  }

  return UrlAlreadyRegistered;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
/**
 * NotFoundError
 *
 * @export
 * @class NotFoundError
 * @extends {Error}
 */


exports.UrlAlreadyRegistered = UrlAlreadyRegistered;

var NotFoundError = /*#__PURE__*/function (_Error5) {
  (0, _inherits2["default"])(NotFoundError, _Error5);

  var _super5 = _createSuper(NotFoundError);

  function NotFoundError() {
    var _this5;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'NotFoundError';
    (0, _classCallCheck2["default"])(this, NotFoundError);
    _this5 = _super5.call(this, message);
    Object.setPrototypeOf((0, _assertThisInitialized2["default"])(_this5), (this instanceof NotFoundError ? this.constructor : void 0).prototype);
    _this5.http_code = 404;
    _this5.name = 'NotFoundError';
    return _this5;
  }

  return NotFoundError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
/**
 * UnprocessableError
 *
 * @export
 * @class UnprocessableError
 * @extends {Error}
 */
// export class UnprocessableError extends Error {
//     constructor(message = 'UnprocessableError') {
//         UnprocessableError.http_code = 400;
//         super(message);
//         Object.setPrototypeOf(this, new.target.prototype);
//         this.name = UnprocessableError.name;
//     }
// }

/**
 * ValidationError
 *
 * @export
 * @class ValidationError
 * @extends {Error}
 */


exports.NotFoundError = NotFoundError;

var ErrorWithBody = /*#__PURE__*/function (_Error6) {
  (0, _inherits2["default"])(ErrorWithBody, _Error6);

  var _super6 = _createSuper(ErrorWithBody);

  function ErrorWithBody(http_code, error, message) {
    var _this6;

    (0, _classCallCheck2["default"])(this, ErrorWithBody);
    _this6 = _super6.call(this, message);
    Object.setPrototypeOf((0, _assertThisInitialized2["default"])(_this6), (this instanceof ErrorWithBody ? this.constructor : void 0).prototype);
    _this6.name = message;
    _this6.http_code = http_code;
    _this6.body = error;
    return _this6;
  }

  return ErrorWithBody;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
/**
 * ValidationError
 *
 * @export
 * @class ValidationError
 * @extends {Error}
 */


exports.ErrorWithBody = ErrorWithBody;

var ValidationError = /*#__PURE__*/function (_ErrorWithBody) {
  (0, _inherits2["default"])(ValidationError, _ErrorWithBody);

  var _super7 = _createSuper(ValidationError);

  function ValidationError(error) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ValidationError';
    (0, _classCallCheck2["default"])(this, ValidationError);
    return _super7.call(this, 422, error, message);
  }

  return ValidationError;
}(ErrorWithBody);
/**
 * TooManyRequestsError
 *
 * @export
 * @class TooManyRequestsError
 * @extends {Error}
 */


exports.ValidationError = ValidationError;

var TooManyRequestsError = /*#__PURE__*/function (_ErrorWithBody2) {
  (0, _inherits2["default"])(TooManyRequestsError, _ErrorWithBody2);

  var _super8 = _createSuper(TooManyRequestsError);

  function TooManyRequestsError(error) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'TooManyRequestsError';
    (0, _classCallCheck2["default"])(this, TooManyRequestsError);
    return _super8.call(this, 429, error, message);
  }

  return TooManyRequestsError;
}(ErrorWithBody);
/**
 * BadGateway
 *
 * @export
 * @class BadGateway
 * @extends {Error}
 */


exports.TooManyRequestsError = TooManyRequestsError;

var BadGateway = /*#__PURE__*/function (_Error7) {
  (0, _inherits2["default"])(BadGateway, _Error7);

  var _super9 = _createSuper(BadGateway);

  function BadGateway() {
    var _this7;

    (0, _classCallCheck2["default"])(this, BadGateway);
    _this7 = _super9.call(this, 'Bad gateway');
    Object.setPrototypeOf((0, _assertThisInitialized2["default"])(_this7), (this instanceof BadGateway ? this.constructor : void 0).prototype);
    _this7.name = 'Bad gateway';
    _this7.http_code = 502;
    return _this7;
  }

  return BadGateway;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
/**
 * ApiError
 *
 * @export
 * @class HttpError
 * @extends {Error}
 */


exports.BadGateway = BadGateway;

var ApiError = /*#__PURE__*/function (_Error8) {
  (0, _inherits2["default"])(ApiError, _Error8);

  var _super10 = _createSuper(ApiError);

  function ApiError(error) {
    var _this8;

    (0, _classCallCheck2["default"])(this, ApiError);
    _this8 = _super10.call(this, 'API Error');
    Object.setPrototypeOf((0, _assertThisInitialized2["default"])(_this8), (this instanceof ApiError ? this.constructor : void 0).prototype);
    _this8.name = 'API Error';
    _this8.body = error;
    return _this8;
  }

  return ApiError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
/**
 * ValueError
 *
 * @export
 * @class ValueError
 * @extends {Error}
 */


exports.ApiError = ApiError;

var ValueError = /*#__PURE__*/function (_Error9) {
  (0, _inherits2["default"])(ValueError, _Error9);

  var _super11 = _createSuper(ValueError);

  function ValueError(message) {
    var _this9;

    (0, _classCallCheck2["default"])(this, ValueError);
    _this9 = _super11.call(this, message);
    Object.setPrototypeOf((0, _assertThisInitialized2["default"])(_this9), (this instanceof ValueError ? this.constructor : void 0).prototype);
    _this9.name = 'ValueError';
    _this9.body = message;
    return _this9;
  }

  return ValueError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.ValueError = ValueError;

var determineError = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err) {
    var errorJSON;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(err.type === 'request-timeout')) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", new ApiTimeout());

          case 2:
            if (!(err instanceof ValueError)) {
              _context.next = 4;
              break;
            }

            throw err;

          case 4:
            if (!(err.json !== undefined)) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return err.json.then(function (data) {
              return data;
            });

          case 7:
            _context.t0 = _context.sent;
            _context.next = 11;
            break;

          case 10:
            _context.t0 = {};

          case 11:
            errorJSON = _context.t0;

            if (Object.keys(errorJSON).length === 0 && err.message) {
              errorJSON = err.message;
            }

            _context.t1 = err.status;
            _context.next = _context.t1 === 401 ? 16 : _context.t1 === 404 ? 17 : _context.t1 === 403 ? 18 : _context.t1 === 409 ? 19 : _context.t1 === 422 ? 20 : _context.t1 === 429 ? 25 : _context.t1 === 502 ? 30 : 31;
            break;

          case 16:
            return _context.abrupt("return", new AuthenticationError());

          case 17:
            return _context.abrupt("return", new NotFoundError());

          case 18:
            return _context.abrupt("return", new ActionNotAllowed());

          case 19:
            return _context.abrupt("return", new UrlAlreadyRegistered());

          case 20:
            _context.t2 = ValidationError;
            _context.next = 23;
            return errorJSON;

          case 23:
            _context.t3 = _context.sent;
            return _context.abrupt("return", new _context.t2(_context.t3));

          case 25:
            _context.t4 = TooManyRequestsError;
            _context.next = 28;
            return errorJSON;

          case 28:
            _context.t5 = _context.sent;
            return _context.abrupt("return", new _context.t4(_context.t5));

          case 30:
            return _context.abrupt("return", new BadGateway());

          case 31:
            _context.t6 = ApiError;
            _context.next = 34;
            return errorJSON;

          case 34:
            _context.t7 = _context.sent;
            return _context.abrupt("return", new _context.t6(_context.t7));

          case 36:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function determineError(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.determineError = determineError;
//# sourceMappingURL=errors.js.map