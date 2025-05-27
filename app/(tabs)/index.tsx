/* eslint-disable react-hooks/rules-of-hooks */
import BlocVideoItem from "@/components/BlocVideoItem";
import { VideoItem } from "@/type/type";
import { getSearchResults } from "@/utils/controllers/searchResult";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

export default function index() {
  const [fetchVideo, setFetchVideo] = useState<VideoItem[]>([]);
  //console.log(fetchVideo);

  useEffect(() => {
    const fetchResults = async () => {
      const results = await getSearchResults("Tutoriel React native");
      setFetchVideo(results);
    };

    fetchResults();
  }, []);

  return (
    <View className="flex-1 bg-white">
      <FlatList
        style={{ padding: 10 }}
        data={fetchVideo.filter(
          (item) => item.type === "video" && item.video.thumbnails.length > 0
        )}
        renderItem={({ item }) => <BlocVideoItem item={item} />}
      />
    </View>
  );
}
