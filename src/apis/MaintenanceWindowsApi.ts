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
 * API version: 1.1.0
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
  MaintenanceWindowRepeatInterval,
  MaintenanceWindowRepeatIntervalFromJSON,
  MaintenanceWindowRepeatIntervalToJSON,
  MaintenanceWindowResponse,
  MaintenanceWindowResponseFromJSON,
  MaintenanceWindowResponseToJSON,
  MaintenanceWindows,
  MaintenanceWindowsFromJSON,
  MaintenanceWindowsToJSON,
} from '../models';

export interface CreateMaintenanceWindowRequest {
  name: string;
  endAt: Date;
  startAt: Date;
  timezone: string;
  repeatInterval?: MaintenanceWindowRepeatInterval;
  tags?: Array<string>;
  tests?: Array<string>;
}

export interface DeleteMaintenanceWindowRequest {
  windowId: string;
}

export interface GetMaintenanceWindowRequest {
  windowId: string;
}

export interface ListMaintenanceWindowsRequest {
  page?: number;
  limit?: number;
  state?: ListMaintenanceWindowsStateEnum;
}

export interface UpdateMaintenanceWindowRequest {
  windowId: string;
  name?: string;
  endAt?: Date;
  repeatInterval?: MaintenanceWindowRepeatInterval;
  startAt?: Date;
  tags?: Array<string>;
  tests?: Array<string>;
  timezone?: string;
}

/**
 * MaintenanceWindowsApi - interface
 *
 * @export
 * @interface MaintenanceWindowsApiInterface
 */
