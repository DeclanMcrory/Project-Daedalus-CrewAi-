import { Agent } from '../core/Agent.js';
import { TaskManagementTool } from '../tools/task_management.js';
import { ProjectPlanningTool } from '../tools/project_planning.js';

export class PlanningAgent extends Agent {
  constructor(config) {
    super({
      role: "Planning Agent",
      goal: "Coordinate strategic planning and task management",
      tools: ["task-management", "project-planning"],
      ...config
    });
    this.taskManagementTool = new TaskManagementTool();
    this.projectPlanningTool = new ProjectPlanningTool();
  }

  async scheduleTasks(tasks) {
    console.log(`[PlanningAgent] Scheduling tasks: ${tasks}`);
    const schedule = await this.taskManagementTool.createSchedule(tasks);
    return schedule;
  }

  async allocateResources(project) {
    console.log(`[PlanningAgent] Allocating resources for project: ${project}`);
    const allocation = await this.projectPlanningTool.allocateResources(project);
    return allocation;
  }
}
