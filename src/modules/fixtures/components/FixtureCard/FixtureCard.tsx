import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Schedule } from './Schedule';
import { Club } from './Club';
import { Fixture } from '../../../../core/api/models';

export const FixtureCard = ({
  awayClub,
  competition,
  dateTime,
  homeClub,
  id
}: Fixture) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{competition.name}</Text>
      <View style={styles.content}>
        <Club {...homeClub} />
        <Schedule dateTime={dateTime} />
        <Club {...awayClub} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d8d8d8',
    borderRadius: 10,
    padding: 12,
    height: 200,
    justifyContent: 'space-between'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: '#0c0c0c',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  }
});
