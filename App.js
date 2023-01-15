import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  return (
    // The style element is not supported in all elements, in View component, it is acceptable, plus we could add inline style just like react in these components. By writing style = {{margin : 23}}
    <View style={styles.container}>
      {/* The style object is created as a form of JS object which will be used to pass to the View component to give it style. */}
      {/* If we add the string "Hello World" without the Text component then this will throw an error */}
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Text style={{margin: 14, borderColor: 'black', borderWidth: 2, padding: 14}}>This is an extra text</Text>
        {/* Notice here the border could not be put like that of the vanilla CSS i.e., border : '2px solid red' */}
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
