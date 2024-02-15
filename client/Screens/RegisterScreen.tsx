import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';


interface FormData {
  email: string;
  description: string; 
}

const RegisterScreen: React.FC = () => {

  const [form, setForm] = useState<FormData>({
    email: '',
    description: ''
  });

  const handleSubmit = () => {
    // Validate form
    // Call API to submit form
    
    Alert.alert('Form submitted!');
  }

  return ( 
  
    
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({...form, email: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={form.description}
        onChangeText={(text) => setForm({...form, description: text})}
        multiline
        numberOfLines={4}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
  }
})

export default RegisterScreen;
