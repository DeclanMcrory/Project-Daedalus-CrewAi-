import { Agent } from '../core/Agent.js';

export class ResearcherAgent extends Agent {
  constructor(config) {
    super({
      role: "Knowledge Acquisition",
      goal: "Gather and analyze domain knowledge",
      tools: ["search"],
      ...config
    });
  }

  async research(topic) {
    console.log(`[Researcher] Researching topic: ${topic}`);
    const results = `Research findings for ${topic}`;
    await this.learn(results);
    return results;
  }
}