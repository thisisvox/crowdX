import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CourseInfoScreen, HomeDesignCourse } from './design_course';
import Achievements from './components/Achievements';

const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DesignCourse" component={HomeDesignCourse} />
        <Stack.Screen name="CourseInfo" component={CourseInfoScreen} />
        <Stack.Screen name="Achievements" component={Achievements} />

      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  drawerSceneContainer: {
    elevation: 24,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
});
