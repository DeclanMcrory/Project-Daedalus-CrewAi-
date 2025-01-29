import { Agent } from '../core/Agent';

describe('Agent', () => {
  it('should have a name', () => {
    const agent = new Agent({ name: 'Test Agent' });
    expect(agent.name).toBe('Test Agent');
  });
});