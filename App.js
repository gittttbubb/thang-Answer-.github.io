import * as React from 'react';
import { Button, View, Text,StyleSheet,ImageBackground,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WelcomeScreen ({navigation}){
  return (
    <View style={styles.container1}>
      
      <ImageBackground style={styles.image1}
        source = {require('./image/anh1.jpg')}
      />
      <Image style={styles.logo}
        source={require('./image/logo.jpg')}
      />
      <View style={styles.line}>
        <Button style={styles.line1}title="Go to ViewImageScreen" onPress={() => navigation.navigate('View')}/>
        <View ></View>
        <View style={styles.line2}></View>
        
      </View>
      
    </View>
  );
}

function ViewImageScreen({navigation}){
  return (
    <View style={styles.container2}>
      <Button style={styles.line3} title="Go to WelcomeScreen" onPress={() => navigation.navigate('Welcome')}/>
      <ImageBackground style={styles.image2}
        source = {require('./image/images.jpg')}
      />
      <View style={styles.line4}></View> 
    </View>
  );
}
const Stack =createNativeStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRoute = "Welcome">
        <Stack.Screen name="Welcome" component = {WelcomeScreen}/>
        <Stack.Screen name="View" component = {ViewImageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

  container1:{
    flex: 1,
  },
 
  image1: {
    flex: 1,
    height: 1000,
    width: 1000,
    position:'relative',
  },
  logo:{
    marginTop:100,
    height:100,
    width:100,
    position:'absolute',
    alignSelf:'center'  ,
  },
  line1:{
    display:'flex', 
    alignItems:'stretch',
  },
  line1: {
    backgroundColor: '#FF99CC',
    height: 50,
  },
  line2: {
    backgroundColor: '#6699FF',
    height: 50,
  },
 
 
  container2:{
    flex: 1,
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    alignContent:'center',
    margin: 50,
  },
  image2: {
    
    height: 500,
    width: 450,
  },
  line3: {
    backgroundColor: '#FF99CC',
    alignSelf:'flex-start',
    height: 50,
    width:50,
  },
  line4: {
    backgroundColor: '#6699FF',
    alignSelf:'flex-start',
    height: 50,
    width:50,
  },
 });
export default App;
// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
