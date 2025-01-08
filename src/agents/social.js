import { Agent } from '../core/Agent.js';
import { TwitterTool } from '../tools/twitter.js';
import { RedditTool } from '../tools/reddit.js';

export class SocialAgent extends Agent {
  constructor(config) {
    super({
      role: "Social Agent",
      goal: "Manage online presence and engage with communities",
      tools: ["twitter", "reddit"],
      ...config
    });
    this.twitterTool = new TwitterTool();
    this.redditTool = new RedditTool();
  }

  async postTweet(content) {
    console.log(`[SocialAgent] Posting tweet: ${content}`);
    const result = await this.twitterTool.post(content);
    return result;
  }

  async readTwitterTimeline() {
    console.log(`[SocialAgent] Reading Twitter timeline`);
    const timeline = await this.twitterTool.readTimeline();
    return timeline;
  }

  async analyzeTwitterData() {
    console.log(`[SocialAgent] Analyzing Twitter data`);
    const analysis = await this.twitterTool.analyzeData();
    return analysis;
  }

  async postRedditComment(threadId, content) {
    console.log(`[SocialAgent] Posting Reddit comment in thread ${threadId}: ${content}`);
    const result = await this.redditTool.postComment(threadId, content);
    return result;
  }

  async readRedditThreads(subreddit) {
    console.log(`[SocialAgent] Reading Reddit threads in subreddit: ${subreddit}`);
    const threads = await this.redditTool.readThreads(subreddit);
    return threads;
  }

  async analyzeRedditEngagement() {
    console.log(`[SocialAgent] Analyzing Reddit engagement`);
    const analysis = await this.redditTool.analyzeEngagement();
    return analysis;
  }
}
