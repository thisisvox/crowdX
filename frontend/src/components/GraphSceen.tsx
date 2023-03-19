import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const GraphScreen = () => {
  // Mock data for the graph
  const mockData = [
    { facilityId: 1, facilityName: 'Lab 7', spots: 19, time: '10' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 25, time: '11' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 31, time: '12' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 45, time: '13' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 38, time: '14' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 57, time: '15' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 68, time: '16' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 75, time: '17' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 87, time: '18' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 92, time: '19' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 81, time: '20' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 73, time: '21' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 52, time: '22' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 32, time: '23' },
    { facilityId: 1, facilityName: 'Lab 7', spots: 20, time: '00' },
  ];

  return (
    <View>
      <LineChart
        data={{
          labels: mockData.map((data) => data.time),
          datasets: [
            {
              data: mockData.map((data) => data.spots),
            },
          ],
        }}
        width={400}
        height={220}
        yAxisSuffix=" spots"
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgb(0, 182, 240)`,
          labelColor: (opacity = 1) => `rgb(0, 182, 240)`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '3',
            stroke: '#fff',
          },
        }}
      />
    </View>
  );
};

export default GraphScreen;
