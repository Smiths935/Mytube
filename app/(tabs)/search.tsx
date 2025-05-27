import BlocVideoItem from "@/components/BlocVideoItem";
import { VideoItem } from "@/type/type";
import { getSearchResults } from "@/utils/controllers/searchResult";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Pressable, TextInput, View } from "react-native";

export default function Search() {
  const [fetchVideo, setFetchVideo] = useState<VideoItem[]>([]);
  const [query, setQuery] = useState("");

  const HandlerSearch = async () => {
    const results = await getSearchResults(query);
    setFetchVideo(results);
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex shadow-sm shadow-slate-200 flex-row  p-2 items-center justify-center px-12 mt-6 mb-4 mx-auto w-[90%] rounded-lg">
        <TextInput
          placeholder="Recherche une video..."
          value={query}
          className="bg-white h-full w-full mr-6 text-lg"
          onChangeText={(txt) => setQuery(txt)}
        />
        <Pressable onPress={HandlerSearch}>
          <Ionicons name="search" size={28} />
        </Pressable>
      </View>
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
