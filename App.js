import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

//Module 1 -
// export default function App() {
//   return (
//     // The style element is not supported in all elements, in View component, it is acceptable, plus we could add inline style just like react in these components. By writing style = {{margin : 23}}
//     <View style={styles.container}>
//       {/* The style object is created as a form of JS object which will be used to pass to the View component to give it style. */}
//       {/* If we add the string "Hello World" without the Text component then this will throw an error */}
//       <View style={styles.container}>
//         <Text>Hello World</Text>
//         <Text style={{margin: 14, borderColor: 'black', borderWidth: 2, padding: 14}}>This is an extra text</Text>
//         {/* Notice here the border could not be put like that of the vanilla CSS i.e., border : '2px solid red' */}
//         <Button
//         onPress={null}
//         title="Learn More"
//         color="#743234"
//         accessibilityLabel="Learn more about this purple button"
//         />      
//       </View>      
//       <StatusBar style="auto" />
//     </View>
//   );
// }

//Module 2 -
export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler (enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };
  
  function addGoalHandler () {
    setCourseGoals([...courseGoals, enteredGoalText]);
  };
  

  return (
    <View style={styles.appContainer}>
      <View style={{...styles.inputContainer, flex : 1}}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder='Enter your goal'/>
        <Button onPress={addGoalHandler} title='Add Goal'/>
      </View>
      <View style={{flex : 5}}>
        {courseGoals.map((goal)=><Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}


// These stylesheet objects are used in the case of React Native applications since there are no option for CSS, since the DOM is not present int the case of Native Applications.
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appContainer : {
    flex : 1,
    paddingTop : 50,
    paddingHorizontal : 16
  },
  inputContainer : {    
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginBottom : 20,
    borderBottomWidth : 2,
    borderBottomColor : '#A19C9B'
  },
  textInput : {
    borderColor : '#A19C9B',
    borderWidth : 2,
    padding : 3,
    paddingLeft : 13,
    width : '80%',
    marginRight : 4    
  },
  goalsContainer : {
    flex : 5
  }
});
