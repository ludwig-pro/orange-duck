import { FlashList } from '@shopify/flash-list';
import React, { useCallback } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { Spacer } from '../../../components/Spacer';
import { Fixture } from '../../../core/api/models';
import { spacing } from '../../../core/theme';
import { FixtureCard } from './FixtureCard';
import { CARD_HEIGHT } from './FixtureCard/FixtureCard';

type FixturesListProps = {
  isLoading: boolean;
  fixtures: Fixture[];
};

export const FixturesList = ({ isLoading, fixtures }: FixturesListProps) => {
  const keyExtractor = useCallback(({ id }: Fixture) => id.toString(), []);
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
    <FlashList
      testID="fixtures-list"
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      data={fixtures}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Spacer vertical size="10" />}
      estimatedItemSize={CARD_HEIGHT + spacing['10']}
    />
  );
};

export const styles = StyleSheet.create({
  container: { padding: spacing['15'] },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
