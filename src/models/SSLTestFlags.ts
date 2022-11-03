/* tslint:disable */
/* eslint-disable */
/*
 * StatusCake API
 *
 * Copyright (c) 2022
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * API version: 1.0.1
 * Contact: support@statuscake.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface SSLTestFlags
 */
export interface SSLTestFlags {
  /**
   * Wherher follow redirects has been enabled for the SSL check
   * @type {boolean}
   * @memberof SSLTestFlags
   */
  followRedirects: boolean;
  /**
   * Whether the requested page has mixed content
   * @type {boolean}
   * @memberof SSLTestFlags
   */
  hasMixed: boolean;
  /**
   * Whether the SSL certificate has Perfect Forward Security enabled
   * @type {boolean}
   * @memberof SSLTestFlags
   */
  hasPfs: boolean;
  /**
   * Whether the SSL certificate has errors
   * @type {boolean}
   * @memberof SSLTestFlags
   */
  isBroken: boolean;
  /**
   * Whether the SSL certificate has expired
   * @type {boolean}
   * @memberof SSLTestFlags
   */
  isExpired: boolean;
  /**
   * Whether the SSL certificate has Extended Validation (EV)
   * @type {boolean}
   * @memberof SSLTestFlags
   */
  isExtended: boolean;
  /**
   * Whether the SSL certificate is missing
   * @type {boolean}
   * @memberof SSLTestFlags
   */
  isMissing: boolean;
  /**
   * Whether the SSL certificate has been revoked by the certificate authority
   * @type {boolean}
   * @memberof SSLTestFlags
   */
  isRevoked: boolean;
}

export function SSLTestFlagsFromJSON(json: any): SSLTestFlags {
  return SSLTestFlagsFromJSONTyped(json, false);
}

export function SSLTestFlagsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SSLTestFlags {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    followRedirects: json['follow_redirects'],
    hasMixed: json['has_mixed'],
    hasPfs: json['has_pfs'],
    isBroken: json['is_broken'],
    isExpired: json['is_expired'],
    isExtended: json['is_extended'],
    isMissing: json['is_missing'],
    isRevoked: json['is_revoked'],
  };
}

export function SSLTestFlagsToJSON(value?: SSLTestFlags | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    follow_redirects: value.followRedirects,
    has_mixed: value.hasMixed,
    has_pfs: value.hasPfs,
    is_broken: value.isBroken,
    is_expired: value.isExpired,
    is_extended: value.isExtended,
    is_missing: value.isMissing,
    is_revoked: value.isRevoked,
  };
}
