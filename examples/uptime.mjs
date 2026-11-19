// Creates, reads, updates, lists and deletes an uptime check.
/* global console, process */
import {
  UptimeTestCheckRate,
  UptimeTestType,
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
  // A contact group for the check to alert, deleted however the example ends.
  const group = await client.contactGroups.createContactGroup({ name: 'Development Team' });
  const groupId = group.data.newId;
  try {
    const res = await client.uptime.createUptimeTest({
      name: 'statuscake.com',
      testType: UptimeTestType.Http,
      websiteUrl: 'https://www.statuscake.com',
      checkRate: UptimeTestCheckRate.FifteenMinutes,
      contactGroups: [groupId],
      enableSslAlert: true,
      followRedirects: true,
      paused: true,
      regions: ['london'],
      tags: ['testing'],
    });
    const testId = res.data.newId;
    console.log(`UPTIME CHECK ID: ${testId}`);

    try {
      console.log('UPTIME CHECK:', (await client.uptime.getUptimeTest({ testId })).data);

      await client.uptime.updateUptimeTest({
        testId,
        checkRate: UptimeTestCheckRate.ThirtyMinutes,
        paused: false,
        regions: ['london', 'paris'],
      });
      console.log('UPDATED UPTIME CHECK:', (await client.uptime.getUptimeTest({ testId })).data);

      console.log('UPTIME CHECKS:', (await client.uptime.listUptimeTests({})).data);
      console.log('UPTIME CHECK HISTORY:', (await client.uptime.listUptimeTestHistory({ testId })).data);
      console.log('UPTIME CHECK PERIODS:', (await client.uptime.listUptimeTestPeriods({ testId })).data);
      console.log('SENT ALERTS:', (await client.uptime.listUptimeTestAlerts({ testId })).data);
    } finally {
      await client.uptime.deleteUptimeTest({ testId });
    }
  } finally {
    await client.contactGroups.deleteContactGroup({ groupId });
  }
} catch (e) {
  console.error(e);
  console.error(validationErrors(e));
  process.exitCode = 1;
}
