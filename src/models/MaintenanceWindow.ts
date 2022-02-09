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
 * API version: 1.0.0-beta.1
 * Contact: support@statuscake.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

import { exists, mapValues } from '../runtime';
import {
  MaintenanceWindowRepeatInterval,
  MaintenanceWindowRepeatIntervalFromJSON,
  MaintenanceWindowRepeatIntervalFromJSONTyped,
  MaintenanceWindowRepeatIntervalToJSON,
} from './MaintenanceWindowRepeatInterval';
import {
  MaintenanceWindowState,
  MaintenanceWindowStateFromJSON,
  MaintenanceWindowStateFromJSONTyped,
  MaintenanceWindowStateToJSON,
} from './MaintenanceWindowState';

/**
 *
 * @export
 * @interface MaintenanceWindow
 */
export interface MaintenanceWindow {
  /**
   * Maintenance window ID
   * @type {string}
   * @memberof MaintenanceWindow
   */
  id: string;
  /**
   * Name of the maintenance window
   * @type {string}
   * @memberof MaintenanceWindow
   */
  name: string;
  /**
   * End of the maintenance window (RFC3339 format)
   * @type {Date}
   * @memberof MaintenanceWindow
   */
  endAt: Date;
  /**
   *
   * @type {MaintenanceWindowRepeatInterval}
   * @memberof MaintenanceWindow
   */
  repeatInterval: MaintenanceWindowRepeatInterval;
  /**
   * Start of the maintenance window (RFC3339 format)
   * @type {Date}
   * @memberof MaintenanceWindow
   */
  startAt: Date;
  /**
   *
   * @type {MaintenanceWindowState}
   * @memberof MaintenanceWindow
   */
  state: MaintenanceWindowState;
  /**
   * List of tags used to include matching uptime checks in this
   * maintenance window
   * @type {Array<string>}
   * @memberof MaintenanceWindow
   */
  tags: Array<string>;
  /**
   * List of uptime check IDs explicitly included in this maintenance
   * window
   * @type {Array<string>}
   * @memberof MaintenanceWindow
   */
  tests: Array<string>;
  /**
   * Standard [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) associated with this maintenance window
   * @type {string}
   * @memberof MaintenanceWindow
   */
  timezone: string;
}

export function MaintenanceWindowFromJSON(json: any): MaintenanceWindow {
  return MaintenanceWindowFromJSONTyped(json, false);
}

export function MaintenanceWindowFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MaintenanceWindow {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    name: json['name'],
    endAt: new Date(json['end_at']),
    repeatInterval: MaintenanceWindowRepeatIntervalFromJSON(
      json['repeat_interval'],
    ),
    startAt: new Date(json['start_at']),
    state: MaintenanceWindowStateFromJSON(json['state']),
    tags: json['tags'],
    tests: json['tests'],
    timezone: json['timezone'],
  };
}

export function MaintenanceWindowToJSON(value?: MaintenanceWindow | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
    end_at: value.endAt.toISOString(),
    repeat_interval: MaintenanceWindowRepeatIntervalToJSON(
      value.repeatInterval,
    ),
    start_at: value.startAt.toISOString(),
    state: MaintenanceWindowStateToJSON(value.state),
    tags: value.tags,
    tests: value.tests,
    timezone: value.timezone,
  };
}