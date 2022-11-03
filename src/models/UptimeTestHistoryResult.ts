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
 * @interface UptimeTestHistoryResult
 */
export interface UptimeTestHistoryResult {
  /**
   * Creation time of the result (RFC3339 format)
   * @type {Date}
   * @memberof UptimeTestHistoryResult
   */
  createdAt: Date;
  /**
   * The server location the check ran
   * @type {string}
   * @memberof UptimeTestHistoryResult
   */
  location?: string;
  /**
   * Recorded loadtime (ms)
   * @type {number}
   * @memberof UptimeTestHistoryResult
   */
  performance?: number;
  /**
   * Uptime check status code
   * @type {number}
   * @memberof UptimeTestHistoryResult
   */
  statusCode?: number;
}

export function UptimeTestHistoryResultFromJSON(
  json: any,
): UptimeTestHistoryResult {
  return UptimeTestHistoryResultFromJSONTyped(json, false);
}

export function UptimeTestHistoryResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UptimeTestHistoryResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    createdAt: new Date(json['created_at']),
    location: !exists(json, 'location') ? undefined : json['location'],
    performance: !exists(json, 'performance') ? undefined : json['performance'],
    statusCode: !exists(json, 'status_code') ? undefined : json['status_code'],
  };
}

export function UptimeTestHistoryResultToJSON(
  value?: UptimeTestHistoryResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    created_at: value.createdAt.toISOString(),
    location: value.location,
    performance: value.performance,
    status_code: value.statusCode,
  };
}
