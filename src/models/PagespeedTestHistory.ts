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
import { Links, LinksFromJSON, LinksFromJSONTyped, LinksToJSON } from './Links';
import {
  PagespeedTestHistoryResult,
  PagespeedTestHistoryResultFromJSON,
  PagespeedTestHistoryResultFromJSONTyped,
  PagespeedTestHistoryResultToJSON,
} from './PagespeedTestHistoryResult';

/**
 *
 * @export
 * @interface PagespeedTestHistory
 */
export interface PagespeedTestHistory {
  /**
   * List of pagespeed check history results
   * @type {Array<PagespeedTestHistoryResult>}
   * @memberof PagespeedTestHistory
   */
  data: Array<PagespeedTestHistoryResult>;
  /**
   *
   * @type {Links}
   * @memberof PagespeedTestHistory
   */
  links: Links;
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof PagespeedTestHistory
   */
  metadata?: { [key: string]: object };
}

export function PagespeedTestHistoryFromJSON(json: any): PagespeedTestHistory {
  return PagespeedTestHistoryFromJSONTyped(json, false);
}

export function PagespeedTestHistoryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PagespeedTestHistory {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: (json['data'] as Array<any>).map(PagespeedTestHistoryResultFromJSON),
    links: LinksFromJSON(json['links']),
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
  };
}

export function PagespeedTestHistoryToJSON(
  value?: PagespeedTestHistory | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: (value.data as Array<any>).map(PagespeedTestHistoryResultToJSON),
    links: LinksToJSON(value.links),
    metadata: value.metadata,
  };
}
