import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}
