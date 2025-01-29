import { Crew } from '../core/Crew';

describe('Crew', () => {
  it('should have a name', () => {
    const crew = new Crew("MyCrew");
    expect(crew.name).toBeDefined();
    expect(crew.name).toEqual("MyCrew")
  });
  it('should have agents', () => {
    const crew = new Crew();
    expect(crew.agents).toBeDefined();
  });
});