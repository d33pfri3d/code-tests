import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Card = () => {
  return <View></View>;
};

const Restaurants = () => {
  const [hasErrors, setErrors] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json',
      );
      res
        .json()
        .then((res) => setData(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  });

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
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
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  }
});

export default App;
