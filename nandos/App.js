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
  Linking,
  Animated
} from 'react-native';
import RestaurantCard from './components/RestaurantCard';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Restaurants = () => {
  
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: {y} }}], { useNativeDriver: true } )


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
    <AnimatedFlatList
      scrollEventThrottle={16}
        ref={flatListRef}
        data={restaurantList}
        renderItem={({item, index}) => ( <RestaurantCard {...{item, index, y}} /> )}
        keyExtractor={(item) => item.index }
        {...{onScroll}}
      />
  );
};

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.scrollView}>
            <Restaurants />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black'
  },
});

export default App;
