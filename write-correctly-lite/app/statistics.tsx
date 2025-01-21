import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const statistics = () => {
  const { wrongAnswers } = useLocalSearchParams();
  const actualWrongAnswers = wrongAnswers.split(",");
  // console.log(actualWrongAnswers);
  return wrongAnswers === "" ? (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Nunito_800ExtraBold",
          marginBottom: 14,
          color: "red",
        }}
      >
        Вы не сделали ошибок! Отличный результат!
      </Text>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Nunito_800ExtraBold",
          marginBottom: 14,
          color: "red",
        }}
      >
        Вы сделали ошибки в следующих словах:
      </Text>
      <ScrollView>
        {actualWrongAnswers.map((a, i) => {
          return (
            <Text
              style={{
                fontSize: 28,
                fontFamily: "Nunito_800ExtraBold",
                color: "rgba(0,0,0,0.4)",
                marginTop: 6,
              }}
              key={i}
            >
              {`${i + 1}) ${a}`}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default statistics;

const styles = StyleSheet.create({});
