import { DaedalusCrew } from './crew/index.js';

async function main() {
  try {
    const daedalus = new DaedalusCrew();
    console.log("Launching Project Daedalus...");
    const results = await daedalus.launch();
    console.log("System running successfully");
    console.log("Results:", results);
  } catch (error) {
    console.error("Error launching Daedalus:", error);
    process.exit(1);
  }
}

main();