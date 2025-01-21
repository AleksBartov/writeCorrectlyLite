import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useRouter } from "expo-router";
import { ThemeContext } from "./_layout";
import Fontisto from "@expo/vector-icons/Fontisto";

const classes = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 50,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          width: "70%",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 45,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.05)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_1");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            1 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_2");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            2 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.05)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_3");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            3 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => router.push("/forSales")}
        >
          <Text
            style={{
              fontSize: 38,
              fontFamily: "Nunito_800ExtraBold",
              marginRight: 20,
            }}
          >
            4 класс
          </Text>
          <Fontisto name="locked" size={24} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => router.push("/forSales")}
        >
          <Text
            style={{
              fontSize: 38,
              fontFamily: "Nunito_800ExtraBold",
              marginRight: 20,
            }}
          >
            5 класс
          </Text>
          <Fontisto name="locked" size={24} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => router.push("/forSales")}
        >
          <Text
            style={{
              fontSize: 38,
              fontFamily: "Nunito_800ExtraBold",
              marginRight: 20,
            }}
          >
            6 класс
          </Text>
          <Fontisto name="locked" size={24} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => router.push("/forSales")}
        >
          <Text
            style={{
              fontSize: 38,
              fontFamily: "Nunito_800ExtraBold",
              marginRight: 20,
            }}
          >
            7 класс
          </Text>
          <Fontisto name="locked" size={24} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => router.push("/forSales")}
        >
          <Text
            style={{
              fontSize: 38,
              fontFamily: "Nunito_800ExtraBold",
              marginRight: 20,
            }}
          >
            8 класс
          </Text>
          <Fontisto name="locked" size={24} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => router.push("/forSales")}
        >
          <Text
            style={{
              fontSize: 38,
              fontFamily: "Nunito_800ExtraBold",
              marginRight: 20,
            }}
          >
            9 класс
          </Text>
          <Fontisto name="locked" size={24} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => router.push("/forSales")}
        >
          <Text
            style={{
              fontSize: 38,
              fontFamily: "Nunito_800ExtraBold",
              marginRight: 20,
            }}
          >
            10 и 11 классы
          </Text>
          <Fontisto name="locked" size={24} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default classes;

const styles = StyleSheet.create({});
