import React from 'react';
import {StyleSheet , ScrollView} from 'react-native';
import Question from './components/questions';
import Leaderboard from './components/leaderboardScreen';

const App: React.FC = () => {
  return (
    <ScrollView>
      <Leaderboard />
      <Question />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
});

export default App;
