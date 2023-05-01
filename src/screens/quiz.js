import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { COLORS,SIZES } from '../components/theme/theme';
import quizData from '../components/constants/data/quizData';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'react-native';

const Quiz = () => {

  const allQuestions = quizData;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const renderQuestion = () => {
    return (
      <View>
          {/* Question Counter */}
          <View
            style={{
             flexDirection: 'row',
             alignItems: 'flex-end',
            }}
            >
            <Text
            style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 3}}
            >{currentQuestionIndex+1}</Text>
            <Text 
            style={{color: COLORS.white, fontSize: 18, opacity: 0.6,}}
            >{allQuestions.length}</Text>
          </View>
          {/* Question */}
          <Text
          style={{color: COLORS.white, fontSize: 30}}
          >
            {allQuestions[currentQuestionIndex]?.question}
          </Text>
      </View>
    )
   
  }

  const renderOptions = () => {
    return(
      <View>
        {
          allQuestions[currentQuestionIndex]?.options.map(option => (
            <TouchableOpacity
            key={option}
            style={{
              height: 60,
              borderWidth: 2,
              borderColor: COLORS.secondry+ '40',
              borderRadius: 20,
              backgroundColor: COLORS.secondry+'20',
              paddingHorizontal: 20,
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',

              
            }}
            >
              <Text
              style={{fontSize: 20, color: COLORS.white}}
              >{option}</Text>
            </TouchableOpacity>
            
            ))
        }
      </View>
    )

  }


  return (
    <SafeAreaView
    style={{flex: 1,}}
    >
      <StatusBar 
      barStyle='light-content'
      backgroundColor={COLORS.primary}
      />
      <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        paddingVertical: 40,
        paddingHorizontal: 15,
        position: 'relative'
      }}
      >

        {/* Progress bar */}
        {/* Question */}
        {/* Options */}
        {renderQuestion()}
        {renderOptions()}
        
        {/* Next button */}
        {/* Background image */}
        <Image
        source={require('../../assets/images/cover.png')}
        style={{
          width: SIZES.width,
          height: 130,
          zIndex: -1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0.5
        }}
        resizeMode='contain'
        />
        

      </View>
    </SafeAreaView>
  )
}

export default Quiz;