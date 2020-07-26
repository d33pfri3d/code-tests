import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

const renderCard = ({item}) => {
  return (
  <Text>{item.name}</Text>
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
      />
  );
};

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Restaurants />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  }
});

export default App;
