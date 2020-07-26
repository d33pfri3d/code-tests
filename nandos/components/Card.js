import React from 'react';
import { View, Text, Dimensions, StyleSheet, Linking } from 'react-native';

const { width } = Dimensions.get('window');
const ratio = 228 / 420;

export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: 'white',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  headingText: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  addressContainer: {
    marginTop: 20,
    marginBottom: 20
  },

  linkStyle: {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  }
});


export default (item => {
  return (
    <View style={styles.card}>
      <Text style={styles.headingText}>{item.item.name}</Text>
      

      <View style={styles.addressContainer}>
        <Text>{item.item.geo.address.streetAddress}</Text>
        <Text>{item.item.geo.address.postalCode}</Text>
      </View>

      <View>
        <Text style={styles.linkStyle}
          onPress={() => Linking.openURL(item.item.url)}>
          Visit Restaurant Site >>
        </Text>
      </View>
      
    </View>
  )
})
