import { Agent } from '../core/Agent.js';
import { DallETool } from '../tools/dalle.js';
import { FileWriterTool } from '../tools/file_writer.js'; // Assuming this tool exists

export class CreativeAgent extends Agent {
  constructor(config) {
    super({
      role: "Creative Agent",
      goal: "Transform data and insights into creative outputs",
      tools: ["dall-e", "file-writer"],
      ...config
    });
    this.dallETool = new DallETool();
    this.fileWriterTool = new FileWriterTool();
  }

  async generateVisualContent(prompt) {
    console.log(`[CreativeAgent] Generating visual content for prompt: ${prompt}`);
    const image = await this.dallETool.generate(prompt);
    return image;
  }

  async writeContentToFile(content, filePath) {
    console.log(`[CreativeAgent] Writing content to file: ${filePath}`);
    const result = await this.fileWriterTool.write(content, filePath);
    return result;
  }
}
