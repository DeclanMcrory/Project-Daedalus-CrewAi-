export class TaskManagementTool {
  constructor() {
    this.name = "task-management";
    this.description = "Manage tasks and schedules for projects";
    this.tasks = new Map(); // Store tasks with unique IDs
  }

  async createTask(taskId, taskDetails) {
    console.log(`[TaskManagementTool] Creating task with ID: ${taskId}`);
    if (this.tasks.has(taskId)) {
      throw new Error(`Task with ID ${taskId} already exists.`);
    }
    this.tasks.set(taskId, { ...taskDetails, status: 'pending' });
    return `Task ${taskId} created successfully.`;
  }

  async updateTask(taskId, updates) {
    console.log(`[TaskManagementTool] Updating task with ID: ${taskId}`);
    if (!this.tasks.has(taskId)) {
      throw new Error(`Task with ID ${taskId} does not exist.`);
    }
    const task = this.tasks.get(taskId);
    this.tasks.set(taskId, { ...task, ...updates });
    return `Task ${taskId} updated successfully.`;
  }

  async trackTask(taskId) {
    console.log(`[TaskManagementTool] Tracking task with ID: ${taskId}`);
    if (!this.tasks.has(taskId)) {
      throw new Error(`Task with ID ${taskId} does not exist.`);
    }
    const task = this.tasks.get(taskId);
    return `Task ${taskId} is currently ${task.status}.`;
  }

  async createSchedule(tasks) {
    console.log("[TaskManagementTool] Creating schedule for tasks");
    // Simulate schedule creation
    const schedule = tasks.map((task, index) => ({
      taskId: task.id,
      startTime: `2023-10-0${index + 1}T09:00:00Z`,
      endTime: `2023-10-0${index + 1}T17:00:00Z`
    }));
    return schedule;
  }
}
