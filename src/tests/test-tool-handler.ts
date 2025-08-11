import dotenv from "dotenv";
import { GetVideoInfoTool } from "../tools/get-video-info.tool.js";

dotenv.config();

async function main() {
  const [, , videoUrlArg, languageCodeArg] = process.argv;

  if (!videoUrlArg) {
    console.error("Usage: tsx src/tests/test-tool-handler.ts <videoUrlOrId> [languageCode]");
    process.exit(1);
  }

  try {
    const result = await GetVideoInfoTool.handler(
      { videoUrl: videoUrlArg, languageCode: languageCodeArg },
      { 
        signal: new AbortController().signal,
        requestId: "test-request",
        sendNotification: async () => Promise.resolve(),
        sendRequest: async () => Promise.resolve({} as any)
      }
    );

    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error("Unexpected failure:", err);
    process.exit(2);
  }
}

main();


