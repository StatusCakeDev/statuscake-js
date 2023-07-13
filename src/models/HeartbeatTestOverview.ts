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
  HeartbeatTestStatus,
  HeartbeatTestStatusFromJSON,
  HeartbeatTestStatusFromJSONTyped,
  HeartbeatTestStatusToJSON,
} from './HeartbeatTestStatus';

/**
 *
 * @export
 * @interface HeartbeatTestOverview
 */
export interface HeartbeatTestOverview {
  /**
   * Heartbeat check ID
   * @type {string}
   * @memberof HeartbeatTestOverview
   */
  id: string;
  /**
   * Name of the check
   * @type {string}
   * @memberof HeartbeatTestOverview
   */
  name: string;
  /**
   * URL of the check
   * @type {string}
   * @memberof HeartbeatTestOverview
   */
  url: string;
  /**
   * Number of seconds since the last ping before the check is considered down
   * @type {number}
   * @memberof HeartbeatTestOverview
   */
  period: number;
  /**
   * List of contact group IDs
   * @type {Array<string>}
   * @memberof HeartbeatTestOverview
   */
  contactGroups: Array<string>;
  /**
   * Whether the check should be run
   * @type {boolean}
   * @memberof HeartbeatTestOverview
   */
  paused: boolean;
  /**
   *
   * @type {HeartbeatTestStatus}
   * @memberof HeartbeatTestOverview
   */
  status: HeartbeatTestStatus;
  /**
   * List of tags
   * @type {Array<string>}
   * @memberof HeartbeatTestOverview
   */
  tags: Array<string>;
  /**
   * Uptime percentage for a check
   * @type {number}
   * @memberof HeartbeatTestOverview
   */
  uptime?: number;
}

export function HeartbeatTestOverviewFromJSON(
  json: any,
): HeartbeatTestOverview {
  return HeartbeatTestOverviewFromJSONTyped(json, false);
}

export function HeartbeatTestOverviewFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): HeartbeatTestOverview {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    name: json['name'],
    url: json['url'],
    period: json['period'],
    contactGroups: json['contact_groups'],
    paused: json['paused'],
    status: HeartbeatTestStatusFromJSON(json['status']),
    tags: json['tags'],
    uptime: !exists(json, 'uptime') ? undefined : json['uptime'],
  };
}

export function HeartbeatTestOverviewToJSON(
  value?: HeartbeatTestOverview | null,
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
    url: value.url,
    period: value.period,
    contact_groups: value.contactGroups,
    paused: value.paused,
    status: HeartbeatTestStatusToJSON(value.status),
    tags: value.tags,
    uptime: value.uptime,
  };
}
