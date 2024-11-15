export class Agent {
  constructor(config) {
    this.role = config.role;
    this.goal = config.goal;
    this.backstory = config.backstory;
    this.tools = config.tools || [];
    this.memory = new Map();
  }

  async learn(data) {
    this.memory.set(Date.now(), data);
    return true;
  }

  async recall(query) {
    return Array.from(this.memory.values());
  }

  async executeTask(task) {
    console.log(`[${this.role}] Executing task: ${task.name}`);
    return {
      status: 'completed',
      result: `Task ${task.name} completed by ${this.role}`
    };
  }
}