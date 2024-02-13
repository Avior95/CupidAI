import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

interface NavbarProps {
  onPressHome: () => void;
  onPressRegister: () => void;
}

const Navbar: React.FC<NavbarProps> = ({onPressHome, onPressRegister}) => {

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>App Name</Text>
      
      <View style={styles.buttons}>
        <Button title="Home" onPress={onPressHome} />
        <Button title="Register" onPress={onPressRegister} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 80, 
    backgroundColor: 'blue',
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
