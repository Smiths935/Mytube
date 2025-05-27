export interface VideoItem {
  type: "video";
  video: {
    lengthSeconds: number;
    movingThumbnails: Image[];
    publishedTimeText: string;
    stats: {
      views: number;
    };
    thumbnails: Image[];
    title: string;
    videoId: string;
    author: {
      avatar: Image[];
      channelId: string;
      title: string;
    };
  };
}

export interface Image {
  height: number;
  url: string;
  width: number;
}
