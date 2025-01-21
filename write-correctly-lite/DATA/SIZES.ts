import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const MAX_WORD_LENGTH = 11;
export const PADDING = 30;
export const SIZE = (width - PADDING * 2) / MAX_WORD_LENGTH;
