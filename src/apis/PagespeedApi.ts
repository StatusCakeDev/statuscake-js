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
 * API version: 1.0.0
 * Contact: support@statuscake.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

import * as runtime from '../runtime';
import {
  APIError,
  APIErrorFromJSON,
  APIErrorToJSON,
  APIResponse,
  APIResponseFromJSON,
  APIResponseToJSON,
  PagespeedTestCheckRate,
  PagespeedTestCheckRateFromJSON,
  PagespeedTestCheckRateToJSON,
  PagespeedTestHistory,
  PagespeedTestHistoryFromJSON,
  PagespeedTestHistoryToJSON,
  PagespeedTestRegion,
  PagespeedTestRegionFromJSON,
  PagespeedTestRegionToJSON,
  PagespeedTestResponse,
  PagespeedTestResponseFromJSON,
  PagespeedTestResponseToJSON,
  PagespeedTests,
  PagespeedTestsFromJSON,
  PagespeedTestsToJSON,
} from '../models';

export interface CreatePagespeedTestRequest {
  name: string;
  websiteUrl: string;
  checkRate: PagespeedTestCheckRate;
  region: PagespeedTestRegion;
  alertBigger?: number;
  alertSlower?: number;
  alertSmaller?: number;
  contactGroups?: Array<string>;
  paused?: boolean;
}

export interface DeletePagespeedTestRequest {
  testId: string;
}

export interface GetPagespeedTestRequest {
  testId: string;
}

export interface ListPagespeedTestHistoryRequest {
  testId: string;
  limit?: number;
  before?: number;
}

export interface ListPagespeedTestsRequest {
  page?: number;
  limit?: number;
}

export interface UpdatePagespeedTestRequest {
  testId: string;
  name?: string;
  checkRate?: PagespeedTestCheckRate;
  alertBigger?: number;
  alertSlower?: number;
  alertSmaller?: number;
  contactGroups?: Array<string>;
  paused?: boolean;
  region?: PagespeedTestRegion;
}

/**
 * PagespeedApi - interface
 *
 * @export
 * @interface PagespeedApiInterface
 */
