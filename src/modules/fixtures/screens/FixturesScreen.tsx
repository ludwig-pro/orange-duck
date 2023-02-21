import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spacer } from '../../../components/Spacer';
import { spacing } from '../../../core/theme';
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
      {canDisplayFixture && <FixtureCard {...fixtures[0]} />}
      <Spacer size="10" />
      {canDisplayFixture && <FixtureCard {...fixtures[1]} />}
      <Spacer size="10" />
      {canDisplayFixture && <FixtureCard {...fixtures[2]} />}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing['15'] }
});

export default FixturesScreen;
