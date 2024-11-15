export class Crew {
  constructor(config) {
    this.agents = config.agents;
    this.tasks = config.tasks;
    this.process = config.process;
  }

  async kickoff() {
    console.log('Starting crew execution...');
    const results = [];

    for (const task of this.tasks) {
      const result = await task.agent.executeTask(task);
      results.push(result);
    }

    return results;
  }
}