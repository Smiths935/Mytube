import { VideoItem } from "@/type/type";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

type Props = {
  item: VideoItem;
};
export default function BlocVideoItem({ item }: Props) {
  return (
    <Link
      //@ts-ignore
      href={`/video/${item.video.videoId}`}
      className="flex flex-row mb-2 mr-2 w-full justify-center items-center"
    >
      <View>
        <Image
          source={{ uri: item.video.thumbnails[0].url }}
          className="w-40 h-24 mr-2 rounded-md"
        />
      </View>
      <View className="m-2">
        <Text
          numberOfLines={1}
          className="text-xl font-bold"
          ellipsizeMode="tail"
        >
          {item.video.title}
        </Text>
        <Text className="">{item.video.author.title}</Text>
        <Text className="">
          {Math.ceil(item.video.lengthSeconds / (60 * 60 * 60))}h
          {Math.ceil(item.video.lengthSeconds / (60 * 60))}m{" "}
          {Math.ceil(item.video.lengthSeconds % 60)} s
        </Text>
        <Text>{item.video.stats.views.toLocaleString("fr-FR")} Vues</Text>
      </View>
    </Link>
  );
}
