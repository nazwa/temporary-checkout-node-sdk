"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setInstrumentType = exports.setSourceType = exports.setTokenType = exports.setSourceOrDestinationType = exports.validatePayment = void 0;

var _errors = require("./errors");

var _config = require("../config");

/* eslint-disable prefer-template */
var validatePayment = function validatePayment(request) {
  if (request.amount && ('' + request.amount).indexOf('.') !== -1) {
    throw new _errors.ValueError('The amount can not contain decimals.');
  }

  if (!(request.currency in _config.CURRENCIES)) {
    throw new _errors.ValueError('The currency value is not valid.');
  }

  if (request.payment_type && !(request.payment_type.toLowerCase() in _config.PAYMENT_TYPES)) {
    throw new _errors.ValueError('The payment type is not valid.');
  }

  if (request.source && request.source.type && !(typeof request.source.type === 'string')) {
    throw new _errors.ValueError('The source type needs to be a string.');
  }

  if (request.reference && !(typeof request.reference === 'string')) {
    throw new _errors.ValueError('The reference needs to be a string.');
  }
};

exports.validatePayment = validatePayment;

var setSourceOrDestinationType = function setSourceOrDestinationType(request) {
  if (request.source) {
    if (request.source.type) {
      return request;
    }

    if ('number' in request.source) {
      request.source.type = 'card';
    } else if ('email' in request.source || 'id' in request.source && request.source.id.startsWith('cus_')) {
      request.source.type = 'customer';
    } else if ('id' in request.source && request.source.id.startsWith('src_')) {
      request.source.type = 'id';
    } else if ('token' in request.source && !('cryptogram' in request.source)) {
      request.source.type = 'token';
    } else if ('token' in request.source && 'cryptogram' in request.source) {
      request.source.type = 'network_token';
    }
  } else if (request.destination) {
    if (request.destination.type) {
      return request;
    }

    if ('number' in request.destination) {
      request.destination.type = 'card';
    } else if ('token' in request.destination) {
      request.destination.type = 'token';
    } else if ('id' in request.destination) {
      request.destination.type = 'id';
    }
  }

  return request;
};

exports.setSourceOrDestinationType = setSourceOrDestinationType;

var setTokenType = function setTokenType(request) {
  if (request.type) {
    return request;
  }

  if ('number' in request) {
    request.type = 'card';
  } else if ('token_data' in request && 'header' in request.token_data) {
    request.type = 'applepay';
  } else if ('token_data' in request && 'signedMessage' in request.token_data) {
    request.type = 'googlepay';
  }

  return request;
};

exports.setTokenType = setTokenType;

var setSourceType = function setSourceType(request) {
  if (request.type) {
    return request;
  }

  if ('source_data' in request && 'account_type' in request.source_data) {
    request.type = 'ach';
  } else if ('source_data' in request && 'account_iban' in request.source_data) {
    request.type = 'sepa';
  }

  return request;
};

exports.setSourceType = setSourceType;

var setInstrumentType = function setInstrumentType(request) {
  if (request.type) {
    return request;
  }

  request.type = 'token';
  return request;
};

exports.setInstrumentType = setInstrumentType;
//# sourceMappingURL=validation.js.map