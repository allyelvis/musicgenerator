import React from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

export default function App() {
  const [songPrompt, setSongPrompt] = React.useState('');
  const [isInstrumental, setIsInstrumental] = React.useState(false);

  const toggleSwitch = () => setIsInstrumental(!isInstrumental);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compose a Song</Text>
      <TextInput
        style={styles.input}
        placeholder="Compose a reflective song for times of sadness, calm."
        value={songPrompt}
        onChangeText={setSongPrompt}
      />
      <Switch
        onValueChange={toggleSwitch}
        value={isInstrumental}
      />
      <Text>{isInstrumental ? 'Instrumental' : 'Lyrics'}</Text>

      {/* Style Selection */}
      <View style={styles.styleSelection}>
        <Button title="POP" onPress={() => {}} />
        <Button title="EDM" onPress={() => {}} />
        <Button title="JAZZ" onPress={() => {}} />
      </View>

      {/* Create Button */}
      <Button title="Create" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: '#fff',
  },
  styleSelection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});