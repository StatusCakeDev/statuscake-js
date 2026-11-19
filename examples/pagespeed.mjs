// Creates, reads, updates, lists and deletes a pagespeed check.
/* global console, process */
import {
  PagespeedTestCheckRate,
  PagespeedTestRegion,
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
    const res = await client.pagespeed.createPagespeedTest({
      name: 'statuscake.com',
      websiteUrl: 'https://www.statuscake.com',
      checkRate: PagespeedTestCheckRate.OneDay,
      region: PagespeedTestRegion.UnitedKingdom,
      alertSmaller: 10,
      alertBigger: 100,
      alertSlower: 1000,
      contactGroups: [groupId],
      paused: true,
    });
    const testId = res.data.newId;
    console.log(`PAGESPEED CHECK ID: ${testId}`);

    try {
      console.log('PAGESPEED CHECK:', (await client.pagespeed.getPagespeedTest({ testId })).data);

      await client.pagespeed.updatePagespeedTest({
        testId,
        checkRate: PagespeedTestCheckRate.OneHour,
        contactGroups: [], // Remove all contact groups.
        paused: false,
      });
      console.log('UPDATED PAGESPEED CHECK:', (await client.pagespeed.getPagespeedTest({ testId })).data);

      console.log('PAGESPEED CHECKS:', (await client.pagespeed.listPagespeedTests({})).data);
      console.log('PAGESPEED CHECK HISTORY:', (await client.pagespeed.listPagespeedTestHistory({ testId })).data);
    } finally {
      await client.pagespeed.deletePagespeedTest({ testId });
    }
  } finally {
    await client.contactGroups.deleteContactGroup({ groupId });
  }
} catch (e) {
  console.error(e);
  console.error(validationErrors(e));
  process.exitCode = 1;
}
