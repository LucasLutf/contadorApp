import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/components/Counter';
export default function App() {
  return (
    <View style={styles.container}>
      <Counter min='3' max='90'/>
      <Counter max='90'/>
      <Counter min='3'/>
      <Counter min='3' max='90'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});