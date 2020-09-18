"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CURRENCIES = exports.PAYMENT_TYPES = exports.SOURCE_ID_REGEX = exports.CARD_TOKEN_REGEX = exports.SANDBOX_PUBLIC_KEY_REGEX = exports.SANDBOX_SECRET_KEY_REGEX = exports.LIVE_PUBLIC_KEY_REGEX = exports.LIVE_SECRET_KEY_REGEX = exports.DEFAULT_TIMEOUT = exports.API_VERSION_HEADER = exports.REQUEST_ID_HEADER = exports.LIVE_BASE_URL = exports.SANDBOX_BASE_URL = void 0;
var SANDBOX_BASE_URL = 'https://api.sandbox.checkout.com';
exports.SANDBOX_BASE_URL = SANDBOX_BASE_URL;
var LIVE_BASE_URL = 'https://api.checkout.com';
exports.LIVE_BASE_URL = LIVE_BASE_URL;
var REQUEST_ID_HEADER = 'cko-request-id';
exports.REQUEST_ID_HEADER = REQUEST_ID_HEADER;
var API_VERSION_HEADER = 'cko-version';
exports.API_VERSION_HEADER = API_VERSION_HEADER;
var DEFAULT_TIMEOUT = 5000;
exports.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;
var LIVE_SECRET_KEY_REGEX = /^sk_?(\w{8})-(\w{4})-(\w{4})-(\w{4})-(\w{12})$/;
exports.LIVE_SECRET_KEY_REGEX = LIVE_SECRET_KEY_REGEX;
var LIVE_PUBLIC_KEY_REGEX = /^pk_?(\w{8})-(\w{4})-(\w{4})-(\w{4})-(\w{12})$/;
exports.LIVE_PUBLIC_KEY_REGEX = LIVE_PUBLIC_KEY_REGEX;
var SANDBOX_SECRET_KEY_REGEX = /^sk_test_?(\w{8})-(\w{4})-(\w{4})-(\w{4})-(\w{12})$/;
exports.SANDBOX_SECRET_KEY_REGEX = SANDBOX_SECRET_KEY_REGEX;
var SANDBOX_PUBLIC_KEY_REGEX = /^pk_?(\w{8})-(\w{4})-(\w{4})-(\w{4})-(\w{12})$/;
exports.SANDBOX_PUBLIC_KEY_REGEX = SANDBOX_PUBLIC_KEY_REGEX;
var CARD_TOKEN_REGEX = /^(tok)_(\w{26})$/;
exports.CARD_TOKEN_REGEX = CARD_TOKEN_REGEX;
var SOURCE_ID_REGEX = /^(src)_(\w{26})$/;
exports.SOURCE_ID_REGEX = SOURCE_ID_REGEX;
var PAYMENT_TYPES = {
  regular: 'Regular',
  recurring: 'Recurring',
  moto: 'MOTO'
};
exports.PAYMENT_TYPES = PAYMENT_TYPES;
var CURRENCIES = {
  ALL: 'ALL',
  STN: 'STN',
  EEK: 'EEK',
  BHD: 'BHD',
  SCR: 'SCR',
  DJF: 'DJF',
  EGP: 'EGP',
  MDL: 'MDL',
  MZN: 'MZN',
  BND: 'BND',
  ZMK: 'ZMK',
  SHP: 'SHP',
  LBP: 'LBP',
  AWG: 'AWG',
  JMD: 'JMD',
  KES: 'KES',
  BYN: 'BYN',
  KHR: 'KHR',
  LAK: 'LAK',
  MVR: 'MVR',
  AOA: 'AOA',
  TJS: 'TJS',
  SVC: 'SVC',
  GNF: 'GNF',
  BRL: 'BRL',
  MOP: 'MOP',
  BOB: 'BOB',
  CDF: 'CDF',
  NAD: 'NAD',
  LYD: 'LYD',
  VUV: 'VUV',
  QAR: 'QAR',
  CLP: 'CLP',
  HRK: 'HRK',
  ISK: 'ISK',
  FKP: 'FKP',
  XCD: 'XCD',
  NOK: 'NOK',
  CUP: 'CUP',
  VND: 'VND',
  PEN: 'PEN',
  KMF: 'KMF',
  LVL: 'LVL',
  MMK: 'MMK',
  TRY: 'TRY',
  VEF: 'VEF',
  AUD: 'AUD',
  TWD: 'TWD',
  PKR: 'PKR',
  SLL: 'SLL',
  BGN: 'BGN',
  LRD: 'LRD',
  LKR: 'LKR',
  XAF: 'XAF',
  JOD: 'JOD',
  ANG: 'ANG',
  BSD: 'BSD',
  CAD: 'CAD',
  GIP: 'GIP',
  MNT: 'MNT',
  LTL: 'LTL',
  BBD: 'BBD',
  CLF: 'CLF',
  BWP: 'BWP',
  COP: 'COP',
  PHP: 'PHP',
  HUF: 'HUF',
  FJD: 'FJD',
  MWK: 'MWK',
  THB: 'THB',
  XPF: 'XPF',
  RSD: 'RSD',
  SAR: 'SAR',
  UYU: 'UYU',
  BZD: 'BZD',
  SYP: 'SYP',
  GMD: 'GMD',
  SZL: 'SZL',
  SBD: 'SBD',
  ETB: 'ETB',
  CHF: 'CHF',
  MXN: 'MXN',
  ARS: 'ARS',
  GTQ: 'GTQ',
  GHS: 'GHS',
  NIO: 'NIO',
  JPY: 'JPY',
  BDT: 'BDT',
  UZS: 'UZS',
  SOS: 'SOS',
  BTN: 'BTN',
  NZD: 'NZD',
  TZS: 'TZS',
  IQD: 'IQD',
  MGA: 'MGA',
  DZD: 'DZD',
  GYD: 'GYD',
  USD: 'USD',
  KWD: 'KWD',
  CNY: 'CNY',
  PYG: 'PYG',
  SGD: 'SGD',
  KZT: 'KZT',
  PGK: 'PGK',
  AMD: 'AMD',
  GBP: 'GBP',
  AFN: 'AFN',
  CRC: 'CRC',
  XOF: 'XOF',
  YER: 'YER',
  MRU: 'MRU',
  DKK: 'DKK',
  TOP: 'TOP',
  INR: 'INR',
  SDG: 'SDG',
  DOP: 'DOP',
  ZWL: 'ZWL',
  UGX: 'UGX',
  SEK: 'SEK',
  LSL: 'LSL',
  MYR: 'MYR',
  TMT: 'TMT',
  OMR: 'OMR',
  BMD: 'BMD',
  KRW: 'KRW',
  HKD: 'HKD',
  KGS: 'KGS',
  BAM: 'BAM',
  NGN: 'NGN',
  ILS: 'ILS',
  MUR: 'MUR',
  RON: 'RON',
  TND: 'TND',
  AED: 'AED',
  PAB: 'PAB',
  NPR: 'NPR',
  TTD: 'TTD',
  RWF: 'RWF',
  HTG: 'HTG',
  IDR: 'IDR',
  EUR: 'EUR',
  KYD: 'KYD',
  IRR: 'IRR',
  KPW: 'KPW',
  MKD: 'MKD',
  SRD: 'SRD',
  HNL: 'HNL',
  AZN: 'AZN',
  ERN: 'ERN',
  CZK: 'CZK',
  CVE: 'CVE',
  BIF: 'BIF',
  MAD: 'MAD',
  RUB: 'RUB',
  UAH: 'UAH',
  WST: 'WST',
  PLN: 'PLN',
  ZAR: 'ZAR',
  GEL: 'GEL',
  ZMW: 'ZMW'
};
exports.CURRENCIES = CURRENCIES;
//# sourceMappingURL=config.js.map