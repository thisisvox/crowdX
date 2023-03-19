import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
  Platform,
  Animated,
  Alert,
  Easing,
  PermissionsAndroid,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MyPressable from '../components/MyPressable';
import { AppImages } from '../assets';
import Config from '../Config';
import GraphScreen from '../components/GraphSceen';
import ProgressBar from '../components/ProgressBar';

interface ProgressBarProps {
  percentage: number;
}

const infoHeight = 364.0;

const showEmptyFacilityPopup = () => {
  Alert.alert(
    'Facility is Empty',
    'The facility currently has more than 50% empty spots.',
    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    { cancelable: false },
  );
};

const checkEmptyFacility = (percentage: number) => {
  if (percentage < 50) {
    showEmptyFacilityPopup();
  }
};

const CourseInfoScreen: React.FC = () => {
  const window = useWindowDimensions();
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  const [modalVisible, setModalVisible] = useState(false);

  const favIconScale = useRef<Animated.Value>(new Animated.Value(0.1));
  const opacity1 = useRef<Animated.Value>(new Animated.Value(0));
  const opacity2 = useRef<Animated.Value>(new Animated.Value(0));
  const opacity3 = useRef<Animated.Value>(new Animated.Value(0));

  // const tempHeight = window.height - window.width / 1.2 + 24.0;
  const marginTop = Config.isIos
    ? Math.max(insets.top, 20)
    : StatusBar.currentHeight;
  useEffect(() => {
    if (88 > 75) {
      // Replace 88 with the actual percentage value if it's dynamic
      setModalVisible(true);
    }
  }, []);

  useEffect(() => {
    Animated.timing(favIconScale.current, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    Animated.parallel([
      Animated.timing(opacity1.current, {
        toValue: 1,
        duration: 500,
        delay: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity2.current, {
        toValue: 1,
        duration: 500,
        delay: 400,
        useNativeDriver: true,
      }),
      Animated.timing(opacity3.current, {
        toValue: 1,
        duration: 500,
        delay: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const getTimeBoxUI = (text1: string, text2: string) => (
    <View style={styles.timeBoxContainer}>
      <Text style={[styles.textStyle, styles.timeBoxTitle]}>{text1}</Text>
      <Text style={[styles.textStyle, { fontSize: 14 }]}>{text2}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Add this modal component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon name="close" size={23} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalText}>
              Lab 7 is crowded now, we advice to go to Lab 11 or Lab 8B to gain
              more points!
            </Text>
            <MyPressable
              style={styles.button}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('Achievements');
              }}
            >
              <View style={styles.buttonContent}>
                <Text style={[styles.buttonTextStyle, { marginRight: 10 }]}>
                  Get Points!
                </Text>
                <Icon name="card-giftcard" size={23} color="white" />
              </View>
            </MyPressable>
          </View>
        </View>
      </Modal>

      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <ImageBackground
        style={{ flex: 1 }}
        imageStyle={{ height: window.width / 1.2 }}
        source={AppImages.webInterFace}
      >
        <View style={styles.contentContainer}>
          <ScrollView
            style={[
              styles.scrollContainer,
              {
                marginTop: window.width / 1.2 - 24,
                paddingBottom: insets.bottom,
              },
            ]}
            contentContainerStyle={{
              flexGrow: 1,
              minHeight: infoHeight,
              // maxHeight: tempHeight > infoHeight ? tempHeight : infoHeight,
            }}
          >
            <Text style={styles.courseTitle}>{'Lab 7'}</Text>
            <View style={styles.priceRatingContainer}>
              <ProgressBar percentage={88} />
              <Animated.Text style={[styles.courseDescription]}>
                88%
              </Animated.Text>
            </View>
            <Animated.View
              style={[styles.boxesContainer, { opacity: opacity1.current }]}
              renderToHardwareTextureAndroid // just to avoid UI glitch when animating view with elevation
            >
              {getTimeBoxUI('92', 'Taken Seats')}
              {getTimeBoxUI('104', 'Total Capacity')}
            </Animated.View>

            <GraphScreen />

            <Animated.View
              style={[styles.footerContainer, { opacity: opacity3.current }]}
              renderToHardwareTextureAndroid
            >
              <View style={{ width: 16 }} />
              <View style={styles.joinCourse}>
                <MyPressable>
                  <Text style={styles.joinCourseText}>Notify When Empty</Text>
                </MyPressable>
              </View>
            </Animated.View>
          </ScrollView>
        </View>

        <Animated.View
          style={[
            styles.favoriteIcon,
            {
              top: window.width / 1.2 - 24 - 35,
              transform: [{ scale: favIconScale.current }],
            },
          ]}
        >
          <Icon name="push-pin" size={33} color="white" />
        </Animated.View>

        <MyPressable
          style={[styles.backBtn, { marginTop }]}
          android_ripple={{ color: 'darkgrey', borderless: true, radius: 28 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-ios" size={24} color="black" />
        </MyPressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    shadowColor: 'grey',
    shadowOffset: { width: 1.1, height: 1.1 },
    shadowOpacity: 0.2,
    shadowRadius: 10.0,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 8,
    elevation: 16,
  },
  courseTitle: {
    fontSize: 22,
    fontFamily: 'WorkSans-SemiBold',
    letterSpacing: 0.27,
    paddingTop: 32,
    paddingLeft: 18,
    paddingRight: 16,
  },
  priceRatingContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    alignItems: 'center',
    border: 10,
    borderColor: 'black',
  },
  price: {
    flex: 1,
    color: 'rgb(0, 182, 240)',
  },
  textStyle: {
    fontSize: 22,
    fontFamily: 'WorkSans-Regular',
    color: 'darkslategrey',
    letterSpacing: 0.27,
  },
  timeBoxContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    margin: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
    elevation: 2,
    shadowColor: 'grey',
    shadowOffset: { width: 1.1, height: 1.1 },
    shadowOpacity: 0.22,
    shadowRadius: 8.0,
  },
  timeBoxTitle: {
    fontSize: 14,
    fontFamily: 'WorkSans-SemiBold',
    color: 'rgb(0, 182, 240)',
  },
  boxesContainer: {
    flexDirection: 'row',
    padding: 8,
  },
  courseDescription: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    textAlign: 'justify',
    color: 'darkslategrey',
    letterSpacing: 0.27,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  footerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  addView: {
    width: 48,
    height: 48,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinCourse: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: 'rgb(0, 182, 240)',
    elevation: 4,
    shadowColor: 'rgb(0, 182, 240)',
    shadowOffset: { width: 1.1, height: 1.1 },
    shadowOpacity: 0.5,
    shadowRadius: 10.0,
    ...Platform.select({ android: { overflow: 'hidden' } }),
  },
  joinCourseText: {
    padding: 18,
    paddingVertical: 12,
    fontSize: 18,
    fontFamily: 'WorkSans-SemiBold',
    alignSelf: 'center',
    color: 'white',
  },
  favoriteIcon: {
    position: 'absolute',
    right: 35,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgb(0, 182, 240)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 18,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  backBtn: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: 'rgb(0, 182, 240)',
    marginTop: 15,
  },
  buttonTextStyle: {
    fontSize: 18,
    fontFamily: 'WorkSans-SemiBold',
    color: 'white',
    letterSpacing: 0.27,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default CourseInfoScreen;
