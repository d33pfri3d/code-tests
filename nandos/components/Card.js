import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const ratio = 228 / 362;

export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: CARD_WIDTH,
    height: CARD_HEIGHT
  },
});


export default (item => {
  return (
    <View style={styles.card}>
      <Text>{item.item.name}</Text>
      

      <View>
        <Text>{item.item.geo.address.streetAddress}</Text>
        <Text>{item.item.geo.address.postalCode}</Text>
      </View>

      <View>
        <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL(item.item.url)}>
          View in Browser
        </Text>
      </View>
      
    </View>
  )
})
