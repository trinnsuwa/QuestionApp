import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Leaderboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <View style={styles.entry}>
        <Text>1. John Doe - 100 points</Text>
      </View>
      <View style={styles.entry}>
        <Text>2. Jane Smith - 90 points</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  entry: {
    marginBottom: 10,
  },
});

export default Leaderboard;
