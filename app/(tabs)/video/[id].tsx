import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function VideoId() {
  const { id } = useLocalSearchParams();
  const embedUrl = `https://youtube.com/embed/${id}`;

  return (
    <View className="flex-1">
      <WebView
        source={{ uri: embedUrl }}
        allowsInlineMediaPlayback
        javaScriptEnabled
      />
    </View>
  );
}
