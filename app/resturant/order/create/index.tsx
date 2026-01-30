import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { KeyboardAvoidingView, Pressable, ScrollView, useColorScheme } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { Stack, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { choices, dishes } from "../../_inteface";
import { ThemedText } from "@/components/themed-text";
import { ThemedInput } from "@/components/themed-input";




export default function OrderCreateScreen() {

  const colorScheme = useColorScheme();

  const router = useRouter();

  return (

    <KeyboardAvoidingView>

      <ScrollView>

        <Stack.Screen
          options={{ headerShown: false }}
        />

        <ThemedView
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
            position: "absolute",
            zIndex: 10,
            padding: 14,
            paddingTop: 34,
            width: "100%",
            backgroundColor: "transparent"
          }}
        >

          <Pressable
            style={{
              borderRadius: 20,
              width: 40,
              height: 40,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => router.back()}
          >

            <IconSymbol
              size={30}
              color={Colors[colorScheme ?? "light"].icon}
              name="chevron.left"
              style={{
                marginRight: 3
              }}
            />

          </Pressable>

        </ThemedView>

        <Image
          source={dishes[0].image}
          style={{
            width: "100%",
            height: 200
          }}
          contentFit="cover"
        />

        <ThemedView
          style={{
            flex: 1,
            flexDirection: "column",
            padding: 14
          }}
        >

          <ThemedText
            type="title"
            style={{
              fontSize: 24
            }}
          >
            {dishes[0].name}
          </ThemedText>

          <ThemedText
            type="defaultSemiBold"
            style={{
              fontSize: 20
            }}
          >
            ${dishes[0].price}
            {" "}CAD
          </ThemedText>

          <ThemedText
            type="default"
            style={{
              fontSize: 16,
              color: Colors[colorScheme ?? "light"].placeholder
            }}
          >
            {dishes[0].description}
          </ThemedText>

        </ThemedView>

        <ThemedView
          style={{
            flex: 1,
            flexDirection: "column",
            gap: 8,
            padding: 14
          }}
        >

          <ThemedInput
            multiline
            textAlignVertical="top"
            style={{
              borderRadius: 10,
              backgroundColor: Colors[colorScheme ?? "light"].surface,
              padding: 12,
              minHeight: 120,
              color: Colors[colorScheme ?? "light"].text,
              fontSize: 16
            }}
            placeholder="Special Instructions"
          />

        </ThemedView>

        {choices[0].fields.map((item, itemIndex) => (

          <ThemedView
            style={{
              flex: 1,
              flexDirection: "column",
              gap: 8,
              padding: 14
            }}
          >

            <ThemedText
              type="title"
              style={{
                fontSize: 22
              }}
            >
              {item.label}
            </ThemedText>

            <Pressable
              key={itemIndex}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >

              <ThemedText
                type="defaultSemiBold"
                style={{
                  fontSize: 18
                }}
              >
                {item.label}
              </ThemedText>

              <IconSymbol
                name={"circle"}
                size={24}
                color={Colors[colorScheme ?? "light"].icon}
                style={{
                  visibility: "none"
                }}
              />

            </Pressable>

          </ThemedView>

        ))}

      </ScrollView>

      <ThemedView
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10
        }}
      >

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            backgroundColor: Colors[colorScheme ?? "light"].buttonBackground,
            borderRadius: 10
          }}
        >

          <ThemedText
            type="defaultSemiBold"
            style={{
              fontSize: 18,
              color: Colors[colorScheme ?? "light"].buttonText
            }}
          >
            Add 1 to order
          </ThemedText>

          <ThemedText
            type="defaultSemiBold"
            style={{
              fontSize: 18,
              color: Colors[colorScheme ?? "light"].buttonText
            }}
          >
           ${dishes[0].price}
           {" "}CAD
          </ThemedText>

        </Pressable>

      </ThemedView>

    </KeyboardAvoidingView>

  );

}
