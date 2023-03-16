/* tslint:disable */
/* eslint-disable */
/*
 * StatusCake API
 *
 * Copyright (c) 2023
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
 * API version: 1.1.0
 * Contact: support@statuscake.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

import { exists, mapValues } from '../runtime';
import {
  SSLTestCheckRate,
  SSLTestCheckRateFromJSON,
  SSLTestCheckRateFromJSONTyped,
  SSLTestCheckRateToJSON,
} from './SSLTestCheckRate';
import {
  SSLTestFlags,
  SSLTestFlagsFromJSON,
  SSLTestFlagsFromJSONTyped,
  SSLTestFlagsToJSON,
} from './SSLTestFlags';
import {
  SSLTestMixedContent,
  SSLTestMixedContentFromJSON,
  SSLTestMixedContentFromJSONTyped,
  SSLTestMixedContentToJSON,
} from './SSLTestMixedContent';

/**
 *
 * @export
 * @interface SSLTest
 */
export interface SSLTest {
  /**
   * SSL check ID
   * @type {string}
   * @memberof SSLTest
   */
  id: string;
  /**
   * URL of the server under test
   * @type {string}
   * @memberof SSLTest
   */
  websiteUrl: string;
  /**
   *
   * @type {SSLTestCheckRate}
   * @memberof SSLTest
   */
  checkRate: SSLTestCheckRate;
  /**
   * List representing when alerts should be sent (days).
   * @type {Array<number>}
   * @memberof SSLTest
   */
  alertAt: Array<number>;
  /**
   * Whether to enable alerts when SSL certificate issues are found
   * @type {boolean}
   * @memberof SSLTest
   */
  alertBroken: boolean;
  /**
   * Whether to enable alerts when the SSL certificate is to expire
   * @type {boolean}
   * @memberof SSLTest
   */
  alertExpiry: boolean;
  /**
   * Whether to enable alerts when mixed content is found
   * @type {boolean}
   * @memberof SSLTest
   */
  alertMixed: boolean;
  /**
   * Whether to enable alert reminders
   * @type {boolean}
   * @memberof SSLTest
   */
  alertReminder: boolean;
  /**
   * SSL certificate score (%)
   * @type {number}
   * @memberof SSLTest
   */
  certificateScore?: number;
  /**
   * SSL certificate status
   * @type {string}
   * @memberof SSLTest
   */
  certificateStatus?: string;
  /**
   * SSL/TLS cipher suite belonging to the SSL certificate
   * @type {string}
   * @memberof SSLTest
   */
  cipher?: string;
  /**
   * SSL certificate cipher strength (%)
   * @type {number}
   * @memberof SSLTest
   */
  cipherScore?: number;
  /**
   * List of contact group IDs
   * @type {Array<string>}
   * @memberof SSLTest
   */
  contactGroups: Array<string>;
  /**
   * Issuer of the SSL certificate
   * @type {string}
   * @memberof SSLTest
   */
  issuerCommonName?: string;
  /**
   *
   * @type {SSLTestFlags}
   * @memberof SSLTest
   */
  flags?: SSLTestFlags;
  /**
   * Whether to follow redirects when testing. Disabled by default
   * @type {boolean}
   * @memberof SSLTest
   */
  followRedirects: boolean;
  /**
   * Hostname of the server under test
   * @type {string}
   * @memberof SSLTest
   */
  hostname?: string;
  /**
   * The last reminder to have been sent (days)
   * @type {number}
   * @memberof SSLTest
   */
  lastReminder?: number;
  /**
   * List of mixed content resources
   * @type {Array<SSLTestMixedContent>}
   * @memberof SSLTest
   */
  mixedContent: Array<SSLTestMixedContent>;
  /**
   * Whether the check should be run
   * @type {boolean}
   * @memberof SSLTest
   */
  paused: boolean;
  /**
   * When the SSL certificate was last updated (RFC3339 format)
   * @type {Date}
   * @memberof SSLTest
   */
  updatedAt?: Date;
  /**
   * Custom user agent string set when testing
   * @type {string}
   * @memberof SSLTest
   */
  userAgent?: string;
  /**
   * SSL certificate validity start (RFC3339 format)
   * @type {Date}
   * @memberof SSLTest
   */
  validFrom?: Date;
  /**
   * SSL certificate validity end (RFC3339 format)
   * @type {Date}
   * @memberof SSLTest
   */
  validUntil?: Date;
}

export function SSLTestFromJSON(json: any): SSLTest {
  return SSLTestFromJSONTyped(json, false);
}

export function SSLTestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SSLTest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    websiteUrl: json['website_url'],
    checkRate: SSLTestCheckRateFromJSON(json['check_rate']),
    alertAt: json['alert_at'],
    alertBroken: json['alert_broken'],
    alertExpiry: json['alert_expiry'],
    alertMixed: json['alert_mixed'],
    alertReminder: json['alert_reminder'],
    certificateScore: !exists(json, 'certificate_score')
      ? undefined
      : json['certificate_score'],
    certificateStatus: !exists(json, 'certificate_status')
      ? undefined
      : json['certificate_status'],
    cipher: !exists(json, 'cipher') ? undefined : json['cipher'],
    cipherScore: !exists(json, 'cipher_score')
      ? undefined
      : json['cipher_score'],
    contactGroups: json['contact_groups'],
    issuerCommonName: !exists(json, 'issuer_common_name')
      ? undefined
      : json['issuer_common_name'],
    flags: !exists(json, 'flags')
      ? undefined
      : SSLTestFlagsFromJSON(json['flags']),
    followRedirects: json['follow_redirects'],
    hostname: !exists(json, 'hostname') ? undefined : json['hostname'],
    lastReminder: !exists(json, 'last_reminder')
      ? undefined
      : json['last_reminder'],
    mixedContent: (json['mixed_content'] as Array<any>).map(
      SSLTestMixedContentFromJSON,
    ),
    paused: json['paused'],
    updatedAt: !exists(json, 'updated_at')
      ? undefined
      : new Date(json['updated_at']),
    userAgent: !exists(json, 'user_agent') ? undefined : json['user_agent'],
    validFrom: !exists(json, 'valid_from')
      ? undefined
      : new Date(json['valid_from']),
    validUntil: !exists(json, 'valid_until')
      ? undefined
      : new Date(json['valid_until']),
  };
}

export function SSLTestToJSON(value?: SSLTest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    website_url: value.websiteUrl,
    check_rate: SSLTestCheckRateToJSON(value.checkRate),
    alert_at: value.alertAt,
    alert_broken: value.alertBroken,
    alert_expiry: value.alertExpiry,
    alert_mixed: value.alertMixed,
    alert_reminder: value.alertReminder,
    certificate_score: value.certificateScore,
    certificate_status: value.certificateStatus,
    cipher: value.cipher,
    cipher_score: value.cipherScore,
    contact_groups: value.contactGroups,
    issuer_common_name: value.issuerCommonName,
    flags: SSLTestFlagsToJSON(value.flags),
    follow_redirects: value.followRedirects,
    hostname: value.hostname,
    last_reminder: value.lastReminder,
    mixed_content: (value.mixedContent as Array<any>).map(
      SSLTestMixedContentToJSON,
    ),
    paused: value.paused,
    updated_at:
      value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    user_agent: value.userAgent,
    valid_from:
      value.validFrom === undefined ? undefined : value.validFrom.toISOString(),
    valid_until:
      value.validUntil === undefined
        ? undefined
        : value.validUntil.toISOString(),
  };
}
