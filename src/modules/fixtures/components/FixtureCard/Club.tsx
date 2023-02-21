import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Club as ClubTypes } from '../../../../core/api/models';
import { Spacer } from '../../../../components/Spacer';
import { getSquareDiagonale } from '../../utils/getSquareDiagonale';

const LOGO_WIDTH = 50;
const diagonale = getSquareDiagonale(LOGO_WIDTH, LOGO_WIDTH);

export const Club = ({ logo, name }: ClubTypes) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
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
    width: LOGO_WIDTH,
    height: LOGO_WIDTH
  },
  logoContainer: {
    width: diagonale,
    height: diagonale,
    borderRadius: diagonale / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#0c0c0c',
    fontSize: 16,
    textAlign: 'center'
  }
});
