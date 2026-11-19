// Tells Node how to load the ESM build, which sits below a CommonJS package.
import { writeFileSync } from 'node:fs';

writeFileSync('dist/esm/package.json', '{ "type": "module" }\n');
