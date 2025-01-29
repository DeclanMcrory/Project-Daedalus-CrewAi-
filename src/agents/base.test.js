import { describe, it, expect } from 'vitest';
import Base from './base.js';

describe('Base Agent', () => {
  it('should have a name', () => {
    const agent = new Base({ name: 'TestAgent' });
    expect(agent.name).toBe('TestAgent');
  });
});