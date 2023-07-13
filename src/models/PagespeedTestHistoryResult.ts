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
  PagespeedTestThrottling,
  PagespeedTestThrottlingFromJSON,
  PagespeedTestThrottlingFromJSONTyped,
  PagespeedTestThrottlingToJSON,
} from './PagespeedTestThrottling';

/**
 *
 * @export
 * @interface PagespeedTestHistoryResult
 */
export interface PagespeedTestHistoryResult {
  /**
   * Creation time of the result (RFC3339 format)
   * @type {Date}
   * @memberof PagespeedTestHistoryResult
   */
  createdAt: Date;
  /**
   * Recorded filesize (kb)
   * @type {number}
   * @memberof PagespeedTestHistoryResult
   */
  filesize: number;
  /**
   * Location of the saved HAR file
   * @type {string}
   * @memberof PagespeedTestHistoryResult
   */
  harLocation: string;
  /**
   * Recorded loadtime (ms)
   * @type {number}
   * @memberof PagespeedTestHistoryResult
   */
  loadtime: number;
  /**
   * Recorded request count
   * @type {number}
   * @memberof PagespeedTestHistoryResult
   */
  requests: number;
  /**
   *
   * @type {PagespeedTestThrottling}
   * @memberof PagespeedTestHistoryResult
   */
  throttling: PagespeedTestThrottling;
}

export function PagespeedTestHistoryResultFromJSON(
  json: any,
): PagespeedTestHistoryResult {
  return PagespeedTestHistoryResultFromJSONTyped(json, false);
}

export function PagespeedTestHistoryResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PagespeedTestHistoryResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    createdAt: new Date(json['created_at']),
    filesize: json['filesize'],
    harLocation: json['har_location'],
    loadtime: json['loadtime'],
    requests: json['requests'],
    throttling: PagespeedTestThrottlingFromJSON(json['throttling']),
  };
}

export function PagespeedTestHistoryResultToJSON(
  value?: PagespeedTestHistoryResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    created_at: value.createdAt.toISOString(),
    filesize: value.filesize,
    har_location: value.harLocation,
    loadtime: value.loadtime,
    requests: value.requests,
    throttling: PagespeedTestThrottlingToJSON(value.throttling),
  };
}
