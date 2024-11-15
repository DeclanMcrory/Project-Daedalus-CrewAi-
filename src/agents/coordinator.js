import { Agent } from '../core/Agent.js';

export class DaedalusCoordinator extends Agent {
  constructor(config) {
    super({
      role: "System Coordinator",
      goal: "Orchestrate system evolution and knowledge synthesis",
      backstory: "Advanced AI coordinator managing specialized agents",
      tools: ["delegation", "synthesis"],
      ...config
    });
  }

  async coordinate(agents, tasks) {
    console.log('[Coordinator] Coordinating tasks...');
    return tasks.map(task => this.delegateTask(task, agents));
  }

  async delegateTask(task, agents) {
    const agent = agents[task.name] || agents[Object.keys(agents)[0]];
    return agent.executeTask(task);
  }
}