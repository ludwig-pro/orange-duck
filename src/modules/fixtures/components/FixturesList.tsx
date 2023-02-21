import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { Spacer } from '../../../components/Spacer';
import { Fixture } from '../../../core/api/models';
import { spacing } from '../../../core/theme';
import { FixtureCard } from './FixtureCard';

type FixturesListProps = {
  isLoading: boolean;
  fixtures: Fixture[];
};

export const FixturesList = ({ isLoading, fixtures }: FixturesListProps) => {
  const keyExtractor = useCallback(({ id, name }) => id.toString() + name, []);
  const renderItem = useCallback(
    ({ item }: { item: Fixture }) => <FixtureCard {...item} />,
    []
  );

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{
        padding: spacing['15']
      }}
      showsVerticalScrollIndicator={false}
      data={fixtures}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Spacer vertical size="10" />}
    />
  );
};

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
