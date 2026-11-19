# statuscake-js [![test](https://github.com/StatusCakeDev/statuscake-js/actions/workflows/test.yaml/badge.svg?event=push)](https://github.com/StatusCakeDev/statuscake-js/actions/workflows/test.yaml)

The JavaScript implementation of the [StatusCake API][api-docs]
client. Documentation for this library can be found on the [StatusCake Developer
Portal][guides].

## Prerequisites

You will need the following things properly installed on your computer:

- [Node.js](https://nodejs.org/en/): any one of the **three latest major**
  [releases](https://nodejs.org/en/about/previous-releases/)

## Installation

With [NPM](https://www.npmjs.com/), run the following command

```bash
npm install --save "@statuscake/statuscake-js"
```

to add the package to your `package.json` file.

## Usage

Import the package from any JavaScript/TypeScript file, instantiate an API
client and execute a request:

```typescript
import {
  Client,
  credentials,
  validationErrors,
} from '@statuscake/statuscake-js';

const client = new Client({
  credentials: new credentials.Bearer(process.env.STATUSCAKE_API_TOKEN),
});

try {
  const tests = await client.uptime.listUptimeTests({});
  console.log(tests.data);
} catch (e) {
  console.error(e);
  console.error(validationErrors(e));
}
```

## Examples

The [`examples`](examples) directory has a program for each kind of check, which
creates, reads, updates, lists and deletes it. They create resources in your
account, and delete them again before exiting. Build the package, then run one:

```bash
export STATUSCAKE_API_TOKEN=...
npm install && npm run build
node examples/uptime.mjs
```

## License

This project is licensed under the [MIT License](LICENSE).

[api-docs]: https://developers.statuscake.com/api/
[guides]: https://developers.statuscake.com/guides/sdks/introduction
