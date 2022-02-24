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
/**
 *
 * @export
 * @interface Metadata
 */
export interface Metadata {
  /**
   * The current page of results
   * @type {number}
   * @memberof Metadata
   */
  page: number;
  /**
   * The number of results per page
   * @type {number}
   * @memberof Metadata
   */
  perPage: number;
  /**
   * The total number of pages
   * @type {number}
   * @memberof Metadata
   */
  pageCount: number;
  /**
   * The total number of results
   * @type {number}
   * @memberof Metadata
   */
  totalCount: number;
}

export function MetadataFromJSON(json: any): Metadata {
  return MetadataFromJSONTyped(json, false);
}

export function MetadataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Metadata {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    page: json['page'],
    perPage: json['per_page'],
    pageCount: json['page_count'],
    totalCount: json['total_count'],
  };
}

export function MetadataToJSON(value?: Metadata | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    page: value.page,
    per_page: value.perPage,
    page_count: value.pageCount,
    total_count: value.totalCount,
  };
}
