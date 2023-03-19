import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Achievement = {
  id: number;
  facility: string;
  visits: number;
  points: number;
};

const achievements: Achievement[] = [
  { id: 1, facility: 'Visited Library', visits: 10, points: 10 },
  { id: 2, facility: 'Visited Lab 7 ', visits: 5, points: 5 },
  { id: 3, facility: 'Visited Cossa Pizzeria', visits: 4, points: 4 },
  // Add more achievements data if needed
];

const Achievements: React.FC = () => {
  const renderItem = ({ item }: { item: Achievement }) => (
    <View style={styles.achievementContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.achievementText}>{`${item.facility} (${item.visits} times)`}</Text>
        <View style={styles.pointsContainer}>
          <Icon name="star" size={20} color="rgb(0, 182, 240)" />
          <Text style={styles.pointsText}>{`${item.points} points`}</Text>
        </View>
      </View>
      <Image source={require('../assets/design_course/trophy.png')} style={styles.trophyIcon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/design_course/vox.png')}
        style={styles.profilePic}
      />
      <Text style={styles.userName}>Alae Hidad</Text>
      <Text style={styles.email}>A.Hidad@aui.ma</Text>
      <Text style={styles.todayGoals}>Today's Goals</Text>
      <View style={styles.goalsContainer}>
        <View style={styles.goalBox}>
          <Image source={require('../assets/design_course/trophy.png')} style={styles.trophyIcon} />
          <Text style={styles.goalText}>Score</Text>
          <Text style={styles.goalNumber}>52/60</Text>
        </View>
        <View style={styles.goalBox}>
          <Image source={require('../assets/design_course/trophy.png')} style={styles.trophyIcon} />
          <Text style={styles.goalText}>Visited Spots</Text>
          <Text style={styles.goalNumber}>6</Text>
        </View>
      </View>
      <Text style={styles.achievementsTitle}>This Week's Achievements</Text>
      <FlatList
        data={achievements}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 70,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  email: {
    fontSize: 16,
    marginVertical: 10,
  },
  achievementContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    padding: 15,
    marginVertical: 5,
    marginTop: 20,
    marginLeft:30,
    width: '80%',
  },
  textContainer: {
    flexDirection: 'column',
  },
  achievementText: {
    fontSize: 16,
    marginBottom: 5,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 16,
    marginLeft: 5,
  },
  achievementsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  todayGoals: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  goalsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
    marginBottom: 20,
  },
  goalBox: {
    backgroundColor: 'rgb(176,224,230)',
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
  },
  goalText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  goalNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  trophyIcon: {
    width: 40,
    height: 40,
  },
});

export default Achievements;