import { useEffect, useState } from "react";
import { Colors } from "@/constants/theme";
import { ScrollView, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Image } from "expo-image";
import { users } from "@/data";
import { User } from "@db-types";



export default function AccountScreen () {

  const [profile, setProfile] = useState<User>();

  const colorScheme = useColorScheme();


  useEffect(() => {
    fetchProfile();
  }, []);


  const fetchProfile = () => {
    const foundProfile = users[0];
    if (foundProfile) {
      setProfile(foundProfile);
    }
  };


  return (

    <ScrollView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background
      }}
      contentContainerStyle={{
        paddingBottom: 20
      }}
    >

      <View
        style={{
          marginTop: 80,
          paddingHorizontal: 14,
          flexDirection: "row",
          gap: 14
        }}
      >

        <Image
          source={profile?.avatarUrl}
          style={{
            width: 60,
            height: 60,
            borderRadius: 60
          }}
          contentFit="cover"
        />

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontFamily: "Atelia",
              fontSize: 28,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            {profile?.firstName} {profile?.lastName}
          </Text>
        </View>

      </View>

      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          flex: 1,
          gap: 20,
          paddingHorizontal: 14
        }}
      >

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: "column",
            gap: 4,
            padding: 20,
            borderRadius: 20,
            backgroundColor: Colors[colorScheme ?? "light"].cardBackground
          }}
        >
          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 16,
              color: Colors[colorScheme ?? "light"].cardForeground
            }}
          >
            Wallet
          </Text>

          <Text
            style={{
              fontFamily: "Atelia",
              fontSize: 24,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            $2.15
          </Text>
        </TouchableOpacity>

      </View>

      <View
        style={{
          marginTop: 30,
          flexDirection: "column",
          flex: 1
        }}
      >

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 14,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 20,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            Notifications
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 14,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 20,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            Favorites
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 14,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 20,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            Manage Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 14,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 20,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 14,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 20,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            Help
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 14,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 20,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            Legals
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 14,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 20,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            Delete account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 14,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 20,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>

  );

}