export interface PagespeedApiInterface {
  /**
   * Creates a pagespeed check with the given parameters.
   * @summary Create a pagespeed check
   * @param {string} name Name of the check
   * @param {string} websiteUrl URL, FQDN, or IP address of the website under test
   * @param {PagespeedTestCheckRate} checkRate
   * @param {PagespeedTestRegion} region
   * @param {number} [alertBigger] An alert will be sent if the size of the page is larger than this value (kb). A value of 0 prevents alerts being sent.
   * @param {number} [alertSlower] An alert will be sent if the load time of the page exceeds this value (ms). A value of 0 prevents alerts being sent
   * @param {number} [alertSmaller] An alert will be sent if the size of the page is smaller than this value (kb). A value of 0 prevents alerts being sent
   * @param {Array<string>} [contactGroups] List of contact group IDs
   * @param {boolean} [paused] Whether the check should be run
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PagespeedApiInterface
   */
  createPagespeedTestRaw(
    requestParameters: CreatePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<APIResponse>>;

  /**
   * Creates a pagespeed check with the given parameters.
   * Create a pagespeed check
   */
  createPagespeedTest(
    requestParameters: CreatePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<APIResponse>;

  /**
   * Deletes a pagespeed check with the given id.
   * @summary Delete a pagespeed check
   * @param {string} testId Pagespeed check ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PagespeedApiInterface
   */
  deletePagespeedTestRaw(
    requestParameters: DeletePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Deletes a pagespeed check with the given id.
   * Delete a pagespeed check
   */
  deletePagespeedTest(
    requestParameters: DeletePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<void>;

  /**
   * Returns a pagespeed check with the given id.
   * @summary Retrieve a pagespeed check
   * @param {string} testId Pagespeed check ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PagespeedApiInterface
   */
  getPagespeedTestRaw(
    requestParameters: GetPagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<PagespeedTestResponse>>;

  /**
   * Returns a pagespeed check with the given id.
   * Retrieve a pagespeed check
   */
  getPagespeedTest(
    requestParameters: GetPagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<PagespeedTestResponse>;

  /**
   * Returns a list of pagespeed check history results for a given id, detailing the runs performed on the StatusCake testing infrastruture.  The returned results are a paginated series. Alongside the response data is a `links` object referencing the current response document, `self`, and the next page in the series, `next`.  Aggregated data over the specified duration is returned in the root level `metadata` field.
   * @summary Get all pagespeed check history
   * @param {string} testId Pagespeed check ID
   * @param {number} [limit] The number of results to return from the series
   * @param {number} [before] Only results created before this UNIX timestamp will be returned
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PagespeedApiInterface
   */
  listPagespeedTestHistoryRaw(
    requestParameters: ListPagespeedTestHistoryRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<PagespeedTestHistory>>;

  /**
   * Returns a list of pagespeed check history results for a given id, detailing the runs performed on the StatusCake testing infrastruture.  The returned results are a paginated series. Alongside the response data is a `links` object referencing the current response document, `self`, and the next page in the series, `next`.  Aggregated data over the specified duration is returned in the root level `metadata` field.
   * Get all pagespeed check history
   */
  listPagespeedTestHistory(
    requestParameters: ListPagespeedTestHistoryRequest,
    initOverrides?: RequestInit,
  ): Promise<PagespeedTestHistory>;

  /**
   * Returns a list of pagespeed checks for an account.
   * @summary Get all pagespeed checks
   * @param {number} [page] Page of results
   * @param {number} [limit] The number of pagespeed checks to return per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PagespeedApiInterface
   */
  listPagespeedTestsRaw(
    requestParameters: ListPagespeedTestsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<PagespeedTests>>;

  /**
   * Returns a list of pagespeed checks for an account.
   * Get all pagespeed checks
   */
  listPagespeedTests(
    requestParameters: ListPagespeedTestsRequest,
    initOverrides?: RequestInit,
  ): Promise<PagespeedTests>;

  /**
   * Updates a pagespeed check with the given parameters.
   * @summary Update a pagespeed check
   * @param {string} testId Pagespeed check ID
   * @param {string} [name] Name of the check
   * @param {PagespeedTestCheckRate} [checkRate]
   * @param {number} [alertBigger] An alert will be sent if the size of the page is larger than this value (kb). A value of 0 prevents alerts being sent.
   * @param {number} [alertSlower] An alert will be sent if the load time of the page exceeds this value (ms). A value of 0 prevents alerts being sent
   * @param {number} [alertSmaller] An alert will be sent if the size of the page is smaller than this value (kb). A value of 0 prevents alerts being sent
   * @param {Array<string>} [contactGroups] List of contact group IDs
   * @param {boolean} [paused] Whether the check should be run
   * @param {PagespeedTestRegion} [region]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PagespeedApiInterface
   */
  updatePagespeedTestRaw(
    requestParameters: UpdatePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Updates a pagespeed check with the given parameters.
   * Update a pagespeed check
   */
  updatePagespeedTest(
    requestParameters: UpdatePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<void>;
}

/**
 *
 */
export class PagespeedApi
  extends runtime.BaseAPI
  implements PagespeedApiInterface
{
  /**
   * Creates a pagespeed check with the given parameters.
   * Create a pagespeed check
   */
  async createPagespeedTestRaw(
    requestParameters: CreatePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<APIResponse>> {
    if (
      requestParameters.name === null ||
      requestParameters.name === undefined
    ) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling createPagespeedTest.',
      );
    }

    if (
      requestParameters.websiteUrl === null ||
      requestParameters.websiteUrl === undefined
    ) {
      throw new runtime.RequiredError(
        'websiteUrl',
        'Required parameter requestParameters.websiteUrl was null or undefined when calling createPagespeedTest.',
      );
    }

    if (
      requestParameters.checkRate === null ||
      requestParameters.checkRate === undefined
    ) {
      throw new runtime.RequiredError(
        'checkRate',
        'Required parameter requestParameters.checkRate was null or undefined when calling createPagespeedTest.',
      );
    }

    if (
      requestParameters.region === null ||
      requestParameters.region === undefined
    ) {
      throw new runtime.RequiredError(
        'region',
        'Required parameter requestParameters.region was null or undefined when calling createPagespeedTest.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const consumes: runtime.Consume[] = [
      { contentType: 'application/x-www-form-urlencoded' },
    ];
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): any };
    let useForm = false;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new URLSearchParams();
    }

    if (requestParameters.name !== undefined) {
      formParams.append('name', requestParameters.name as any);
    }

    if (requestParameters.websiteUrl !== undefined) {
      formParams.append('website_url', requestParameters.websiteUrl as any);
    }

    if (requestParameters.checkRate !== undefined) {
      formParams.append(
        'check_rate',
        new Blob(
          [
            JSON.stringify(
              PagespeedTestCheckRateToJSON(requestParameters.checkRate),
            ),
          ],
          { type: 'application/json' },
        ),
      );
    }

    if (requestParameters.alertBigger !== undefined) {
      formParams.append('alert_bigger', requestParameters.alertBigger as any);
    }

    if (requestParameters.alertSlower !== undefined) {
      formParams.append('alert_slower', requestParameters.alertSlower as any);
    }

    if (requestParameters.alertSmaller !== undefined) {
      formParams.append('alert_smaller', requestParameters.alertSmaller as any);
    }

    if (requestParameters.contactGroups) {
      formParams.append(
        'contact_groups',
        requestParameters.contactGroups.join(runtime.COLLECTION_FORMATS['csv']),
      );
    }

    if (requestParameters.paused !== undefined) {
      formParams.append('paused', requestParameters.paused as any);
    }

    if (requestParameters.region !== undefined) {
      formParams.append(
        'region',
        new Blob(
          [JSON.stringify(PagespeedTestRegionToJSON(requestParameters.region))],
          { type: 'application/json' },
        ),
      );
    }

    const response = await this.request(
      {
        path: `/pagespeed`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: formParams,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      APIResponseFromJSON(jsonValue),
    );
  }

  /**
   * Creates a pagespeed check with the given parameters.
   * Create a pagespeed check
   */
  async createPagespeedTest(
    requestParameters: CreatePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<APIResponse> {
    const response = await this.createPagespeedTestRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Deletes a pagespeed check with the given id.
   * Delete a pagespeed check
   */
  async deletePagespeedTestRaw(
    requestParameters: DeletePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.testId === null ||
      requestParameters.testId === undefined
    ) {
      throw new runtime.RequiredError(
        'testId',
        'Required parameter requestParameters.testId was null or undefined when calling deletePagespeedTest.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/pagespeed/{test_id}`.replace(
          `{${'test_id'}}`,
          encodeURIComponent(String(requestParameters.testId)),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Deletes a pagespeed check with the given id.
   * Delete a pagespeed check
   */
  async deletePagespeedTest(
    requestParameters: DeletePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.deletePagespeedTestRaw(requestParameters, initOverrides);
  }

  /**
   * Returns a pagespeed check with the given id.
   * Retrieve a pagespeed check
   */
  async getPagespeedTestRaw(
    requestParameters: GetPagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<PagespeedTestResponse>> {
    if (
      requestParameters.testId === null ||
      requestParameters.testId === undefined
    ) {
      throw new runtime.RequiredError(
        'testId',
        'Required parameter requestParameters.testId was null or undefined when calling getPagespeedTest.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/pagespeed/{test_id}`.replace(
          `{${'test_id'}}`,
          encodeURIComponent(String(requestParameters.testId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PagespeedTestResponseFromJSON(jsonValue),
    );
  }

  /**
   * Returns a pagespeed check with the given id.
   * Retrieve a pagespeed check
   */
  async getPagespeedTest(
    requestParameters: GetPagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<PagespeedTestResponse> {
    const response = await this.getPagespeedTestRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Returns a list of pagespeed check history results for a given id, detailing the runs performed on the StatusCake testing infrastruture.  The returned results are a paginated series. Alongside the response data is a `links` object referencing the current response document, `self`, and the next page in the series, `next`.  Aggregated data over the specified duration is returned in the root level `metadata` field.
   * Get all pagespeed check history
   */
  async listPagespeedTestHistoryRaw(
    requestParameters: ListPagespeedTestHistoryRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<PagespeedTestHistory>> {
    if (
      requestParameters.testId === null ||
      requestParameters.testId === undefined
    ) {
      throw new runtime.RequiredError(
        'testId',
        'Required parameter requestParameters.testId was null or undefined when calling listPagespeedTestHistory.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit;
    }

    if (requestParameters.before !== undefined) {
      queryParameters['before'] = requestParameters.before;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/pagespeed/{test_id}/history`.replace(
          `{${'test_id'}}`,
          encodeURIComponent(String(requestParameters.testId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PagespeedTestHistoryFromJSON(jsonValue),
    );
  }

  /**
   * Returns a list of pagespeed check history results for a given id, detailing the runs performed on the StatusCake testing infrastruture.  The returned results are a paginated series. Alongside the response data is a `links` object referencing the current response document, `self`, and the next page in the series, `next`.  Aggregated data over the specified duration is returned in the root level `metadata` field.
   * Get all pagespeed check history
   */
  async listPagespeedTestHistory(
    requestParameters: ListPagespeedTestHistoryRequest,
    initOverrides?: RequestInit,
  ): Promise<PagespeedTestHistory> {
    const response = await this.listPagespeedTestHistoryRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Returns a list of pagespeed checks for an account.
   * Get all pagespeed checks
   */
  async listPagespeedTestsRaw(
    requestParameters: ListPagespeedTestsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<PagespeedTests>> {
    const queryParameters: any = {};

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/pagespeed`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PagespeedTestsFromJSON(jsonValue),
    );
  }

  /**
   * Returns a list of pagespeed checks for an account.
   * Get all pagespeed checks
   */
  async listPagespeedTests(
    requestParameters: ListPagespeedTestsRequest = {},
    initOverrides?: RequestInit,
  ): Promise<PagespeedTests> {
    const response = await this.listPagespeedTestsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Updates a pagespeed check with the given parameters.
   * Update a pagespeed check
   */
  async updatePagespeedTestRaw(
    requestParameters: UpdatePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.testId === null ||
      requestParameters.testId === undefined
    ) {
      throw new runtime.RequiredError(
        'testId',
        'Required parameter requestParameters.testId was null or undefined when calling updatePagespeedTest.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const consumes: runtime.Consume[] = [
      { contentType: 'application/x-www-form-urlencoded' },
    ];
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): any };
    let useForm = false;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new URLSearchParams();
    }

    if (requestParameters.name !== undefined) {
      formParams.append('name', requestParameters.name as any);
    }

    if (requestParameters.checkRate !== undefined) {
      formParams.append(
        'check_rate',
        new Blob(
          [
            JSON.stringify(
              PagespeedTestCheckRateToJSON(requestParameters.checkRate),
            ),
          ],
          { type: 'application/json' },
        ),
      );
    }

    if (requestParameters.alertBigger !== undefined) {
      formParams.append('alert_bigger', requestParameters.alertBigger as any);
    }

    if (requestParameters.alertSlower !== undefined) {
      formParams.append('alert_slower', requestParameters.alertSlower as any);
    }

    if (requestParameters.alertSmaller !== undefined) {
      formParams.append('alert_smaller', requestParameters.alertSmaller as any);
    }

    if (requestParameters.contactGroups) {
      formParams.append(
        'contact_groups',
        requestParameters.contactGroups.join(runtime.COLLECTION_FORMATS['csv']),
      );
    }

    if (requestParameters.paused !== undefined) {
      formParams.append('paused', requestParameters.paused as any);
    }

    if (requestParameters.region !== undefined) {
      formParams.append(
        'region',
        new Blob(
          [JSON.stringify(PagespeedTestRegionToJSON(requestParameters.region))],
          { type: 'application/json' },
        ),
      );
    }

    const response = await this.request(
      {
        path: `/pagespeed/{test_id}`.replace(
          `{${'test_id'}}`,
          encodeURIComponent(String(requestParameters.testId)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: formParams,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Updates a pagespeed check with the given parameters.
   * Update a pagespeed check
   */
  async updatePagespeedTest(
    requestParameters: UpdatePagespeedTestRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.updatePagespeedTestRaw(requestParameters, initOverrides);
  }
}
