// Lists the locations that checks can run from.
/* global console, process */
import {
  Client,
  credentials,
  validationErrors,
} from '@statuscake/statuscake-js';

const token = process.env.STATUSCAKE_API_TOKEN;
if (!token) {
  console.error('STATUSCAKE_API_TOKEN not set in environment');
  process.exit(1);
}

const client = new Client({ credentials: new credentials.Bearer(token) });

try {
  console.log('PAGESPEED LOCATIONS:', (await client.locations.listPagespeedMonitoringLocations({})).data);

  // The region codes are the values that an uptime check accepts as regions.
  console.log('UPTIME LOCATIONS:', (await client.locations.listUptimeMonitoringLocations({})).data);
} catch (e) {
  console.error(e);
  console.error(validationErrors(e));
  process.exitCode = 1;
}
