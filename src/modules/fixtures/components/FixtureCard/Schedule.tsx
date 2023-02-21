import React from 'react';
import { Fixture } from '../../../../core/api/models';

import { View, Text, StyleSheet } from 'react-native';
import { Spacer } from '../../../../components/Spacer';

import { radii, spacing } from '../../../../core/theme';
import { formatDate } from '../../../../core/date';

export const Schedule = ({ dateTime }: Pick<Fixture, 'dateTime'>) => {
  return (
    <View style={styles.container}>
      <Spacer size="10" />
      <Text style={styles.date} numberOfLines={2}>
        {formatDate({ date: dateTime, format: 'MEDIUM_EN' })}
      </Text>
      <Spacer size="10" />
      <View style={styles.timeContainer}>
        <Text style={styles.time} numberOfLines={1}>
          {formatDate({ date: dateTime, format: 'TIME' })}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: '30%'
  },
  date: {
    color: '#0c0c0c',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  timeContainer: {
    backgroundColor: '#373636',
    borderRadius: radii.regular,
    padding: spacing['10'],
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'
  }
});
