export interface Word_type {
  DUAL: boolean;
  CORRECT_WORD: string;
  WORD_TO_TEST: string;
  TEST_POSITION: number;
  ANSWER_RIGTH: string;
  ANSWER_WRONG: string;
  RANDOM: number;
}

export const shuffle = (array: Word_type[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
