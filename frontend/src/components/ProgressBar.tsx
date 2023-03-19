import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const barColor =
    percentage < 25
      ? 'green'
      : percentage < 50
      ? 'yellow'
      : percentage < 75
      ? 'orange'
      : 'red';

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.progress,
          { width: `${percentage}%`, backgroundColor: barColor },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 13,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
    overflow: 'hidden',
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    height: '100%',
    borderRadius: 5,
  },
  percentageText: {
    marginLeft: 10,
  },
});

export default ProgressBar;
