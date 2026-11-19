// Creates, reads, updates, lists and deletes a contact group.
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
  const res = await client.contactGroups.createContactGroup({
    name: 'Operations Team',
    emailAddresses: ['johnsmith@example.com', 'janesmith@example.com'],
    integrations: ['1', '2', '3'],
    mobileNumbers: ['447712345678', '447987462344'],
    pingUrl: 'https://ping.example.com',
  });
  const groupId = res.data.newId;
  console.log(`CONTACT GROUP ID: ${groupId}`);

  // The group is deleted however the rest of the example ends.
  try {
    console.log('CONTACT GROUP:', (await client.contactGroups.getContactGroup({ groupId })).data);

    await client.contactGroups.updateContactGroup({
      groupId,
      name: 'Development Team',
      emailAddresses: [], // Remove all email addresses.
      integrations: ['4', '5', '6'],
      mobileNumbers: ['447891998195'],
      pingUrl: 'https://ping.example.com/groups',
    });
    console.log('UPDATED CONTACT GROUP:', (await client.contactGroups.getContactGroup({ groupId })).data);

    console.log('CONTACT GROUPS:', (await client.contactGroups.listContactGroups({})).data);
  } finally {
    await client.contactGroups.deleteContactGroup({ groupId });
  }
} catch (e) {
  console.error(e);
  console.error(validationErrors(e));
  process.exitCode = 1;
}
