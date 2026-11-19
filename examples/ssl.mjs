// Creates, reads, updates, lists and deletes an SSL check.
/* global console, process */
import {
  SSLTestCheckRate,
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
    const res = await client.ssl.createSslTest({
      websiteUrl: 'https://www.statuscake.com',
      checkRate: SSLTestCheckRate.FiveMinutes,
      alertAt: [1, 7, 30],
      alertBroken: true,
      alertExpiry: true,
      alertMixed: true,
      alertReminder: true,
      contactGroups: [groupId],
      followRedirects: true,
      paused: true,
    });
    const testId = res.data.newId;
    console.log(`SSL CHECK ID: ${testId}`);

    try {
      console.log('SSL CHECK:', (await client.ssl.getSslTest({ testId })).data);

      await client.ssl.updateSslTest({
        testId,
        checkRate: SSLTestCheckRate.OneHour,
        contactGroups: [], // Remove all contact groups.
        paused: false,
      });
      console.log('UPDATED SSL CHECK:', (await client.ssl.getSslTest({ testId })).data);

      console.log('SSL CHECKS:', (await client.ssl.listSslTests({})).data);
    } finally {
      await client.ssl.deleteSslTest({ testId });
    }
  } finally {
    await client.contactGroups.deleteContactGroup({ groupId });
  }
} catch (e) {
  console.error(e);
  console.error(validationErrors(e));
  process.exitCode = 1;
}
