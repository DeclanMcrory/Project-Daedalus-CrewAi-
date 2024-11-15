import { Agent } from '../core/Agent.js';

export class GuardianAgent extends Agent {
  constructor(config) {
    super({
      role: "Ethics & Safety",
      goal: "Ensure responsible AI development",
      tools: ["ethics"],
      ...config
    });
  }

  async validate(action) {
    console.log(`[Guardian] Validating action: ${action}`);
    return {
      safe: true,
      concerns: [],
      recommendations: []
    };
  }
}