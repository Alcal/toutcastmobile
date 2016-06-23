
**How to build a release APK**

ionic build --release android

jarsigner -verbose -keystore <path-of-toutcast.keystore> <path-of-android-release-unsigned.apk>  toutcast

zipalign -f -v 4 <android-release-unsigned.apk >  <ToutCast-#-#-#.apk>