export interface MaintenanceWindowsApiInterface {
  /**
   * Creates a maintenance window with the given parameters.
   * @summary Create a maintenance window
   * @param {string} name Name of the maintenance window
   * @param {Date} endAt End of the maintenance window (RFC3339 format)
   * @param {Date} startAt Start of the maintenance window (RFC3339 format)
   * @param {string} timezone Standard [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) associated with this maintenance window
   * @param {MaintenanceWindowRepeatInterval} [repeatInterval]
   * @param {Array<string>} [tags] List of tags used to include matching uptime checks in this maintenance window. At least one of &#x60;tests&#x60; and &#x60;tags&#x60; must be present in the request
   * @param {Array<string>} [tests] List of uptime check IDs explicitly included in this maintenance window. At least one of &#x60;tests&#x60; and &#x60;tags&#x60; must be present in the request
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MaintenanceWindowsApiInterface
   */
  createMaintenanceWindowRaw(
    requestParameters: CreateMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<APIResponse>>;

  /**
   * Creates a maintenance window with the given parameters.
   * Create a maintenance window
   */
  createMaintenanceWindow(
    requestParameters: CreateMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<APIResponse>;

  /**
   * Deletes a maintenance window with the given id.
   * @summary Delete a maintenance window
   * @param {string} windowId Maintenance window ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MaintenanceWindowsApiInterface
   */
  deleteMaintenanceWindowRaw(
    requestParameters: DeleteMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Deletes a maintenance window with the given id.
   * Delete a maintenance window
   */
  deleteMaintenanceWindow(
    requestParameters: DeleteMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<void>;

  /**
   * Returns a maintenance window with the given id.
   * @summary Retrieve a maintenance window
   * @param {string} windowId Maintenance window ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MaintenanceWindowsApiInterface
   */
  getMaintenanceWindowRaw(
    requestParameters: GetMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<MaintenanceWindowResponse>>;

  /**
   * Returns a maintenance window with the given id.
   * Retrieve a maintenance window
   */
  getMaintenanceWindow(
    requestParameters: GetMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<MaintenanceWindowResponse>;

  /**
   * Returns a list of maintenance windows for an account.
   * @summary Get all maintenance windows
   * @param {number} [page] Page of results
   * @param {number} [limit] The number of maintenance windows to return per page
   * @param {'active' | 'paused' | 'pending'} [state] Maintenance window state
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MaintenanceWindowsApiInterface
   */
  listMaintenanceWindowsRaw(
    requestParameters: ListMaintenanceWindowsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<MaintenanceWindows>>;

  /**
   * Returns a list of maintenance windows for an account.
   * Get all maintenance windows
   */
  listMaintenanceWindows(
    requestParameters: ListMaintenanceWindowsRequest,
    initOverrides?: RequestInit,
  ): Promise<MaintenanceWindows>;

  /**
   * Updates a maintenance window with the given parameters.
   * @summary Update a maintenance window
   * @param {string} windowId Maintenance window ID
   * @param {string} [name] Name of the maintenance window
   * @param {Date} [endAt] End of the maintenance window (RFC3339 format)
   * @param {MaintenanceWindowRepeatInterval} [repeatInterval]
   * @param {Date} [startAt] Start of the maintenance window (RFC3339 format)
   * @param {Array<string>} [tags] List of tags used to include matching uptime checks in this maintenance window
   * @param {Array<string>} [tests] List of uptime check IDs explicitly included in this maintenance window
   * @param {string} [timezone] Standard [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) associated with this maintenance window
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MaintenanceWindowsApiInterface
   */
  updateMaintenanceWindowRaw(
    requestParameters: UpdateMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Updates a maintenance window with the given parameters.
   * Update a maintenance window
   */
  updateMaintenanceWindow(
    requestParameters: UpdateMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<void>;
}

/**
 *
 */
export class MaintenanceWindowsApi
  extends runtime.BaseAPI
  implements MaintenanceWindowsApiInterface
{
  /**
   * Creates a maintenance window with the given parameters.
   * Create a maintenance window
   */
  async createMaintenanceWindowRaw(
    requestParameters: CreateMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<APIResponse>> {
    if (
      requestParameters.name === null ||
      requestParameters.name === undefined
    ) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling createMaintenanceWindow.',
      );
    }

    if (
      requestParameters.endAt === null ||
      requestParameters.endAt === undefined
    ) {
      throw new runtime.RequiredError(
        'endAt',
        'Required parameter requestParameters.endAt was null or undefined when calling createMaintenanceWindow.',
      );
    }

    if (
      requestParameters.startAt === null ||
      requestParameters.startAt === undefined
    ) {
      throw new runtime.RequiredError(
        'startAt',
        'Required parameter requestParameters.startAt was null or undefined when calling createMaintenanceWindow.',
      );
    }

    if (
      requestParameters.timezone === null ||
      requestParameters.timezone === undefined
    ) {
      throw new runtime.RequiredError(
        'timezone',
        'Required parameter requestParameters.timezone was null or undefined when calling createMaintenanceWindow.',
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

    if (requestParameters.endAt !== undefined) {
      formParams.append('end_at', requestParameters.endAt as any);
    }

    if (requestParameters.repeatInterval !== undefined) {
      formParams.append(
        'repeat_interval',
        new Blob(
          [
            JSON.stringify(
              MaintenanceWindowRepeatIntervalToJSON(
                requestParameters.repeatInterval,
              ),
            ),
          ],
          { type: 'application/json' },
        ),
      );
    }

    if (requestParameters.startAt !== undefined) {
      formParams.append('start_at', requestParameters.startAt as any);
    }

    if (requestParameters.tags) {
      formParams.append(
        'tags',
        requestParameters.tags.join(runtime.COLLECTION_FORMATS['csv']),
      );
    }

    if (requestParameters.tests) {
      formParams.append(
        'tests',
        requestParameters.tests.join(runtime.COLLECTION_FORMATS['csv']),
      );
    }

    if (requestParameters.timezone !== undefined) {
      formParams.append('timezone', requestParameters.timezone as any);
    }

    const response = await this.request(
      {
        path: `/maintenance-windows`,
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
   * Creates a maintenance window with the given parameters.
   * Create a maintenance window
   */
  async createMaintenanceWindow(
    requestParameters: CreateMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<APIResponse> {
    const response = await this.createMaintenanceWindowRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Deletes a maintenance window with the given id.
   * Delete a maintenance window
   */
  async deleteMaintenanceWindowRaw(
    requestParameters: DeleteMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.windowId === null ||
      requestParameters.windowId === undefined
    ) {
      throw new runtime.RequiredError(
        'windowId',
        'Required parameter requestParameters.windowId was null or undefined when calling deleteMaintenanceWindow.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/maintenance-windows/{window_id}`.replace(
          `{${'window_id'}}`,
          encodeURIComponent(String(requestParameters.windowId)),
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
   * Deletes a maintenance window with the given id.
   * Delete a maintenance window
   */
  async deleteMaintenanceWindow(
    requestParameters: DeleteMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.deleteMaintenanceWindowRaw(requestParameters, initOverrides);
  }

  /**
   * Returns a maintenance window with the given id.
   * Retrieve a maintenance window
   */
  async getMaintenanceWindowRaw(
    requestParameters: GetMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<MaintenanceWindowResponse>> {
    if (
      requestParameters.windowId === null ||
      requestParameters.windowId === undefined
    ) {
      throw new runtime.RequiredError(
        'windowId',
        'Required parameter requestParameters.windowId was null or undefined when calling getMaintenanceWindow.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/maintenance-windows/{window_id}`.replace(
          `{${'window_id'}}`,
          encodeURIComponent(String(requestParameters.windowId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MaintenanceWindowResponseFromJSON(jsonValue),
    );
  }

  /**
   * Returns a maintenance window with the given id.
   * Retrieve a maintenance window
   */
  async getMaintenanceWindow(
    requestParameters: GetMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<MaintenanceWindowResponse> {
    const response = await this.getMaintenanceWindowRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Returns a list of maintenance windows for an account.
   * Get all maintenance windows
   */
  async listMaintenanceWindowsRaw(
    requestParameters: ListMaintenanceWindowsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<MaintenanceWindows>> {
    const queryParameters: any = {};

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit;
    }

    if (requestParameters.state !== undefined) {
      queryParameters['state'] = requestParameters.state;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/maintenance-windows`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MaintenanceWindowsFromJSON(jsonValue),
    );
  }

  /**
   * Returns a list of maintenance windows for an account.
   * Get all maintenance windows
   */
  async listMaintenanceWindows(
    requestParameters: ListMaintenanceWindowsRequest = {},
    initOverrides?: RequestInit,
  ): Promise<MaintenanceWindows> {
    const response = await this.listMaintenanceWindowsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Updates a maintenance window with the given parameters.
   * Update a maintenance window
   */
  async updateMaintenanceWindowRaw(
    requestParameters: UpdateMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.windowId === null ||
      requestParameters.windowId === undefined
    ) {
      throw new runtime.RequiredError(
        'windowId',
        'Required parameter requestParameters.windowId was null or undefined when calling updateMaintenanceWindow.',
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

    if (requestParameters.endAt !== undefined) {
      formParams.append('end_at', requestParameters.endAt as any);
    }

    if (requestParameters.repeatInterval !== undefined) {
      formParams.append(
        'repeat_interval',
        new Blob(
          [
            JSON.stringify(
              MaintenanceWindowRepeatIntervalToJSON(
                requestParameters.repeatInterval,
              ),
            ),
          ],
          { type: 'application/json' },
        ),
      );
    }

    if (requestParameters.startAt !== undefined) {
      formParams.append('start_at', requestParameters.startAt as any);
    }

    if (requestParameters.tags) {
      formParams.append(
        'tags',
        requestParameters.tags.join(runtime.COLLECTION_FORMATS['csv']),
      );
    }

    if (requestParameters.tests) {
      formParams.append(
        'tests',
        requestParameters.tests.join(runtime.COLLECTION_FORMATS['csv']),
      );
    }

    if (requestParameters.timezone !== undefined) {
      formParams.append('timezone', requestParameters.timezone as any);
    }

    const response = await this.request(
      {
        path: `/maintenance-windows/{window_id}`.replace(
          `{${'window_id'}}`,
          encodeURIComponent(String(requestParameters.windowId)),
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
   * Updates a maintenance window with the given parameters.
   * Update a maintenance window
   */
  async updateMaintenanceWindow(
    requestParameters: UpdateMaintenanceWindowRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.updateMaintenanceWindowRaw(requestParameters, initOverrides);
  }
}

/**
 * @export
 * @enum {string}
 */
export enum ListMaintenanceWindowsStateEnum {
  Active = 'active',
  Paused = 'paused',
  Pending = 'pending',
}
