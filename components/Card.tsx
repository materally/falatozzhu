import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Item } from '../hooks/model';
import { EditIcon, TrashIcon } from '../ui/icons';

interface CardProps {
  item: Item;
  onRemove: (id: string) => void;
  onEdit: (item: Item) => void;
}

export const Card = ({ item, onRemove, onEdit }: CardProps) => {
  const { id, name, description, quantity } = item;

  return (
    <View style={styles.container}>
    
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{ name }</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{ description }</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => onEdit(item)}>
          <EditIcon size={20}/>
        </TouchableOpacity>

        <Text>{ quantity } db</Text>

        <TouchableOpacity onPress={() => onRemove(id)}>
          <TrashIcon size={20}/>
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minWidth: '90%',
    maxWidth: '90%',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  nameContainer: {
    paddingBottom: 5
  },

  name: {
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'uppercase'
  },

  descriptionContainer: {
    paddingBottom: 10
  },

  description: {
    color: '#666'
  },

  quantityContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

});
