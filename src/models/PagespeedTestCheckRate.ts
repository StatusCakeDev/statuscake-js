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

/**
 * Number of seconds between checks
 * @export
 * @enum {string}
 */
export enum PagespeedTestCheckRate {
  OneMinute = 60,
  FiveMinutes = 300,
  TenMinutes = 600,
  FifteenMinutes = 900,
  ThirtyMinutes = 1800,
  OneHour = 3600,
  OneDay = 86400,
}

export function PagespeedTestCheckRateFromJSON(
  json: any,
): PagespeedTestCheckRate {
  return PagespeedTestCheckRateFromJSONTyped(json, false);
}

export function PagespeedTestCheckRateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PagespeedTestCheckRate {
  return json as PagespeedTestCheckRate;
}

export function PagespeedTestCheckRateToJSON(
  value?: PagespeedTestCheckRate | null,
): any {
  return value as any;
}
