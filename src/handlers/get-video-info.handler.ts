import { youtubeClient, VideoInfo } from "../clients/youtube-client.js";
import { ToolResponse } from "../types/tool-response.js";
import { formatError } from "../helpers/format-error.js";

/**
 * Get information about a YouTube video
 */
export async function getYouTubeVideoInfo(videoUrl: string, language: string): Promise<ToolResponse<VideoInfo>> {
  try {
    const videoInfo = await youtubeClient.getVideoInfo(videoUrl, language);
    
    return {
      result: videoInfo,
      isError: false,
      error: null,
    };
  } catch (error) {
    return {
      result: null,
      isError: true,
      error: formatError(error),
    };
  }
}
