"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _config = require("./config");

var _index = require("./index");

var determineHost = function determineHost(key, options) {
  // Unless specified, determine the hosted based on the secret key
  if (options && options.host) {
    return options.host;
  }

  return _config.LIVE_SECRET_KEY_REGEX.test(key) ? _config.LIVE_BASE_URL : _config.SANDBOX_BASE_URL;
};

var determineSecretKey = function determineSecretKey(key) {
  // Unless specified, check environment variables for the key
  return !key ? process.env.CKO_SECRET_KEY || '' : key;
};

var determinePublicKey = function determinePublicKey(options) {
  // Unless specified, check environment variables for the key
  if (options && options.pk) {
    return options.pk;
  }

  return process.env.CKO_PUBLIC_KEY || '';
};
/**
 * Main Checkout.com SDK class
 *
 * @export
 * @class Checkout
 */


var Checkout =
/**
 * Creates an instance of Checkout.com's SDK.
 *
 * Determines the environment based on the key
 *
 * @constructor
 * @param {string} [key] Secret Key /^(sk)
 * @param {Object}  [options] Configuration options
 * @memberof Payments
 */
function Checkout(key, options) {
  (0, _classCallCheck2["default"])(this, Checkout);
  this.config = {
    sk: determineSecretKey(key),
    pk: determinePublicKey(options),
    host: determineHost(key, options),
    timeout: options && options.timeout ? options.timeout : _config.DEFAULT_TIMEOUT,
    agent: options && options.agent ? options.agent : undefined
  };
  this.payments = new _index.Payments(this.config);
  this.sources = new _index.Sources(this.config);
  this.tokens = new _index.Tokens(this.config);
  this.instruments = new _index.Instruments(this.config);
  this.webhooks = new _index.Webhooks(this.config);
  this.events = new _index.Events(this.config);
  this.disputes = new _index.Disputes(this.config);
  this.files = new _index.Files(this.config);
  this.reconciliation = new _index.Reconciliation(this.config);
};

exports["default"] = Checkout;
//# sourceMappingURL=Checkout.js.map