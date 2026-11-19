// Creates, reads, updates, lists and deletes a maintenance window.
/* global console, process */
import {
  MaintenanceWindowRepeatInterval,
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
  const start = new Date();
  const hours = (n) => new Date(start.getTime() + n * 3600 * 1000);

  const res = await client.maintenanceWindows.createMaintenanceWindow({
    name: 'Weekly maintenance',
    startAt: start,
    endAt: hours(3),
    repeatInterval: MaintenanceWindowRepeatInterval.Weekly,
    tags: ['testing'],
    timezone: 'UTC',
  });
  const windowId = res.data.newId;
  console.log(`MAINTENANCE WINDOW ID: ${windowId}`);

  try {
    console.log('MAINTENANCE WINDOW:', (await client.maintenanceWindows.getMaintenanceWindow({ windowId })).data);

    await client.maintenanceWindows.updateMaintenanceWindow({
      windowId,
      name: 'Monthly maintenance',
      startAt: start,
      endAt: hours(48),
      repeatInterval: MaintenanceWindowRepeatInterval.Monthly,
    });
    console.log('UPDATED MAINTENANCE WINDOW:', (await client.maintenanceWindows.getMaintenanceWindow({ windowId })).data);

    console.log('MAINTENANCE WINDOWS:', (await client.maintenanceWindows.listMaintenanceWindows({})).data);
  } finally {
    await client.maintenanceWindows.deleteMaintenanceWindow({ windowId });
  }
} catch (e) {
  console.error(e);
  console.error(validationErrors(e));
  process.exitCode = 1;
}
