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
import {
  MonitoringLocation,
  MonitoringLocationFromJSON,
  MonitoringLocationFromJSONTyped,
  MonitoringLocationToJSON,
} from './MonitoringLocation';
import {
  UptimeTestCheckRate,
  UptimeTestCheckRateFromJSON,
  UptimeTestCheckRateFromJSONTyped,
  UptimeTestCheckRateToJSON,
} from './UptimeTestCheckRate';
import {
  UptimeTestProcessingState,
  UptimeTestProcessingStateFromJSON,
  UptimeTestProcessingStateFromJSONTyped,
  UptimeTestProcessingStateToJSON,
} from './UptimeTestProcessingState';
import {
  UptimeTestStatus,
  UptimeTestStatusFromJSON,
  UptimeTestStatusFromJSONTyped,
  UptimeTestStatusToJSON,
} from './UptimeTestStatus';
import {
  UptimeTestType,
  UptimeTestTypeFromJSON,
  UptimeTestTypeFromJSONTyped,
  UptimeTestTypeToJSON,
} from './UptimeTestType';

/**
 *
 * @export
 * @interface UptimeTest
 */
export interface UptimeTest {
  /**
   * Uptime check ID
   * @type {string}
   * @memberof UptimeTest
   */
  id: string;
  /**
   * Name of the check
   * @type {string}
   * @memberof UptimeTest
   */
  name: string;
  /**
   *
   * @type {UptimeTestType}
   * @memberof UptimeTest
   */
  testType: UptimeTestType;
  /**
   * URL, FQDN, or IP address of the server under test
   * @type {string}
   * @memberof UptimeTest
   */
  websiteUrl: string;
  /**
   *
   * @type {UptimeTestCheckRate}
   * @memberof UptimeTest
   */
  checkRate: UptimeTestCheckRate;
  /**
   * Number of confirmation servers to confirm downtime before an alert is
   * triggered
   * @type {number}
   * @memberof UptimeTest
   */
  confirmation: number;
  /**
   * List of contact group IDs
   * @type {Array<string>}
   * @memberof UptimeTest
   */
  contactGroups: Array<string>;
  /**
   * JSON object. Represents headers to be sent when making requests
   * @type {string}
   * @memberof UptimeTest
   */
  customHeader?: string;
  /**
   * List of IP addresses to compare against returned DNS records
   * @type {Array<string>}
   * @memberof UptimeTest
   */
  dnsIps: Array<string>;
  /**
   * FQDN or IP address of the nameserver to query
   * @type {string}
   * @memberof UptimeTest
   */
  dnsServer?: string;
  /**
   * Whether to consider the check as down if the content is present
   * within the response
   * @type {boolean}
   * @memberof UptimeTest
   */
  doNotFind: boolean;
  /**
   * Whether to send an alert if the SSL certificate is soon to expire
   * @type {boolean}
   * @memberof UptimeTest
   */
  enableSslAlert: boolean;
  /**
   * Specify where the redirect chain should end
   * @type {string}
   * @memberof UptimeTest
   */
  finalEndpoint?: string;
  /**
   * String to look for within the response. Considered down if not found
   * @type {string}
   * @memberof UptimeTest
   */
  findString?: string;
  /**
   * Whether to follow redirects when testing. Disabled by default
   * @type {boolean}
   * @memberof UptimeTest
   */
  followRedirects: boolean;
  /**
   * Include header content in string match search
   * @type {boolean}
   * @memberof UptimeTest
   */
  includeHeader: boolean;
  /**
   * Name of the hosting provider
   * @type {string}
   * @memberof UptimeTest
   */
  host?: string;
  /**
   * When the check was last run (RFC3339 format)
   * @type {Date}
   * @memberof UptimeTest
   */
  lastTestedAt?: Date;
  /**
   * The server location the check will run next
   * @type {string}
   * @memberof UptimeTest
   */
  nextLocation?: string;
  /**
   * Whether the check should be run
   * @type {boolean}
   * @memberof UptimeTest
   */
  paused: boolean;
  /**
   * Destination port for TCP checks
   * @type {number}
   * @memberof UptimeTest
   */
  port?: number;
  /**
   * JSON object. Payload submitted with the request. Setting this updates the check to use the HTTP POST verb
   * @type {string}
   * @memberof UptimeTest
   */
  postBody?: string;
  /**
   * Raw HTTP POST string to send to the server
   * @type {string}
   * @memberof UptimeTest
   */
  postRaw?: string;
  /**
   * Whether the check is currently being processed
   * @type {boolean}
   * @memberof UptimeTest
   */
  processing: boolean;
  /**
   * The server location the check is currently being run
   * @type {string}
   * @memberof UptimeTest
   */
  processingOn?: string;
  /**
   *
   * @type {UptimeTestProcessingState}
   * @memberof UptimeTest
   */
  processingState?: UptimeTestProcessingState;
  /**
   * List of assigned monitoring locations on which to run checks
   * @type {Array<MonitoringLocation>}
   * @memberof UptimeTest
   */
  servers: Array<MonitoringLocation>;
  /**
   *
   * @type {UptimeTestStatus}
   * @memberof UptimeTest
   */
  status: UptimeTestStatus;
  /**
   * List of status codes that trigger an alert
   * @type {Array<string>}
   * @memberof UptimeTest
   */
  statusCodes: Array<string>;
  /**
   * List of tags
   * @type {Array<string>}
   * @memberof UptimeTest
   */
  tags: Array<string>;
  /**
   * The number of seconds to wait to receive the first byte
   * @type {number}
   * @memberof UptimeTest
   */
  timeout: number;
  /**
   * The number of minutes to wait before sending an alert
   * @type {number}
   * @memberof UptimeTest
   */
  triggerRate: number;
  /**
   * Uptime percentage for a check
   * @type {number}
   * @memberof UptimeTest
   */
  uptime: number;
  /**
   * Whether to enable cookie storage
   * @type {boolean}
   * @memberof UptimeTest
   */
  useJar: boolean;
  /**
   * Custom user agent string set when testing
   * @type {string}
   * @memberof UptimeTest
   */
  userAgent?: string;
}

