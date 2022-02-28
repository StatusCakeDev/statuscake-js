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
 * API version: 1.0.0-beta.2
 * Contact: support@statuscake.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

import { exists, mapValues } from '../runtime';
import {
  MaintenanceWindow,
  MaintenanceWindowFromJSON,
  MaintenanceWindowFromJSONTyped,
  MaintenanceWindowToJSON,
} from './MaintenanceWindow';

/**
 *
 * @export
 * @interface MaintenanceWindowResponse
 */
export interface MaintenanceWindowResponse {
  /**
   *
   * @type {MaintenanceWindow}
   * @memberof MaintenanceWindowResponse
   */
  data: MaintenanceWindow;
}

export function MaintenanceWindowResponseFromJSON(
  json: any,
): MaintenanceWindowResponse {
  return MaintenanceWindowResponseFromJSONTyped(json, false);
}

export function MaintenanceWindowResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MaintenanceWindowResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: MaintenanceWindowFromJSON(json['data']),
  };
}

export function MaintenanceWindowResponseToJSON(
  value?: MaintenanceWindowResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: MaintenanceWindowToJSON(value.data),
  };
}
