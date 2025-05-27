import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#444",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Recherche",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="video/[id]"
        options={{
          title: "Play",
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} name="play" color={color} />
          ),
          href: null,
        }}
      />
    </Tabs>
  );
}