export function UptimeTestFromJSON(json: any): UptimeTest {
  return UptimeTestFromJSONTyped(json, false);
}

export function UptimeTestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UptimeTest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    name: json['name'],
    testType: UptimeTestTypeFromJSON(json['test_type']),
    websiteUrl: json['website_url'],
    checkRate: UptimeTestCheckRateFromJSON(json['check_rate']),
    confirmation: json['confirmation'],
    contactGroups: json['contact_groups'],
    customHeader: !exists(json, 'custom_header')
      ? undefined
      : json['custom_header'],
    dnsIps: json['dns_ips'],
    dnsServer: !exists(json, 'dns_server') ? undefined : json['dns_server'],
    doNotFind: json['do_not_find'],
    enableSslAlert: json['enable_ssl_alert'],
    finalEndpoint: !exists(json, 'final_endpoint')
      ? undefined
      : json['final_endpoint'],
    findString: !exists(json, 'find_string') ? undefined : json['find_string'],
    followRedirects: json['follow_redirects'],
    includeHeader: json['include_header'],
    host: !exists(json, 'host') ? undefined : json['host'],
    lastTestedAt: !exists(json, 'last_tested_at')
      ? undefined
      : new Date(json['last_tested_at']),
    nextLocation: !exists(json, 'next_location')
      ? undefined
      : json['next_location'],
    paused: json['paused'],
    port: !exists(json, 'port') ? undefined : json['port'],
    postBody: !exists(json, 'post_body') ? undefined : json['post_body'],
    postRaw: !exists(json, 'post_raw') ? undefined : json['post_raw'],
    processing: json['processing'],
    processingOn: !exists(json, 'processing_on')
      ? undefined
      : json['processing_on'],
    processingState: !exists(json, 'processing_state')
      ? undefined
      : UptimeTestProcessingStateFromJSON(json['processing_state']),
    servers: (json['servers'] as Array<any>).map(MonitoringLocationFromJSON),
    status: UptimeTestStatusFromJSON(json['status']),
    statusCodes: json['status_codes'],
    tags: json['tags'],
    timeout: json['timeout'],
    triggerRate: json['trigger_rate'],
    uptime: json['uptime'],
    useJar: json['use_jar'],
    userAgent: !exists(json, 'user_agent') ? undefined : json['user_agent'],
  };
}

export function UptimeTestToJSON(value?: UptimeTest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
    test_type: UptimeTestTypeToJSON(value.testType),
    website_url: value.websiteUrl,
    check_rate: UptimeTestCheckRateToJSON(value.checkRate),
    confirmation: value.confirmation,
    contact_groups: value.contactGroups,
    custom_header: value.customHeader,
    dns_ips: value.dnsIps,
    dns_server: value.dnsServer,
    do_not_find: value.doNotFind,
    enable_ssl_alert: value.enableSslAlert,
    final_endpoint: value.finalEndpoint,
    find_string: value.findString,
    follow_redirects: value.followRedirects,
    include_header: value.includeHeader,
    host: value.host,
    last_tested_at:
      value.lastTestedAt === undefined
        ? undefined
        : value.lastTestedAt.toISOString(),
    next_location: value.nextLocation,
    paused: value.paused,
    port: value.port,
    post_body: value.postBody,
    post_raw: value.postRaw,
    processing: value.processing,
    processing_on: value.processingOn,
    processing_state: UptimeTestProcessingStateToJSON(value.processingState),
    servers: (value.servers as Array<any>).map(MonitoringLocationToJSON),
    status: UptimeTestStatusToJSON(value.status),
    status_codes: value.statusCodes,
    tags: value.tags,
    timeout: value.timeout,
    trigger_rate: value.triggerRate,
    uptime: value.uptime,
    use_jar: value.useJar,
    user_agent: value.userAgent,
  };
}
