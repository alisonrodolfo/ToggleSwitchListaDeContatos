import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import ListItem from '../components/ListItem';

import { Row, Separator } from '../components/Row';
import users from '../data/users';

const Contatos = props => {
  const { peoples } = props;
  const items = peoples.map(people => (
    <ListItem key={people.name.first} people={people} />
  ));

  return <View style={styles.container}>{items}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },
});

export default Contatos;
