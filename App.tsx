import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';

type Dish = {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUri?: string;
};

type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  Starters: undefined;
  Main: undefined;
  Dessert: undefined;
  ChefSelections: { selectedDish: any };
  ChefPage: undefined;
};



const Stack = createNativeStackNavigator();

export default function App() {
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>([]);

  const addDishToSelection = (dish: Dish) => {
    setSelectedDishes((prev) =>[...prev, dish]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menu' }} />
        <Stack.Screen name="Starters"  component={StartersScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Dessert" component={DessertScreen} />
        <Stack.Screen name="ChefSelections" component={ChefSelectionsScreen} options={{ title: "Chef's Selections" }} />
        <Stack.Screen name="ChefPage" component={ChefPage} options={{ title: 'Chef Control Panel' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Home Screen Component
function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Welcome to a Fine Dining experience</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.buttonText}>Enter Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChefPage')}>
        <Text style={styles.buttonText}>Chef Control Panel</Text>
      </TouchableOpacity>
    </View>
  );
}

// Menu Screen Component
function MenuScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.headerText}>Chef's Menu</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Starters</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Starters')}>
          <Text style={styles.buttonText}>View Starters</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Main</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>View Main Dishes</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Dessert</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dessert')}>
          <Text style={styles.buttonText}>View Desserts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Starters Screen
