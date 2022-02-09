# statuscake-js

**NOTE**: This library is in alpha and not production ready. Whilst it can be
used we will not offer support until it is generally available.

The JavaScript implementation of the [StatusCake
API](https://www.statuscake.com/api/v1) client. Documentation for this library
can be found [here](https://www.statuscake.com/api/v1).

## Prerequisites

You will need the following things properly installed on your computer.

* [Node.js](https://nodejs.org/en/): any one of the **three latest major**
  [releases](https://nodejs.org/en/)

## Installation

With [NPM](https://www.npmjs.com/), simply run the following command:

```bash
npm install --save "@statuscake/statuscake-js"
```

and import the client from your code:

```javascript
import 'isomorphic-fetch';
import {
  Configuration,
  ContactGroupsApi,
  LocationsApi,
  MaintenanceWindowsApi,
  PagespeedApi,
  SslApi,
  UptimeApi,
} from '@statuscake/statuscake-js';
```

## License

This project is licensed under the [MIT License](LICENSE.md).
