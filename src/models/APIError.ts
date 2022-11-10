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
/**
 *
 * @export
 * @interface APIError
 */
export interface APIError {
  /**
   * Additional message
   * @type {string}
   * @memberof APIError
   */
  message?: string;
  /**
   * List of error messages
   * @type {{ [key: string]: Array<string>; }}
   * @memberof APIError
   */
  errors?: { [key: string]: Array<string> };
}

export function APIErrorFromJSON(json: any): APIError {
  return APIErrorFromJSONTyped(json, false);
}

export function APIErrorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): APIError {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    message: !exists(json, 'message') ? undefined : json['message'],
    errors: !exists(json, 'errors') ? undefined : json['errors'],
  };
}

export function APIErrorToJSON(value?: APIError | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    message: value.message,
    errors: value.errors,
  };
}
