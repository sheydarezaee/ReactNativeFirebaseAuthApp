import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './Components/Common'

class App extends Component {
  render() {
  	return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
  	);
  }
}
export default App;


//one strategy not to import several files in to one file, and to avoid repetition
//of import -- from ---,  use index.js file
//inside index.js, we import Header, Button, CardSection and Card, and we immediately export them
//then if any of the other comonents wants to have acess to Header and Card for example
//will be able to access them just through import { Header, Card } from './Components/Common'
// we do not specify index.js file after common directory here, cuz if you leave off very particular directory , 
// it will by default get access to the index.js file of that directory

