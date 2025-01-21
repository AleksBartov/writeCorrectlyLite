import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const forSales = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontFamily: "Nunito_800ExtraBold" }}>
        классы с 4 по 11 доступны в
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Nunito_800ExtraBold",
          marginBottom: 50,
        }}
      >
        платном приложении "Пишу правильно!"
      </Text>
      <Link href="https://www.rustore.ru/catalog/app/com.aleksbartov.writecorrectly">
        <Image
          style={{ width: 140, height: 140 }}
          source={require("../assets/images/icon.png")}
        />
      </Link>
    </View>
  );
};

export default forSales;

const styles = StyleSheet.create({});
