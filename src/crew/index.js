import { Crew } from '../core/Crew.js';
import { DaedalusCoordinator } from '../agents/coordinator.js';
import { ResearcherAgent } from '../agents/researcher.js';
import { InnovatorAgent } from '../agents/innovator.js';
import { GuardianAgent } from '../agents/guardian.js';

export class DaedalusCrew {
  constructor() {
    this.coordinator = new DaedalusCoordinator({});
    this.agents = {
      researcher: new ResearcherAgent({}),
      innovator: new InnovatorAgent({}),
      guardian: new GuardianAgent({})
    };
  }

  async initialize() {
    this.crew = new Crew({
      agents: [this.coordinator, ...Object.values(this.agents)],
      tasks: this.defineTasks(),
      process: 'hierarchical'
    });
  }

  defineTasks() {
    return [
      {
        name: "knowledge_expansion",
        agent: this.agents.researcher,
        description: "Expand knowledge base"
      },
      {
        name: "system_enhancement",
        agent: this.agents.innovator,
        description: "Implement improvements"
      },
      {
        name: "safety_review",
        agent: this.agents.guardian,
        description: "Validate changes"
      }
    ];
  }

  async launch() {
    await this.initialize();
    return this.crew.kickoff();
  }
}