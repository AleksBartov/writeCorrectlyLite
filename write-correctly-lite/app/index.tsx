import { TouchableOpacity } from "react-native";

import { useContext, useEffect, useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import { useRouter } from "expo-router";
import { ThemeContext } from "./_layout";
import { CLASS_1, CLASS_1_LENGTH } from "@/DATA/CLASS_1";
import { CLASS_2, CLASS_2_LENGTH } from "@/DATA/CLASS_2";
import { CLASS_3, CLASS_3_LENGTH } from "@/DATA/CLASS_3";
import StackWords from "@/components/StackWords";
import Animated from "react-native-reanimated";

export default function Index() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [stydy, setStydy] = useState();
  useEffect(() => {
    setStydy(theme);
  }, [theme, setTheme, stydy, setStydy]);

  const router = useRouter();

  return (
    <>
      {stydy === "CLASS_1" && (
        <StackWords
          classToTest={CLASS_1}
          name="CLASS_1"
          classLenght={CLASS_1_LENGTH}
        />
      )}
      {stydy === "CLASS_2" && (
        <StackWords
          classToTest={CLASS_2}
          name="CLASS_2"
          classLenght={CLASS_2_LENGTH}
        />
      )}
      {stydy === "CLASS_3" && (
        <StackWords
          classToTest={CLASS_3}
          name="CLASS_3"
          classLenght={CLASS_3_LENGTH}
        />
      )}

      <TouchableOpacity
        onPress={() => router.push("/classes")}
        style={{
          position: "absolute",
          top: 20,
          left: 50,
          padding: 14,
          borderRadius: 5,
          shadowColor: "gray",
          shadowOffset: {
            width: 10,
            height: -10,
          },
          shadowOpacity: 0.5,
          shadowRadius: 8,
          elevation: 3,
        }}
      >
        <Octicons name="number" size={44} color="black" />
      </TouchableOpacity>
      <Animated.View style={{ position: "absolute", top: 20, right: 50 }}>
        {theme === "CLASS_10_11" ? (
          <Animated.Text
            style={{ fontSize: 15, fontFamily: "Nunito_800ExtraBold" }}
          >
            10 и 11 классы
          </Animated.Text>
        ) : (
          <Animated.Text
            style={{ fontSize: 20, fontFamily: "Nunito_800ExtraBold" }}
          >{`${theme[theme.length - 1]} класс`}</Animated.Text>
        )}
      </Animated.View>
    </>
  );
}
