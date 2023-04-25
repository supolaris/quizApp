import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../components/theme';
import quizData from '../components/constants/data/quizData';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'react-native';

const Quiz = () => {
  return (
    <SafeAreaView>
      <StatusBar 
      barStyle='light-content'
      backgroundColor={COLORS.secondry}
      />
    </SafeAreaView>
  )
}

export default Quiz;