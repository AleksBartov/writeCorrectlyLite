import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const forSales = () => {
  return (
    <View>
      <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
        классы с 4 по 11 доступны в платном приложении "Пишу правильно!"
      </Text>
      <Link href="https://www.rustore.ru/catalog/app/com.aleksbartov.writecorrectly">
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../assets/images/icon.png")}
        />
      </Link>
    </View>
  );
};

export default forSales;

const styles = StyleSheet.create({});
