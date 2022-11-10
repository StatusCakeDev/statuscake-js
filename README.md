# statuscake-js ![test](https://github.com/StatusCakeDev/statuscake-js/workflows/test/badge.svg)

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

With [NPM](https://www.npmjs.com/), run the following command

```bash
npm install --save "@statuscake/statuscake-js"
```

to add the package to your `package.json` file.

## Usage

Import the package from any JavaScript/TypeScript file, instantiate an API
client and execute a request:

```javascript
import 'isomorphic-fetch';
import {
  Configuration,
  UptimeApi,
} from '@statuscake/statuscake-js';

const config = new Configuration({
  headers: {
    'Authorization': `Bearer ${apiToken}`,
  },
});

const service = new UptimeApi(config);
service.listUptimeTests()
  .then((tests) => console.log(JSON.stringify(tests)))
  .catch(console.log);
```

## License

This project is licensed under the [MIT License](LICENSE.md).
