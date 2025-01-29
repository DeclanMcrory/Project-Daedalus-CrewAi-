import { describe, it, expect } from 'vitest';
import { Crew } from './Crew.js';

describe('Crew', () => {
  it('should have a name', () => {
    const crew = new Crew('MyCrew');
    expect(crew.name).toBeDefined();
    expect(crew.name).toEqual('MyCrew');
  });
});