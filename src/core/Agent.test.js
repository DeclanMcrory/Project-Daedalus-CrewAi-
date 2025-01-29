import { describe, it, expect } from 'vitest';
import { Agent } from './Agent.js';

describe('Agent', () => {
  it('should have a name', () => {
      const agent = new Agent({ name: 'Test Agent' });
      expect(agent.name).toBe('Test Agent');
  });
});