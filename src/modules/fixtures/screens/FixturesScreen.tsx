import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FixturesList } from '../components';
import { useFixtures } from '../hooks';

const FixturesScreen = () => {
  const { fixturesLoading, fixtures } = useFixtures();

  return (
    <View style={styles.container}>
      <FixturesList isLoading={fixturesLoading} fixtures={fixtures} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default FixturesScreen;
