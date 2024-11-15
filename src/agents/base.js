import { Agent } from 'crewai';

export class BaseAgent extends Agent {
  constructor(config) {
    super(config);
    this.memory = new Map();
  }

  async learn(data) {
    this.memory.set(Date.now(), data);
  }

  async recall(query) {
    // Implement memory search
    return Array.from(this.memory.values());
  }
}