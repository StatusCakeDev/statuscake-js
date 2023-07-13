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

import * as runtime from '../runtime';
import {
  APIError,
  APIErrorFromJSON,
  APIErrorToJSON,
  APIResponse,
  APIResponseFromJSON,
  APIResponseToJSON,
  SSLTestCheckRate,
  SSLTestCheckRateFromJSON,
  SSLTestCheckRateToJSON,
  SSLTestResponse,
  SSLTestResponseFromJSON,
  SSLTestResponseToJSON,
  SSLTests,
  SSLTestsFromJSON,
  SSLTestsToJSON,
} from '../models';

export interface CreateSslTestRequest {
  websiteUrl: string;
  checkRate: SSLTestCheckRate;
  alertAt: Array<number>;
  alertBroken?: boolean;
  alertExpiry?: boolean;
  alertMixed?: boolean;
  alertReminder?: boolean;
  contactGroups?: Array<string>;
  followRedirects?: boolean;
  hostname?: string;
  paused?: boolean;
  userAgent?: string;
}

export interface DeleteSslTestRequest {
  testId: string;
}

export interface GetSslTestRequest {
  testId: string;
}

export interface ListSslTestsRequest {
  page?: number;
  limit?: number;
}

export interface UpdateSslTestRequest {
  testId: string;
  websiteUrl?: string;
  checkRate?: SSLTestCheckRate;
  alertAt?: Array<number>;
  alertBroken?: boolean;
  alertExpiry?: boolean;
  alertMixed?: boolean;
  alertReminder?: boolean;
  contactGroups?: Array<string>;
  followRedirects?: boolean;
  hostname?: string;
  paused?: boolean;
  userAgent?: string;
}

/**
 * SslApi - interface
 *
 * @export
 * @interface SslApiInterface
 */
