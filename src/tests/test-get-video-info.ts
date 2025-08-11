import dotenv from "dotenv";
import { getYouTubeVideoInfo } from "../handlers/get-video-info.handler.js";

dotenv.config();

async function main() {
  const [, , videoUrlArg, languageCodeArg] = process.argv;

  if (!videoUrlArg) {
    console.error("Usage: tsx src/tests/test-get-video-info.ts <videoUrlOrId> [languageCode]");
    process.exit(1);
  }

  try {
    const response = await getYouTubeVideoInfo(videoUrlArg, languageCodeArg);
    if (response.isError) {
      console.error("Error:", response.error);
      process.exit(2);
    }

    const info = response.result;
    console.log("Title:", info?.title);
    console.log("Description length:", info?.description?.length ?? 0);
    console.log("Subtitles segments:", info?.subtitles?.length ?? 0);
    console.log("First subtitle:", info?.subtitles?.[0]);
  } catch (err) {
    console.error("Unexpected failure:", err);
    process.exit(3);
  }
}

main();


