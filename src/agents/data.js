import { Agent } from '../core/Agent.js';
import { DataAnalysisTool } from '../tools/data_analysis.js';
import { DataVisualizationTool } from '../tools/data_visualization.js';

export class DataAgent extends Agent {
  constructor(config) {
    super({
      role: "Data Agent",
      goal: "Handle data analysis and insight extraction",
      tools: ["data-analysis", "data-visualization"],
      ...config
    });
    this.dataAnalysisTool = new DataAnalysisTool();
    this.dataVisualizationTool = new DataVisualizationTool();
  }

  async analyzeData(data) {
    console.log(`[DataAgent] Analyzing data: ${data}`);
    const analysisResults = await this.dataAnalysisTool.analyze(data);
    return analysisResults;
  }

  async visualizeData(data) {
    console.log(`[DataAgent] Visualizing data: ${data}`);
    const visualization = await this.dataVisualizationTool.visualize(data);
    return visualization;
  }
}
