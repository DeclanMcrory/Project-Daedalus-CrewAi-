import { Base } from '../src/agents/base';
import { expect, test } from 'vitest';

test('Base agent has a name', () => {
  const agent = new Base({ name: 'TestAgent' });
  expect(agent.name).toBe('TestAgent');
});