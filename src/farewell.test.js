import { test } from 'node:test';
import assert from 'node:assert';
import { farewell } from './farewell.js';
test('farewell', () => { assert.strictEqual(farewell('Ada'), 'Goodbye, Ada!'); });
