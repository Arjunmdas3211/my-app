import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from "./src/Deck";

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://images-na.ssl-images-amazon.com/images/I/81cNoJ0XmJL._SL1280_.jpg' },
  { id: 2, text: 'Card #2', uri: 'https://i.pinimg.com/originals/e8/c7/c4/e8c7c4d4e14a9e3b21faf3d7b37c5b03.jpg' },
  { id: 3, text: 'Card #3', uri: 'https://images-na.ssl-images-amazon.com/images/I/81cNoJ0XmJL._SL1280_.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'https://images-na.ssl-images-amazon.com/images/I/81cNoJ0XmJL._SL1280_.jpg' },
];


class App extends React.Component{
  renderCard(item){
    return(
        <Card
            key={item.id}
        >
          <Card.Image source={{uri: item.uri}} />
          <Card.Title>{item.text}</Card.Title>
          <Text style={{marginBottom: 10}}>
            I can customise  this component.
          </Text>
          <Button
            icon={{ name: 'code'}}
            title="View"
            backgroundColor="#03A9F4"
          />
        </Card>
    );
  }
  render(){
  return (
    <View style={styles.container}>
      <Deck
      data={DATA}
      renderCard={this.renderCard}

      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;