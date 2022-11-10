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
import {
  MaintenanceWindow,
  MaintenanceWindowFromJSON,
  MaintenanceWindowFromJSONTyped,
  MaintenanceWindowToJSON,
} from './MaintenanceWindow';
import {
  Pagination,
  PaginationFromJSON,
  PaginationFromJSONTyped,
  PaginationToJSON,
} from './Pagination';

/**
 *
 * @export
 * @interface MaintenanceWindows
 */
export interface MaintenanceWindows {
  /**
   * List of maintenance windows
   * @type {Array<MaintenanceWindow>}
   * @memberof MaintenanceWindows
   */
  data: Array<MaintenanceWindow>;
  /**
   *
   * @type {Pagination}
   * @memberof MaintenanceWindows
   */
  metadata: Pagination;
}

export function MaintenanceWindowsFromJSON(json: any): MaintenanceWindows {
  return MaintenanceWindowsFromJSONTyped(json, false);
}

export function MaintenanceWindowsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MaintenanceWindows {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: (json['data'] as Array<any>).map(MaintenanceWindowFromJSON),
    metadata: PaginationFromJSON(json['metadata']),
  };
}

export function MaintenanceWindowsToJSON(
  value?: MaintenanceWindows | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: (value.data as Array<any>).map(MaintenanceWindowToJSON),
    metadata: PaginationToJSON(value.metadata),
  };
}
