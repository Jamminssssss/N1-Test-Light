import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReadingSection from './screens/ReadingSection';
import ListeningSection from './screens/ListeningSection';
import SplashScreen from 'react-native-splash-screen';
import { BannerAd, BannerAdSize, AppOpenAd, AdEventType } from 'react-native-google-mobile-ads';

const Tab = createBottomTabNavigator();

// 광고 단위 ID 설정 (iOS와 Android에서 다르게 설정)
const topBannerAdUnitId = Platform.select({
  ios: 'ca-app-pub-3940256099942544/2435281174',
  android: 'ca-app-pub-3940256099942544/6300978111',
});

const bottomBannerAdUnitId = Platform.select({
  ios: 'ca-app-pub-3940256099942544/2435281174',
  android: 'ca-app-pub-3940256099942544/6300978111',
});

const appOpenAdUnitId = Platform.select({
  ios: 'ca-app-pub-3940256099942544/5575463023',
  android: 'ca-app-pub-3940256099942544/9257395921',
});

interface BannerProps {
  adUnitId?: string; // 광고 ID가 없을 경우를 대비하여 선택적 프로퍼티로 설정
}

const TopBanner: React.FC<BannerProps> = ({ adUnitId }) => (
  <View style={styles.topBannerContainer}>
    {adUnitId && (
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    )}
  </View>
);

const BottomBanner: React.FC<BannerProps> = ({ adUnitId }) => (
  <View style={styles.bottomBannerContainer}>
    {adUnitId && (
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    )}
  </View>
);

export default function App() {
  const colorScheme = useColorScheme(); // 다크 모드/라이트 모드 확인

  useEffect(() => {
    // 스플래시 화면을 3초 후에 숨김
    const timeout = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    // 앱 오프닝 광고 로드 및 표시
    const loadAndShowAppOpenAd = async () => {
      if (!appOpenAdUnitId) return; // 광고 ID가 없는 경우 실행하지 않음

      const appOpenAd = AppOpenAd.createForAdRequest(appOpenAdUnitId, {
        requestNonPersonalizedAdsOnly: true,
      });

      appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
        console.log('앱 오프닝 광고 로드됨');
        appOpenAd.show(); // 광고 표시
      });

      appOpenAd.addAdEventListener(AdEventType.ERROR, (error) => {
        console.log('앱 오프닝 광고 로드 실패:', error);
      });

      await appOpenAd.load();
    };

    loadAndShowAppOpenAd();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }]}>
      <TopBanner adUnitId={topBannerAdUnitId} />
      <View style={styles.mainContent}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Reading"
            screenOptions={{
              tabBarStyle: [styles.tabBar, { backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }],
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Reading"
              component={ReadingSection}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="book" color={color} size={24} />
                ),
                tabBarLabel: "Reading",
              }}
            />
            <Tab.Screen
              name="Listening"
              component={ListeningSection}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="headset" color={color} size={24} />
                ),
                tabBarLabel: "Listening",
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
      <BottomBanner adUnitId={bottomBannerAdUnitId} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64, // 터치 영역 확보를 위해 높이 증가
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    paddingVertical: 0,
  },
  topBannerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  bottomBannerContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
