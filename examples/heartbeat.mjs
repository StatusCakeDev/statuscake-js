// Creates, reads, updates, lists and deletes a heartbeat check.
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
  // A contact group for the check to alert, deleted however the example ends.
  const group = await client.contactGroups.createContactGroup({ name: 'Development Team' });
  const groupId = group.data.newId;
  try {
    const res = await client.heartbeat.createHeartbeatTest({
      name: 'statuscake.com',
      period: 1800,
      contactGroups: [groupId],
      paused: true,
      tags: ['testing'],
    });
    const testId = res.data.newId;
    console.log(`HEARTBEAT CHECK ID: ${testId}`);

    try {
      console.log('HEARTBEAT CHECK:', (await client.heartbeat.getHeartbeatTest({ testId })).data);

      await client.heartbeat.updateHeartbeatTest({ testId, period: 3600, paused: false });
      console.log('UPDATED HEARTBEAT CHECK:', (await client.heartbeat.getHeartbeatTest({ testId })).data);

      console.log('HEARTBEAT CHECKS:', (await client.heartbeat.listHeartbeatTests({})).data);
    } finally {
      await client.heartbeat.deleteHeartbeatTest({ testId });
    }
  } finally {
    await client.contactGroups.deleteContactGroup({ groupId });
  }
} catch (e) {
  console.error(e);
  console.error(validationErrors(e));
  process.exitCode = 1;
}
