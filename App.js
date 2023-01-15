import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      {/* The style object is created as a form of JS object which will be used to pass to the View component to give it style. */}
      {/* If we add the string "Hello World" without the Text component then this will throw an error */}
      <View>
        <Text>Hello World</Text>
      </View>
      <View>
        <Button
        onPress={null}
        title="Learn More"
        color="#743234"
        accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


// These stylesheet objects are used in the case of React Native applications since there are no option for CSS, since the DOM is not present int the case of Native Applications.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
