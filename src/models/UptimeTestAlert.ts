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
 * API version: 1.0.0-beta.3
 * Contact: support@statuscake.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

import { exists, mapValues } from '../runtime';
import {
  UptimeTestStatus,
  UptimeTestStatusFromJSON,
  UptimeTestStatusFromJSONTyped,
  UptimeTestStatusToJSON,
} from './UptimeTestStatus';

/**
 *
 * @export
 * @interface UptimeTestAlert
 */
export interface UptimeTestAlert {
  /**
   * Uptime check ID
   * @type {string}
   * @memberof UptimeTestAlert
   */
  id: string;
  /**
   *
   * @type {UptimeTestStatus}
   * @memberof UptimeTestAlert
   */
  status: UptimeTestStatus;
  /**
   * Uptime check status code
   * @type {number}
   * @memberof UptimeTestAlert
   */
  statusCode: number;
  /**
   * When the alert was triggered (RFC3339 format)
   * @type {Date}
   * @memberof UptimeTestAlert
   */
  triggeredAt?: Date;
}

export function UptimeTestAlertFromJSON(json: any): UptimeTestAlert {
  return UptimeTestAlertFromJSONTyped(json, false);
}

export function UptimeTestAlertFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UptimeTestAlert {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    status: UptimeTestStatusFromJSON(json['status']),
    statusCode: json['status_code'],
    triggeredAt: !exists(json, 'triggered_at')
      ? undefined
      : new Date(json['triggered_at']),
  };
}

export function UptimeTestAlertToJSON(value?: UptimeTestAlert | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    status: UptimeTestStatusToJSON(value.status),
    status_code: value.statusCode,
    triggered_at:
      value.triggeredAt === undefined
        ? undefined
        : value.triggeredAt.toISOString(),
  };
}
