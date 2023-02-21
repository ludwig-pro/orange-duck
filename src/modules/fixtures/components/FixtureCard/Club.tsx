import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Club as ClubTypes } from '../../../../core/api/models';
import { Spacer } from '../../../../components/Spacer';

export const Club = ({ logo, name }: ClubTypes) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
      <Spacer size="10" />
      <Text style={styles.text} numberOfLines={2}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: '30%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo: {
    width: 75,
    height: 75,
    // borderRadius: 75 / 2,
    backgroundColor: '#737373'
  },
  text: {
    color: '#0c0c0c',
    fontSize: 16,
    textAlign: 'center'
  }
});
