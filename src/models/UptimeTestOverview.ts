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
 * API version: 1.2.0
 * Contact: support@statuscake.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

import { exists, mapValues } from '../runtime';
import {
  UptimeTestCheckRate,
  UptimeTestCheckRateFromJSON,
  UptimeTestCheckRateFromJSONTyped,
  UptimeTestCheckRateToJSON,
} from './UptimeTestCheckRate';
import {
  UptimeTestStatus,
  UptimeTestStatusFromJSON,
  UptimeTestStatusFromJSONTyped,
  UptimeTestStatusToJSON,
} from './UptimeTestStatus';
import {
  UptimeTestType,
  UptimeTestTypeFromJSON,
  UptimeTestTypeFromJSONTyped,
  UptimeTestTypeToJSON,
} from './UptimeTestType';

/**
 *
 * @export
 * @interface UptimeTestOverview
 */
export interface UptimeTestOverview {
  /**
   * Uptime check ID
   * @type {string}
   * @memberof UptimeTestOverview
   */
  id: string;
  /**
   * Name of the check
   * @type {string}
   * @memberof UptimeTestOverview
   */
  name: string;
  /**
   * URL or IP address of the server under test
   * @type {string}
   * @memberof UptimeTestOverview
   */
  websiteUrl: string;
  /**
   *
   * @type {UptimeTestType}
   * @memberof UptimeTestOverview
   */
  testType: UptimeTestType;
  /**
   *
   * @type {UptimeTestCheckRate}
   * @memberof UptimeTestOverview
   */
  checkRate: UptimeTestCheckRate;
  /**
   * List of contact group IDs
   * @type {Array<string>}
   * @memberof UptimeTestOverview
   */
  contactGroups: Array<string>;
  /**
   * Whether the check should be run
   * @type {boolean}
   * @memberof UptimeTestOverview
   */
  paused: boolean;
  /**
   *
   * @type {UptimeTestStatus}
   * @memberof UptimeTestOverview
   */
  status: UptimeTestStatus;
  /**
   * List of tags
   * @type {Array<string>}
   * @memberof UptimeTestOverview
   */
  tags: Array<string>;
  /**
   * Uptime percentage for a check
   * @type {number}
   * @memberof UptimeTestOverview
   */
  uptime?: number;
}

export function UptimeTestOverviewFromJSON(json: any): UptimeTestOverview {
  return UptimeTestOverviewFromJSONTyped(json, false);
}

export function UptimeTestOverviewFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UptimeTestOverview {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    name: json['name'],
    websiteUrl: json['website_url'],
    testType: UptimeTestTypeFromJSON(json['test_type']),
    checkRate: UptimeTestCheckRateFromJSON(json['check_rate']),
    contactGroups: json['contact_groups'],
    paused: json['paused'],
    status: UptimeTestStatusFromJSON(json['status']),
    tags: json['tags'],
    uptime: !exists(json, 'uptime') ? undefined : json['uptime'],
  };
}

export function UptimeTestOverviewToJSON(
  value?: UptimeTestOverview | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
    website_url: value.websiteUrl,
    test_type: UptimeTestTypeToJSON(value.testType),
    check_rate: UptimeTestCheckRateToJSON(value.checkRate),
    contact_groups: value.contactGroups,
    paused: value.paused,
    status: UptimeTestStatusToJSON(value.status),
    tags: value.tags,
    uptime: value.uptime,
  };
}
