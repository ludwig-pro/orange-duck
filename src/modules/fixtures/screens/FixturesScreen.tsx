import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FixtureCard } from '../components/FixtureCard';
import { useFixtures } from '../hooks/useFixtures';

const FixturesScreen = () => {
  const { fixturesLoading, fixtures } = useFixtures();

  const fixture = fixtures[0];
  const isFetched = !fixturesLoading;
  const hasFixture = fixture != null;
  const canDisplayFixture = isFetched && hasFixture;

  return (
    <View style={styles.container}>
      {canDisplayFixture && <FixtureCard {...fixture} />}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});

export default FixturesScreen;
