import React from 'react';
import { Text, View } from 'react-native';

const UnderlinedQuestion = ({ question, underlineWords = [], textColor }) => {
  // 밑줄을 적용할 단어들을 기준으로 문자열을 나눔
  const regex = new RegExp(`(${underlineWords.join('|')})`, 'g');
  const parts = question.split(regex);

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', color: textColor }}>
        {parts.map((part, i) =>
          underlineWords.includes(part) ? (
            <Text key={i} style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: textColor }}>
              {part}
            </Text>
          ) : (
            <Text key={i} style={{ color: textColor }}>
              {part}
            </Text>
          )
        )}
      </Text>
    </View>
  );
};

export default UnderlinedQuestion;
