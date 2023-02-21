import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FixtureCard } from '../components/FixtureCard';
import { useFixtures } from '../hooks/useFixtures';

const FixturesScreen = () => {
  const { fixturesLoading, fixtures } = useFixtures();

  return <View style={styles.container} />;
};

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});

export default FixturesScreen;
