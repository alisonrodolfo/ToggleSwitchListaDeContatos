import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

const Header = props => (
  <View style={style.container}>
    <Text style={style.title}>{props.title}</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#2a61ba',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: imageWidth, //Dimensions.get('window').width,
    minHeight: 50,
    marginVertical: '1%',
    padding: '2%',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Header;