export interface SslApiInterface {
  /**
   * Creates an SSL check with the given parameters.
   * @summary Create an SSL check
   * @param {string} websiteUrl URL of the server under test. Must begin with https://
   * @param {SSLTestCheckRate} checkRate
   * @param {Array<number>} alertAt List representing when alerts should be sent (days). Must be exactly 3 numerical values
   * @param {boolean} [alertBroken] Whether to enable alerts when SSL certificate issues are found
   * @param {boolean} [alertExpiry] Whether to enable alerts when the SSL certificate is to expire
   * @param {boolean} [alertMixed] Whether to enable alerts when mixed content is found
   * @param {boolean} [alertReminder] Whether to enable alert reminders
   * @param {Array<string>} [contactGroups] List of contact group IDs
   * @param {boolean} [followRedirects] Whether to follow redirects when testing. Disabled by default
   * @param {string} [hostname] Hostname of the server under test
   * @param {boolean} [paused] Whether the check should be run
   * @param {string} [userAgent] Custom user agent string set when testing
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SslApiInterface
   */
  createSslTestRaw(
    requestParameters: CreateSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<APIResponse>>;

  /**
   * Creates an SSL check with the given parameters.
   * Create an SSL check
   */
  createSslTest(
    requestParameters: CreateSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<APIResponse>;

  /**
   * Deletes an SSL check with the given id.
   * @summary Delete an SSL check
   * @param {string} testId Pagespeed check ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SslApiInterface
   */
  deleteSslTestRaw(
    requestParameters: DeleteSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Deletes an SSL check with the given id.
   * Delete an SSL check
   */
  deleteSslTest(
    requestParameters: DeleteSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<void>;

  /**
   * Returns an SSL check with the given id.
   * @summary Retrieve an SSL check
   * @param {string} testId SSL check ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SslApiInterface
   */
  getSslTestRaw(
    requestParameters: GetSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<SSLTestResponse>>;

  /**
   * Returns an SSL check with the given id.
   * Retrieve an SSL check
   */
  getSslTest(
    requestParameters: GetSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<SSLTestResponse>;

  /**
   * Returns a list of SSL checks for an account.
   * @summary Get all SSL checks
   * @param {number} [page] Page of results
   * @param {number} [limit] The number of SSL checks to return per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SslApiInterface
   */
  listSslTestsRaw(
    requestParameters: ListSslTestsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<SSLTests>>;

  /**
   * Returns a list of SSL checks for an account.
   * Get all SSL checks
   */
  listSslTests(
    requestParameters: ListSslTestsRequest,
    initOverrides?: RequestInit,
  ): Promise<SSLTests>;

  /**
   * Updates an SSL check with the given parameters.
   * @summary Update an SSL check
   * @param {string} testId SSL check ID
   * @param {string} [websiteUrl] URL of the server under test. Must begin with https://
   * @param {SSLTestCheckRate} [checkRate]
   * @param {Array<number>} [alertAt] List representing when alerts should be sent (days). Must be exactly 3 numerical values
   * @param {boolean} [alertBroken] Whether to enable alerts when SSL certificate issues are found
   * @param {boolean} [alertExpiry] Whether to enable alerts when the SSL certificate is to expire
   * @param {boolean} [alertMixed] Whether to enable alerts when mixed content is found
   * @param {boolean} [alertReminder] Whether to enable alert reminders
   * @param {Array<string>} [contactGroups] List of contact group IDs
   * @param {boolean} [followRedirects] Whether to follow redirects when testing. Disabled by default
   * @param {string} [hostname] Hostname of the server under test
   * @param {boolean} [paused] Whether the check should be run
   * @param {string} [userAgent] Custom user agent string set when testing
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SslApiInterface
   */
  updateSslTestRaw(
    requestParameters: UpdateSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Updates an SSL check with the given parameters.
   * Update an SSL check
   */
  updateSslTest(
    requestParameters: UpdateSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<void>;
}

/**
 *
 */
export class SslApi extends runtime.BaseAPI implements SslApiInterface {
  /**
   * Creates an SSL check with the given parameters.
   * Create an SSL check
   */
  async createSslTestRaw(
    requestParameters: CreateSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<APIResponse>> {
    if (
      requestParameters.websiteUrl === null ||
      requestParameters.websiteUrl === undefined
    ) {
      throw new runtime.RequiredError(
        'websiteUrl',
        'Required parameter requestParameters.websiteUrl was null or undefined when calling createSslTest.',
      );
    }

    if (
      requestParameters.checkRate === null ||
      requestParameters.checkRate === undefined
    ) {
      throw new runtime.RequiredError(
        'checkRate',
        'Required parameter requestParameters.checkRate was null or undefined when calling createSslTest.',
      );
    }

    if (
      requestParameters.alertAt === null ||
      requestParameters.alertAt === undefined
    ) {
      throw new runtime.RequiredError(
        'alertAt',
        'Required parameter requestParameters.alertAt was null or undefined when calling createSslTest.',
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

    if (requestParameters.websiteUrl !== undefined) {
      formParams.append('website_url', requestParameters.websiteUrl as any);
    }

    if (requestParameters.checkRate !== undefined) {
      formParams.append(
        'check_rate',
        new Blob(
          [JSON.stringify(SSLTestCheckRateToJSON(requestParameters.checkRate))],
          { type: 'application/json' },
        ),
      );
    }

    if (requestParameters.alertAt) {
      formParams.append(
        'alert_at',
        requestParameters.alertAt.join(runtime.COLLECTION_FORMATS['csv']),
      );
    }

    if (requestParameters.alertBroken !== undefined) {
      formParams.append('alert_broken', requestParameters.alertBroken as any);
    }

    if (requestParameters.alertExpiry !== undefined) {
      formParams.append('alert_expiry', requestParameters.alertExpiry as any);
    }

    if (requestParameters.alertMixed !== undefined) {
      formParams.append('alert_mixed', requestParameters.alertMixed as any);
    }

    if (requestParameters.alertReminder !== undefined) {
      formParams.append(
        'alert_reminder',
        requestParameters.alertReminder as any,
      );
    }

    if (requestParameters.contactGroups) {
      formParams.append(
        'contact_groups',
        requestParameters.contactGroups.join(runtime.COLLECTION_FORMATS['csv']),
      );
    }

    if (requestParameters.followRedirects !== undefined) {
      formParams.append(
        'follow_redirects',
        requestParameters.followRedirects as any,
      );
    }

    if (requestParameters.hostname !== undefined) {
      formParams.append('hostname', requestParameters.hostname as any);
    }

    if (requestParameters.paused !== undefined) {
      formParams.append('paused', requestParameters.paused as any);
    }

    if (requestParameters.userAgent !== undefined) {
      formParams.append('user_agent', requestParameters.userAgent as any);
    }

    const response = await this.request(
      {
        path: `/ssl`,
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
   * Creates an SSL check with the given parameters.
   * Create an SSL check
   */
  async createSslTest(
    requestParameters: CreateSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<APIResponse> {
    const response = await this.createSslTestRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Deletes an SSL check with the given id.
   * Delete an SSL check
   */
  async deleteSslTestRaw(
    requestParameters: DeleteSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.testId === null ||
      requestParameters.testId === undefined
    ) {
      throw new runtime.RequiredError(
        'testId',
        'Required parameter requestParameters.testId was null or undefined when calling deleteSslTest.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/ssl/{test_id}`.replace(
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
   * Deletes an SSL check with the given id.
   * Delete an SSL check
   */
  async deleteSslTest(
    requestParameters: DeleteSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.deleteSslTestRaw(requestParameters, initOverrides);
  }

  /**
   * Returns an SSL check with the given id.
   * Retrieve an SSL check
   */
  async getSslTestRaw(
    requestParameters: GetSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<SSLTestResponse>> {
    if (
      requestParameters.testId === null ||
      requestParameters.testId === undefined
    ) {
      throw new runtime.RequiredError(
        'testId',
        'Required parameter requestParameters.testId was null or undefined when calling getSslTest.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/ssl/{test_id}`.replace(
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
      SSLTestResponseFromJSON(jsonValue),
    );
  }

  /**
   * Returns an SSL check with the given id.
   * Retrieve an SSL check
   */
  async getSslTest(
    requestParameters: GetSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<SSLTestResponse> {
    const response = await this.getSslTestRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Returns a list of SSL checks for an account.
   * Get all SSL checks
   */
  async listSslTestsRaw(
    requestParameters: ListSslTestsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<SSLTests>> {
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
        path: `/ssl`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SSLTestsFromJSON(jsonValue),
    );
  }

  /**
   * Returns a list of SSL checks for an account.
   * Get all SSL checks
   */
  async listSslTests(
    requestParameters: ListSslTestsRequest = {},
    initOverrides?: RequestInit,
  ): Promise<SSLTests> {
    const response = await this.listSslTestsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Updates an SSL check with the given parameters.
   * Update an SSL check
   */
  async updateSslTestRaw(
    requestParameters: UpdateSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.testId === null ||
      requestParameters.testId === undefined
    ) {
      throw new runtime.RequiredError(
        'testId',
        'Required parameter requestParameters.testId was null or undefined when calling updateSslTest.',
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

    if (requestParameters.websiteUrl !== undefined) {
      formParams.append('website_url', requestParameters.websiteUrl as any);
    }

    if (requestParameters.checkRate !== undefined) {
      formParams.append(
        'check_rate',
        new Blob(
          [JSON.stringify(SSLTestCheckRateToJSON(requestParameters.checkRate))],
          { type: 'application/json' },
        ),
      );
    }

    if (requestParameters.alertAt) {
      formParams.append(
        'alert_at',
        requestParameters.alertAt.join(runtime.COLLECTION_FORMATS['csv']),
      );
    }

    if (requestParameters.alertBroken !== undefined) {
      formParams.append('alert_broken', requestParameters.alertBroken as any);
    }

    if (requestParameters.alertExpiry !== undefined) {
      formParams.append('alert_expiry', requestParameters.alertExpiry as any);
    }

    if (requestParameters.alertMixed !== undefined) {
      formParams.append('alert_mixed', requestParameters.alertMixed as any);
    }

    if (requestParameters.alertReminder !== undefined) {
      formParams.append(
        'alert_reminder',
        requestParameters.alertReminder as any,
      );
    }

    if (requestParameters.contactGroups) {
      formParams.append(
        'contact_groups',
        requestParameters.contactGroups.join(runtime.COLLECTION_FORMATS['csv']),
      );
    }

    if (requestParameters.followRedirects !== undefined) {
      formParams.append(
        'follow_redirects',
        requestParameters.followRedirects as any,
      );
    }

    if (requestParameters.hostname !== undefined) {
      formParams.append('hostname', requestParameters.hostname as any);
    }

    if (requestParameters.paused !== undefined) {
      formParams.append('paused', requestParameters.paused as any);
    }

    if (requestParameters.userAgent !== undefined) {
      formParams.append('user_agent', requestParameters.userAgent as any);
    }

    const response = await this.request(
      {
        path: `/ssl/{test_id}`.replace(
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
   * Updates an SSL check with the given parameters.
   * Update an SSL check
   */
  async updateSslTest(
    requestParameters: UpdateSslTestRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.updateSslTestRaw(requestParameters, initOverrides);
  }
}
