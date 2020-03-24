import * as React from 'react';
import axios from 'axios';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';
import Header from './components/Header';
import Contatos from "./screens/ContactsList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      textDisplay: false,
    };
  }

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ textDisplay: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  //promises
  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=10')
      .then(response => {
        const {results} = response.data;
        this.setState({people: results })
      })

  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          {/*Text to show the text according to switch condition*/}
          <Text>
            {this.state.textDisplay
              ? <Header title="Ocultar Lista de Contatos" />
              : <Header title="Mostrar Lista de Contatos" /> }
          </Text>
          {/*Switch with value set in constructor*/}
          {/*onValueChange will be triggered after switch condition changes*/}
          <Switch
            style={{ marginTop: 10 }}
            onValueChange={this.toggleSwitch}
            value={this.state.textDisplay}
          />
        </View>

       
        {this.state.textDisplay ? (
          <Contatos peoples={this.state.people} />
        ) : (
          <Text />
        )}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});


