import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ListItem = props => {
  const { people } = props;
  const { title, first, last } = people.name;
  const { email } = people;
  return (
    <TouchableOpacity onPress={() => alert(people.cell)} style={styles.container}>
      <View>
        <Image
          source={{ uri: people.picture.thumbnail }}
          style={styles.image}
        />
      </View>
      <View key={first} style={styles.content}>
        <Text style={styles.title}>
          {first} {last}
        </Text>
        <Text style={styles.subtitle}>{email}</Text>
      </View>
      <View style={styles.right}>
        <Ionicons name="ios-arrow-forward" color="#666" size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3a3a3a',
  },
  subtitle: {
    color: '#666',
    fontSize: 16,
    marginTop: 2,
  },
  right: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default ListItem;
