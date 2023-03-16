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
  MonitoringLocationStatus,
  MonitoringLocationStatusFromJSON,
  MonitoringLocationStatusFromJSONTyped,
  MonitoringLocationStatusToJSON,
} from './MonitoringLocationStatus';

/**
 *
 * @export
 * @interface MonitoringLocation
 */
export interface MonitoringLocation {
  /**
   * Server description
   * @type {string}
   * @memberof MonitoringLocation
   */
  description: string;
  /**
   * Server IPv4 address
   * @type {string}
   * @memberof MonitoringLocation
   */
  ipv4?: string;
  /**
   * Server IPv6 address
   * @type {string}
   * @memberof MonitoringLocation
   */
  ipv6?: string;
  /**
   * Server region
   * @type {string}
   * @memberof MonitoringLocation
   */
  region: string;
  /**
   * Server region code
   * @type {string}
   * @memberof MonitoringLocation
   */
  regionCode: string;
  /**
   *
   * @type {MonitoringLocationStatus}
   * @memberof MonitoringLocation
   */
  status: MonitoringLocationStatus;
}

export function MonitoringLocationFromJSON(json: any): MonitoringLocation {
  return MonitoringLocationFromJSONTyped(json, false);
}

export function MonitoringLocationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MonitoringLocation {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    description: json['description'],
    ipv4: !exists(json, 'ipv4') ? undefined : json['ipv4'],
    ipv6: !exists(json, 'ipv6') ? undefined : json['ipv6'],
    region: json['region'],
    regionCode: json['region_code'],
    status: MonitoringLocationStatusFromJSON(json['status']),
  };
}

export function MonitoringLocationToJSON(
  value?: MonitoringLocation | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    description: value.description,
    ipv4: value.ipv4,
    ipv6: value.ipv6,
    region: value.region,
    region_code: value.regionCode,
    status: MonitoringLocationStatusToJSON(value.status),
  };
}
