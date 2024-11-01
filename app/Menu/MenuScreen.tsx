import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useFoodData } from '../../hooks/useLocalStorage';
import FilterBar from './FilterBar';
import FoodItem from './FoodItem';
import { Food } from '../../app/types';

const MenuScreen = () => {
  const [foods] = useFoodData();
  const [filter, setFilter] = useState<{ type: string; category: string }>({ type: '', category: '' });
  const [cart, setCart] = useState<Food[]>([]);

  const addToCart = (food: Food) => {
    setCart((prevCart) => [...prevCart, { ...food, quantity: 1 }]);
  };

  const filteredFoods = foods.filter((food: Food) =>
    (filter.type ? food.type === filter.type : true) &&
    (filter.category ? food.category === filter.category : true)
  );

  return (
    <View>
      <FilterBar filter={filter} setFilter={setFilter} />
      <FlatList
        data={filteredFoods}
        renderItem={({ item }) => <FoodItem food={item} addToCart={addToCart} />}
        keyExtractor={(item: Food) => item.id.toString()}
      />
      <Text>Carrito: {cart.length} items</Text>
    </View>
  );
};

export default MenuScreen;
