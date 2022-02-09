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

/**
 * Number of seconds between checks
 * @export
 * @enum {string}
 */
export enum SSLTestCheckRate {
  SSLTestCheckRateFiveMinutes = 300,
  SSLTestCheckRateTenMinutes = 600,
  SSLTestCheckRateThirtyMinutes = 1800,
  SSLTestCheckRateOneHour = 3600,
  SSLTestCheckRateOneDay = 86400,
  SSLTestCheckRateOneWeek = 2073600,
}

export function SSLTestCheckRateFromJSON(json: any): SSLTestCheckRate {
  return SSLTestCheckRateFromJSONTyped(json, false);
}

export function SSLTestCheckRateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SSLTestCheckRate {
  return json as SSLTestCheckRate;
}

export function SSLTestCheckRateToJSON(value?: SSLTestCheckRate | null): any {
  return value as any;
}
