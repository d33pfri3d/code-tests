import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  WebView,
  Linking
} from 'react-native';

const renderCard = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <Text>{item.name}</Text>

      <View>
        <Text>{item.geo.address.streetAddress}</Text>
        <Text>{item.geo.address.postalCode}</Text>
      </View>

      <View>
        <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL(item.url)}>
          View in Browser
        </Text>
      </View>
    </View>
  );
};

const Restaurants = () => {
  const flatListRef = useRef(null);
  const [hasErrors, setErrors] = useState(false);
  const [restaurantList, setRestaurantList] = useState();

  useEffect(() => {
      fetch('https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json')
        .then(res => res.json())
        .then(res => setRestaurantList(res.data.restaurant.items))
        .catch((err) => setErrors(err));
  }, []);
  return (
    <FlatList
        ref={flatListRef}
        data={restaurantList}
        renderItem={renderCard}
        keyExtractor={(item) => item.index }
      />
  );
};

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <Restaurants />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#DDD',
    padding: 20
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20
  }
});

export default App;
