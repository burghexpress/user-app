import { HapticTab } from "@/components/haptic-tab";
import {HomeIcon} from "@/components/icons/home";
import { MagnifierIcon } from "@/components/icons/magnifier";
import {ProfileIcon} from "@/components/icons/profile";
import {ShoppingBag} from "@/components/icons/shopping_bag";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Tabs } from "expo-router";
import React from "react";



export default function TabLayout () {

  const colorScheme = useColorScheme();

  return (

    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: "auto",
          width: "auto",
          position: "absolute",
          backgroundColor: Colors[colorScheme ?? "light"].background,
          bottom: 20,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 40,
          paddingVertical: 20,
          paddingHorizontal: 20,
          shadowColor: "#AEAEC0",
          shadowOffset: {
            width: 10,
            height: 10
          },
          shadowOpacity: 0.5,
          shadowRadius: 30,
          elevation: 5
        },
        tabBarItemStyle: {
          paddingVertical: 10,
          margin: 10,
          borderRadius: 20,
          shadowColor: "#AEAEC0",
          backgroundColor: Colors[colorScheme ?? "light"].background,
          shadowOffset: {
            width: 5,
            height: 5
          },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 5
        },
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabButtonForeground,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabButtonForegroundActive
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon
              color={color}
              width={19}
              height={20}
            />
          )
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <MagnifierIcon size={24} color={color} />
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ color }) => (
            <ShoppingBag
              color={color}
              size={24}
            />
          )
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileIcon
              color={color}
              size={24}
            />
          )
        }}
      />

    </Tabs>

  );

}
