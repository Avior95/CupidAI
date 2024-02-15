import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Button } from 'react-native-paper';


interface NavbarProps {
  navigation: any; 
}

const Navbar: React.FC<NavbarProps> = ({navigation}) => {

  return (
    <View style={styles.navbar}>
    <Button 
      mode="contained" 
      onPress={() => navigation.navigate('Home')}>
      Home
    </Button>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('Register')}>
      Register  
    </Button>
  </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60, 
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-between', 
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  },
  buttons: {
    flexDirection: 'row'
  }
});

export default Navbar;
