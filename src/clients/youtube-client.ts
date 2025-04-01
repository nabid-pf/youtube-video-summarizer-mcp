import { getVideoDetails, VideoDetails } from "youtube-caption-extractor";
import dotenv from "dotenv";

dotenv.config();

// Re-export VideoDetails for use in other modules
export type VideoInfo = VideoDetails;

export class YouTubeClient {
  private apiKey: string | undefined;

  constructor() {
    this.apiKey = process.env.YOUTUBE_API_KEY;
  }

  /**
   * Extract video ID from YouTube URL
   */
  public extractVideoId(url: string): string {
    try {
      // Handle different YouTube URL formats
      const urlObj = new URL(url);
      const hostname = urlObj.hostname;
      const pathname = urlObj.pathname;
      const searchParams = urlObj.searchParams;

      if (hostname.includes("youtube.com") && searchParams.has("v")) {
        return searchParams.get("v") as string;
      } else if (hostname.includes("youtu.be")) {
        return pathname.substring(1);
      } else if (hostname.includes("youtube.com") && pathname.includes("/embed/")) {
        return pathname.split("/embed/")[1];
      } else if (hostname.includes("youtube.com") && pathname.includes("/v/")) {
        return pathname.split("/v/")[1];
      } else {
        // In case the input is already a video ID
        if (url.match(/^[a-zA-Z0-9_-]{11}$/)) {
          return url;
        }
        throw new Error("Invalid YouTube URL format");
      }
    } catch (error) {
      // If URL parsing fails, check if the input might be a video ID
      if (url.match(/^[a-zA-Z0-9_-]{11}$/)) {
        return url;
      }
      throw new Error("Could not extract video ID from URL");
    }
  }

  /**
   * Get video information and captions using youtube-caption-extractor
   */
  public async getVideoInfo(videoIdOrUrl: string, lang = "en"): Promise<VideoDetails> {
    try {
      const videoId = this.extractVideoId(videoIdOrUrl);
      const videoDetails = await getVideoDetails({ videoID: videoId, lang });
      return videoDetails;
    } catch (error) {
      console.error("Error getting video info:", error);
      throw new Error(`Failed to get video info: ${(error as Error).message}`);
    }
  }
}

export const youtubeClient = new YouTubeClient();
