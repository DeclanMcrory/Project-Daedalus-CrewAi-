import { Agent } from '../core/Agent.js';
import { KnowledgeGraphQueryTool } from '../tools/knowledge_graph_query.js';
import { OntologyEditorTool } from '../tools/ontology_editor.js';

export class KnowledgeManagerAgent extends Agent {
  constructor(config) {
    super({
      role: "Knowledge Manager Agent",
      goal: "Manage the knowledge graph and ontology",
      tools: ["knowledge-graph-query", "ontology-editor"],
      ...config
    });
    this.knowledgeGraphQueryTool = new KnowledgeGraphQueryTool();
    this.ontologyEditorTool = new OntologyEditorTool();
  }

  async queryKnowledgeGraph(query) {
    console.log(`[KnowledgeManagerAgent] Querying knowledge graph with: ${query}`);
    const results = await this.knowledgeGraphQueryTool.execute(query);
    return results;
  }

  async updateOntology(updateInstructions) {
    console.log(`[KnowledgeManagerAgent] Updating ontology with instructions: ${updateInstructions}`);
    const updateResult = await this.ontologyEditorTool.update(updateInstructions);
    return updateResult;
  }
}
