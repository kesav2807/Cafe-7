import React from 'react';
import { View, Text, TextInput, Image, FlatList, ScrollView, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';

const categories = ['Ramen', 'Sushi', 'Rolls'];
const foods = [
  { id: 1, name: 'Ichiraku Ramen', price: '$15.00', rating: 4.5, image: { uri: 'https://example.com/ramen.png' } },
  { id: 2, name: 'Philadelphia Roll', price: '$9.50', rating: 4.8, image: { uri: 'https://example.com/roll.png' } },
  { id: 3, name: 'Salmon Sushi', price: '$7.00', rating: 5.0, image: { uri: 'https://example.com/sushi.png' } },
  { id: 4, name: 'Miso Soup', price: '$4.50', rating: 4.3, image: { uri: 'https://example.com/miso.png' } },
];

const FoodApp = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.locationText}>location:</Text>
        <Text style={styles.cityText}>New York</Text>
        <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
        <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profileImage} />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Discount Banner */}
      <ImageBackground source={{ uri: 'https://example.com/discount-banner.png' }} style={styles.banner}>
        <Text style={styles.discountText}>Discount 50%</Text>
        <Text style={styles.learnMore}>learn more...</Text>
      </ImageBackground>

      {/* Food List */}
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.foodCard}>
            <FastImage source={item.image} style={styles.foodImage} resizeMode={FastImage.resizeMode.cover} />
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodPrice}>{item.price}</Text>
            <Text style={styles.foodRating}>⭐ {item.rating}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', paddingHorizontal: 15 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  locationText: { color: '#888' },
  cityText: { fontWeight: 'bold', fontSize: 16 },
  searchIcon: { position: 'absolute', right: 50 },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  categoryContainer: { flexDirection: 'row', marginVertical: 10 },
  categoryButton: { backgroundColor: '#FFF', padding: 10, borderRadius: 20, marginRight: 10 },
  categoryText: { fontSize: 14 },
  banner: { height: 150, justifyContent: 'center', padding: 20, borderRadius: 15, overflow: 'hidden', marginBottom: 15 },
  discountText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  learnMore: { color: '#DDD' },
  foodCard: { flex: 1, backgroundColor: '#FFF', padding: 10, borderRadius: 15, margin: 5, alignItems: 'center' },
  foodImage: { width: 100, height: 80, borderRadius: 10 },
  foodName: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  foodPrice: { fontSize: 14, color: '#666' },
  foodRating: { fontSize: 14, color: '#FFA500', fontWeight: 'bold' },
});

export default FoodApp;
