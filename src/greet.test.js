import { test } from 'node:test';
import assert from 'node:assert';
import { greet } from './greet.js';
test('greet', () => { assert.strictEqual(greet('Ada'), 'Hello, Ada!'); });
