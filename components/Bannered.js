import React, { useEffect } from 'react';
import { View, Button, StyleSheet, Dimensions, Platform } from 'react-native';
import { BannerAd, BannerAdSize,  InterstitialAdManager } from 'react-native-google-mobile-ads';

const { width } = Dimensions.get('window');

const Bannered = ({ adUnitId, interstitialAdUnitId, position = 'bottom' }) => {
  useEffect(() => {
    const loadInterstitialAd = async () => {
      await InterstitialAdManager.loadAd(interstitialAdUnitId); // 전면 광고 로드
    };
    loadInterstitialAd();

    return () => {
      InterstitialAdManager.cleanUp(); // 컴포넌트 언마운트 시 전면 광고 청소
    };
  }, [interstitialAdUnitId]);

  const showInterstitialAd = async () => {
    const isReady = await InterstitialAdManager.isReady();
    if (isReady) {
      InterstitialAdManager.showAd();
    } else {
      console.log('전면 광고가 준비되지 않았습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.banner, position === 'top' ? styles.top : styles.bottom]}>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>

      {/* 전면 광고를 수동으로 트리거할 수 있는 버튼 */}
      <Button title="전면 광고 보기" onPress={showInterstitialAd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: width, // 화면 너비 맞추기
    alignItems: 'center',
    backgroundColor: 'white', // 선택적으로 배경색 추가
  },
  top: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 44 : 0, // iOS Safe Area를 고려
    zIndex: 10, // UI 요소 위에 표시
  },
  bottom: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 34 : 0, // iOS 홈 인디케이터 고려
    zIndex: 10,
  },
});

export default Bannered;