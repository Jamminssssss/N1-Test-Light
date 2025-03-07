# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# React Native 기본 설정
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.proguard.** { *; }

# Serializable 인터페이스 구현 클래스 유지
-keep class * implements java.io.Serializable { *; }

# 네이티브 라이브러리 예외 처리
-keep class * extends android.app.Application { *; }