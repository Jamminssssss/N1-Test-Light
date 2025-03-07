import React, { useState, useLayoutEffect, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Image,
  Modal,
  Dimensions,
  useColorScheme // 다크모드 감지를 위한 hook 추가
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SQLite from 'react-native-sqlite-storage';
import ImageZoom from 'react-native-image-pan-zoom';
import questions from '../data/questions';
import UnderlinedQuestion from '../components/UnderlinedQuestion';
import UnderlinedOption from "../components/UnderlinedOption";
import { InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';
import { Platform } from 'react-native';

SQLite.enablePromise(true);

// 전면 광고 단위 ID 설정
const interstitialAdUnitId = Platform.select({
  ios: 'ca-app-pub-3940256099942544/4411468910',
  android: 'ca-app-pub-3940256099942544/1033173712',
});

// 전면 광고 객체 생성
const interstitialAd = InterstitialAd.createForAdRequest(interstitialAdUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

export default function ReadingSection({ navigation }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [db, setDb] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);

  // 다크모드 감지 hook 사용
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  // 다크모드에 따른 색상 테마 설정
  // 다크모드일 때 사용할 색상
  const theme = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    textColor: isDarkMode ? 'white' : 'black',
    borderColor: isDarkMode ? '#444' : '#ccc',
    cardBackground: isDarkMode ? '#222' : 'white',
    primaryButtonColor: isDarkMode ? '#1a6bb8' : '#2196F3',
    modalBackground: isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.9)',
    modalContentBackground: isDarkMode ? 'rgba(40, 40, 40, 0.9)' : 'rgba(255, 255, 255, 0.9)',
    optionBorderColor: isDarkMode ? '#666' : '#aaa',
  };

   // 광고 이벤트 설정
   useEffect(() => {
    const unsubscribe = interstitialAd.addAdEventListener(AdEventType.LOADED, () => {
      setAdLoaded(true);
    });

    interstitialAd.load(); // 광고 로드

    return () => {
      unsubscribe();
    };
  }, []);
  
  // Initialize SQLite database and load progress
  useEffect(() => {
    const openDatabase = async () => {
      try {
        const dbInstance = await SQLite.openDatabase({ name: 'quiz.db', location: 'default' });
        setDb(dbInstance);
        await dbInstance.transaction(tx => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS progress (id INTEGER PRIMARY KEY, currentQuestionIndex INTEGER, selectedAnswer INTEGER, showNextButton INTEGER);'
          );
        });

        // Load progress from SQLite when the component is mounted
        dbInstance.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM progress WHERE id = 1',
            [],
            (tx, results) => {
              if (results.rows.length > 0) {
                const progress = results.rows.item(0);
                setCurrentQuestionIndex(progress.currentQuestionIndex || 0);
                setSelectedAnswer(progress.selectedAnswer || null);
                setShowNextButton(progress.showNextButton === 1); 
              }
            }
          );
        });
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };

    openDatabase();
  }, []);

  // Handle the answer selection
  const handleAnswerPress = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowNextButton(true);

    if (answerIndex === currentQuestion.correctAnswer) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }
    
    if (db) {
      db.transaction(tx => {
        tx.executeSql(
          'REPLACE INTO progress (id, currentQuestionIndex, selectedAnswer, showNextButton) VALUES (1, ?, ?, ?)',
          [currentQuestionIndex, answerIndex, 1]  // 1은 true를 의미
        );
      });
    }
  };

  // Handle the "Next" button press
  const handleNextPress = () => {
    const nextIndex = currentQuestionIndex + 1; // Define nextIndex
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setShowNextButton(false);

      if (db) {
        db.transaction(tx => {
          tx.executeSql(
            'REPLACE INTO progress (id, currentQuestionIndex, selectedAnswer, showNextButton) VALUES (1, ?, ?, ?)',
            [nextIndex, null, 0]  // 0은 false를 의미
          );
        });
      }

       // 10문제마다 전면 광고 표시
       if ((nextIndex + 1) % 10 === 0 && adLoaded) {
        interstitialAd.show();
        setAdLoaded(false);
        interstitialAd.load(); // 새로운 광고 로드
      }
    } else {
      setShowResultModal(true); // 결과 모달 표시
    }
  };

  // Reset the quiz state
  const resetQuizState = () => {
    setShowQuiz(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowNextButton(false);
    setCorrectCount(0);
    setWrongCount(0);

    if (db) {
      db.transaction(tx => {
        tx.executeSql('DELETE FROM progress WHERE id = 1');
      });
    }
    // 하단 탭 다시 활성화
    navigation.setOptions({
      tabBarStyle: { display: 'flex' },
    });
  };

  // Update navigation options based on quiz state
  useLayoutEffect(() => {
    if (showQuiz) {
      navigation.setOptions({
        headerShown: true,
        tabBarStyle: { display: 'none' },
        headerTitle: '', // You can set this to any title if needed
        headerStyle: {
          backgroundColor: isDarkMode ? '#333' : '#f9f9f9', // Dark background for dark mode
        },
        headerTintColor: isDarkMode ? 'white' : 'black', // Title text color for dark mode
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              resetQuizState();
            }}
            style={styles.closeButton}
          >
            <Ionicons name="close-outline" size={30} color="red" />
          </TouchableOpacity>
        ),
      });
    } else {
      navigation.setOptions({
        headerShown: false,
        tabBarStyle: { display: 'flex' },
      });
    }
  }, [navigation, showQuiz, isDarkMode]); // Added isDarkMode to the dependency array
  

 
  //줌인 기능 
  const ImageModal = () => (
    <Modal
      transparent={true}
      visible={showImageModal}
      onRequestClose={() => setShowImageModal(false)}
    >
      <View style={[styles.modalContainer, { backgroundColor: theme.modalBackground }]}>
        {/* 다크모드에 따라 모달 배경색 변경 */}
        <TouchableOpacity
          style={styles.modalCloseButton}
          onPress={() => setShowImageModal(false)}
        >
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
        
        <ImageZoom
          cropWidth={windowWidth}
          cropHeight={windowHeight}
          imageWidth={windowWidth}
          imageHeight={windowHeight * 0.7}
        >
          <Image
            source={currentQuestion.image}
            style={styles.modalImage}
            resizeMode="contain"
          />
        </ImageZoom>

        {currentQuestion.explanation && (
          <View style={[styles.explanationContainer, { backgroundColor: theme.modalContentBackground }]}>
            {/* 다크모드에 따라 설명 컨테이너 배경색 변경 */}
            <Text style={[styles.explanationText, { color: theme.textColor }]}>
              {/* 다크모드에 따라 설명 텍스트 색상 변경 */}
              {currentQuestion.explanation}
            </Text>
          </View>
        )}
      </View>
    </Modal>
  );

  const ResultModal = () => {
    const totalQuestions = correctCount + wrongCount;
    const accuracy = totalQuestions > 0 ? ((correctCount / totalQuestions) * 100).toFixed(2) : 0;
  
    return (
      <Modal
        transparent={true}
        visible={showResultModal}
        onRequestClose={() => setShowResultModal(false)}
      >
        <View style={[styles.modalContainer, { backgroundColor: theme.modalBackground }]}>
          {/* 다크모드에 따라 모달 배경색 변경 */}
          <View style={[styles.resultBox, { backgroundColor: theme.cardBackground }]}>
            {/* 다크모드에 따라 결과 박스 배경색 변경 */}
            <Text style={[styles.resultTitle, { color: theme.textColor }]}>
              {/* 다크모드에 따라 결과 제목 색상 변경 */}
              クイズ結果
            </Text>
            <Text style={[styles.resultText, { color: theme.textColor }]}>
              {/* 다크모드에 따라 결과 텍스트 색상 변경 */}
              ✔️ 正解数: {correctCount}
            </Text>
            <Text style={[styles.resultText, { color: theme.textColor }]}>
              {/* 다크모드에 따라 결과 텍스트 색상 변경 */}
              ❌ 不正解数: {wrongCount}
            </Text>
            <Text style={[styles.resultText, { color: theme.textColor }]}>
              {/* 다크모드에 따라 결과 텍스트 색상 변경 */}
              📊 正答率: {accuracy}%
            </Text>
  
            <TouchableOpacity
              style={[styles.restartButton, { backgroundColor: theme.primaryButtonColor }]}
              onPress={() => {
                resetQuizState();
                setShowResultModal(false);
              }}
            >
              <Text style={styles.restartButtonText}>再挑戦</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  
  // Show quiz or button to start quiz
  if (!showQuiz) {
    return (
      <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        {/* 다크모드에 따라 컨테이너 배경색 변경 */}
        <View style={styles.buttonContainer}>
          <Ionicons
            name="book"
            size={50}
            color={theme.textColor} // 다크모드에 따라 아이콘 색상 변경
            onPress={() => setShowQuiz(true)}
          />
          <Text style={[styles.text, { color: theme.textColor }]}>
            {/* 다크모드에 따라 텍스트 색상 변경 */}
            Jlpt 1 言語知識,読解
          </Text> 
        </View>
      </View>
    );
  }

  // Quiz progress screen
  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      {/* 다크모드에 따라 컨테이너 배경색 변경 */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.questionContainer}>
          <ScrollView 
            style={[
              styles.questionScroll, 
              { 
                backgroundColor: theme.cardBackground,
                borderColor: theme.borderColor
              }
            ]} 
            nestedScrollEnabled={true}
          >
            <UnderlinedQuestion 
              question={currentQuestion.question} 
              underlineWords={currentQuestion.underlineWords}
              textColor={theme.textColor} // UnderlinedQuestion 컴포넌트에 textColor prop 전달 (컴포넌트에 해당 prop 추가 필요)
            />
            
            {currentQuestion.image && (
              <TouchableOpacity onPress={() => setShowImageModal(true)}>
                <Image source={currentQuestion.image} style={styles.questionImage} />
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>

        <View style={[
          styles.optionsContainer, 
          { 
            backgroundColor: theme.cardBackground,
            borderColor: theme.borderColor
          }
        ]}>
          {/* 다크모드에 따라 옵션 컨테이너 배경색과 테두리 색상 변경 */}
          <ScrollView nestedScrollEnabled={true}>
            {currentQuestion.options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionButton,
                  { 
                    backgroundColor: theme.cardBackground,
                    borderColor: theme.optionBorderColor
                  },
                  selectedAnswer === option.id && currentQuestion.correctAnswer === option.id && styles.correctOption,
                  selectedAnswer === option.id && currentQuestion.correctAnswer !== option.id && styles.wrongOption,
                  selectedAnswer !== null && currentQuestion.correctAnswer === option.id && styles.correctOption,
                ]}
                onPress={() => handleAnswerPress(option.id)}
                disabled={selectedAnswer !== null}
              >
                <Text style={[styles.optionText, { color: theme.textColor }]}>
                  {/* 다크모드에 따라 옵션 텍스트 색상 변경 */}
                  <UnderlinedOption 
                    optionText={option.text} 
                    highlightWords={option.highlightWords || []}
                    textColor={theme.textColor} // UnderlinedOption 컴포넌트에 textColor prop 전달 (컴포넌트에 해당 prop 추가 필요)
                  />
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {showNextButton && (
            <TouchableOpacity
              style={[
                styles.optionButton, 
                styles.nextButton, 
                { backgroundColor: theme.primaryButtonColor }
              ]}
              onPress={handleNextPress}
            >
              <Text style={[styles.optionText, styles.nextButtonText]}>次の問題</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <ImageModal />
      <ResultModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor은 theme.backgroundColor로 동적으로 설정
  },
  scrollView: {
    paddingBottom: 30,
  },
  questionContainer: {
    marginBottom: 40,
    flex: 1,
  },
  questionScroll: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    // borderColor은 theme.borderColor로 동적으로 설정
    flexShrink: 1,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    // color는 theme.textColor로 동적으로 설정
  },
  questionImage: {
    width: '100%',
    height: 350,
    marginTop: 10,
    resizeMode: 'contain',
  },
  optionsContainer: {
    marginVertical: 25,
    maxHeight: 500,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    // borderColor은 theme.borderColor로 동적으로 설정
    // backgroundColor은 theme.cardBackground로 동적으로 설정
  },
  optionButton: {
    padding: 15,
    borderWidth: 1,
    // borderColor은 theme.optionBorderColor로 동적으로 설정
    marginVertical: 10,
    borderRadius: 8,
    // backgroundColor은 theme.cardBackground로 동적으로 설정
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
    // color는 theme.textColor로 동적으로 설정
  },
  correctOption: {
    backgroundColor: 'green',
  },
  wrongOption: {
    backgroundColor: 'red',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 10,
    padding: 0,
    margin: 0,
  },
  nextButton: {
    padding: 20,
    // backgroundColor은 theme.primaryButtonColor로 동적으로 설정
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 12,
  },
  nextButtonText: {
    color: 'white',
  },
  extraSpace: {
    height: 30,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    // color는 theme.textColor로 동적으로 설정
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    // backgroundColor은 theme.modalBackground로 동적으로 설정
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 2,
    padding: 10,
  },
  modalImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.7,
  },
  explanationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    // backgroundColor은 theme.modalContentBackground로 동적으로 설정
  },
  explanationText: {
    fontSize: 16,
    // color는 theme.textColor로 동적으로 설정
  },
  zoomHintContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 5,
    borderRadius: 5,
  },
  zoomHintText: {
    marginLeft: 5,
    fontSize: 12,
    color: 'black',
  },
  resultBox: {
    // backgroundColor은 theme.cardBackground로 동적으로 설정
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '80%',
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    // color는 theme.textColor로 동적으로 설정
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
    // color는 theme.textColor로 동적으로 설정
  },
  restartButton: {
    marginTop: 20,
    // backgroundColor은 theme.primaryButtonColor로 동적으로 설정
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});