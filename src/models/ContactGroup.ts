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
 * @interface ContactGroup
 */
export interface ContactGroup {
  /**
   * Contact group ID
   * @type {string}
   * @memberof ContactGroup
   */
  id: string;
  /**
   * Name of the contact group
   * @type {string}
   * @memberof ContactGroup
   */
  name: string;
  /**
   * List of email addresses
   * @type {Array<string>}
   * @memberof ContactGroup
   */
  emailAddresses: Array<string>;
  /**
   * List of configured integration IDs
   * @type {Array<string>}
   * @memberof ContactGroup
   */
  integrations: Array<string>;
  /**
   * List of international format mobile phone numbers
   * @type {Array<string>}
   * @memberof ContactGroup
   */
  mobileNumbers: Array<string>;
  /**
   * URL or IP address of an endpoint to push uptime events. Currently
   * this only supports HTTP GET endpoints
   * @type {string}
   * @memberof ContactGroup
   */
  pingUrl?: string;
}

export function ContactGroupFromJSON(json: any): ContactGroup {
  return ContactGroupFromJSONTyped(json, false);
}

export function ContactGroupFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ContactGroup {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    name: json['name'],
    emailAddresses: json['email_addresses'],
    integrations: json['integrations'],
    mobileNumbers: json['mobile_numbers'],
    pingUrl: !exists(json, 'ping_url') ? undefined : json['ping_url'],
  };
}

export function ContactGroupToJSON(value?: ContactGroup | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
    email_addresses: value.emailAddresses,
    integrations: value.integrations,
    mobile_numbers: value.mobileNumbers,
    ping_url: value.pingUrl,
  };
}