function StartersScreen({ navigation }: { navigation: StackNavigationProp<RootStackParamList, 'Starters'> }) {
  const starters = [
    { id: 1, name: 'Tomato Soup', price: 'R85', description: 'A creamy and flavorful tomato soup.', image: require('./assets/tomato-soup.png') },
    { id: 2, name: 'Bruschetta', price: 'R115', description: 'Grilled bread topped with fresh tomato and basil.', image: require('./assets/bruschetta.png') },
    { id: 3, name: 'Spring Rolls', price: 'R95', description: 'Crispy rolls filled with fresh vegetables.', image: require('./assets/spring-rolls.png') },
  ];

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.headerText}>Available Starters ({starters.length})</Text>
      <View style={styles.gridContainer}>
        {starters.map((starter) => (
          <View key={starter.id} style={styles.card}>
            <Image source={starter.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.cardTitle}>{starter.name}</Text>
            <Text style={styles.cardPrice}>{starter.price}</Text>
            <Text style={styles.cardDescription}>{starter.description}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChefSelections', { selectedDish: starter })}>
              <Text style={styles.buttonText}>Select</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

function MainScreen({ navigation }: { navigation: StackNavigationProp<RootStackParamList, 'Main'> }) {
  const mains = [
    { id: 1, name: 'Grilled Chicken', price: 'R145', description: 'Juicy grilled chicken served with a side of veggies and mashed potatoes.', image: require('./assets/grilled-chicken.png') },
    { id: 2, name: 'Beef Steak', price: 'R200', description: 'Tender beef steak cooked to your preference with a side of garlic butter and fries.', image: require('./assets/beef-steak.png') },
    { id: 3, name: 'Vegetable Stir Fry', price: 'R110', description: 'A healthy mix of seasonal vegetables stir-fried with a soy-based sauce.', image: require('./assets/vegetable-stir-fry.png') },
    { id: 4, name: 'Pasta Carbonara', price: 'R130', description: 'A creamy pasta dish with bacon, parmesan, and a touch of black pepper.', image: require('./assets/pasta-carbonara.png') },
  ];

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.headerText}>Available Mains ({mains.length})</Text>
      <View style={styles.gridContainer}>
        {mains.map((main) => (
          <View key={main.id} style={styles.card}>
            <Image source={main.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.cardTitle}>{main.name}</Text>
            <Text style={styles.cardPrice}>{main.price}</Text>
            <Text style={styles.cardDescription}>{main.description}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChefSelections', { selectedDish: main })}>
              <Text style={styles.buttonText}>Select</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}


function DessertScreen({ navigation }: { navigation: StackNavigationProp<RootStackParamList, 'Dessert'> }) {
  const desserts = [
    { id: 1, name: 'Chocolate Lava Cake', price: 'R95', description: 'A rich chocolate cake with a molten center, served with vanilla ice cream.', image: require('./assets/chocolate-lava-cake.png') },
    { id: 2, name: 'Cheesecake', price: 'R120', description: 'A smooth, creamy cheesecake with a graham cracker crust and a berry compote topping.', image: require('./assets/cheesecake.png') },
    { id: 3, name: 'Fruit Salad', price: 'R70', description: 'A fresh and vibrant mix of seasonal fruits, perfect for a light dessert.', image: require('./assets/fruit-salad.png') },
    { id: 4, name: 'Tiramisu', price: 'R110', description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.', image: require('./assets/tiramisu.png') },
  ];

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.headerText}>Available Desserts ({desserts.length})</Text>
      <View style={styles.gridContainer}>
        {desserts.map((dessert) => (
          <View key={dessert.id} style={styles.card}>
            <Image source={dessert.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.cardTitle}>{dessert.name}</Text>
            <Text style={styles.cardPrice}>{dessert.price}</Text>
            <Text style={styles.cardDescription}>{dessert.description}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChefSelections', { selectedDish: dessert })}>
              <Text style={styles.buttonText}>Select</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}


// Chef's Selections Screen
function ChefSelectionsScreen({ route }: { route: any }) {
  const { selectedDish } = route.params;

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.headerText}>Chef's Selection</Text>
      <View style={styles.card}>
        <Image source={selectedDish.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.cardTitle}>{selectedDish.name}</Text>
        <Text style={styles.cardPrice}>{selectedDish.price}</Text>
        <Text style={styles.cardDescription}>{selectedDish.description}</Text>
      </View>
    </View>
  );
}

function ChefPage({ navigation }: { navigation: any }) {
  const [starters, setStarters] = useState<Dish[]>([]);
  const [mains, setMains] = useState<Dish[]>([]);
  const [desserts, setDesserts] = useState<Dish[]>([]);

  const [newDishName, setNewDishName] = useState('');
  const [newDishPrice, setNewDishPrice] = useState('');
  const [newDishDescription, setNewDishDescription] = useState('');
  const [newDishImageUri, setNewDishImageUri] = useState<string | null>(null);

  // Function to pick an image
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setNewDishImageUri(result.assets[0].uri);
    }
  };


  const addDish = (section: string) => {
    const newDish: Dish = {
      id: Math.random(),
      name: newDishName,
      price: newDishPrice,
      description: newDishDescription,
      imageUri: newDishImageUri || undefined,
    };
    if (section === 'Starters') setStarters((prev) => [...prev, newDish]);
    else if (section === 'Mains') setMains((prev) => [...prev, newDish]);
    else if (section === 'Desserts') setDesserts((prev) => [...prev, newDish]);

    setNewDishName('');
    setNewDishPrice('');
    setNewDishDescription('');
    setNewDishImageUri(null);
  };

  const removeDish = (section: string, id: number) => {
    if (section === 'Starters') setStarters((prev) => prev.filter((dish) => dish.id !== id));
    else if (section === 'Mains') setMains((prev) => prev.filter((dish) => dish.id !== id));
    else if (section === 'Desserts') setDesserts((prev) => prev.filter((dish) => dish.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Chef's Control Panel</Text>
      <TextInput style={styles.input} placeholder="Dish Name" value={newDishName} onChangeText={setNewDishName} />
      <TextInput style={styles.input} placeholder="Dish Price" value={newDishPrice} onChangeText={setNewDishPrice} />
      <TextInput style={styles.input} placeholder="Dish Description" value={newDishDescription} onChangeText={setNewDishDescription} />

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick an Image</Text>
      </TouchableOpacity>

      {newDishImageUri && (
        <Image source={{ uri: newDishImageUri }} style={styles.previewImage} />
      )}

      <TouchableOpacity style={styles.button} onPress={() => addDish('Starters')}>
        <Text style={styles.buttonText}>Add Dish to Starters</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => addDish('Mains')}>
        <Text style={styles.buttonText}>Add Dish to Mains</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => addDish('Desserts')}>
        <Text style={styles.buttonText}>Add Dish to Desserts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  // Main container with a gradient-like effect
  container: {
    flex: 1,
    backgroundColor: '#d3f3fc', // Light blue as the base
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
  // Header styling with pastel pink and centered text
  header: {
    backgroundColor: '#efe5e5', // Pastel pink
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Adds shadow effect on Android
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Neutral text color
  },

  // Logo styling to keep it sharp and centered
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular logo
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    fontSize: 28, // Slightly larger font for emphasis
    fontWeight: 'bold',
    color: '#4a90e2', // Medium blue text color
    textAlign: 'center',
    marginBottom: 30, // Added margin for spacing
    textTransform: 'uppercase', // Makes the text uppercase for a more impactful look
    letterSpacing: 2, // Adds spacing between letters for a modern feel
    shadowColor: '#000', // Subtle shadow to make it pop
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Adds shadow effect on Android
  },

  // General screen text
  screenText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },

  // Buttons with a sleek design
  button: {
    backgroundColor: '#000080', // Medium blue
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25, // Rounded for elegance
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds a shadow on Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Cards with a modern look
  card: {
    width: 160,
    padding: 15,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Subtle shadow
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },

  // Input fields with clean borders
  input: {
    height: 40,
    borderColor: '#4a90e2', // Medium blue border
    borderWidth: 1,
    marginVertical: 10,
    width: '80%',
    paddingLeft: 10,
    borderRadius: 20, // Rounded for sleek look
    backgroundColor: '#fff', // White background for contrast
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  // Section styling
  sectionContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  // Centralized layout for the screen
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  // Grid styling
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },

  // Image preview styling
  previewImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});
