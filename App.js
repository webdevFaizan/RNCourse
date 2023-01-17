import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList    //This flatList is of high importance, since internally this will make the list of large items very much optimised. And the loading will be done only when we scroll near to them, and this loading will be done lazily. Not rendering the whole list during the first render, this will make the app much more optimised. This is how the infinite scroll of facebook and instagram work.
 } from 'react-native';

import GoalItems from './component/GoalItems';
import GoalInput from './component/GoalInput';

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
    // setCourseGoals([...courseGoals, enteredGoalText]);   //This is not a recommended method to update the new state, if the new state depends on the previous state.
    //IMPORTANT :  The ABOVE ONE is an inefficient code, as we are taking the old list, spreading it then adding a new list and then changing the state. This seems very inefficient because of adding in O(1) by just pushing, we are actually adding in O(N)
    
    // DOUBT AND RESEARCH : How is the below code better and more efficient than the above code?
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {data : enteredGoalText, id : Math.random().toString()}]); //This is recommended by the react docs, directly changing the value of the State is not recommended, this should be done using function call.
    setEnteredGoalText('');

  };
  

  return (
    <View style={styles.appContainer}>
      
        <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} enteredGoalText={enteredGoalText}/>
      
      <View style={{flex : 5}}>
        <FlatList
        alwaysBounceVertical= {true}    //DOUBT : This does not seem to work
        data={courseGoals}  //IMPORTANT : This shows which data should be rendered, but the renderItem prop tells FlatList, how the data should be rendered. And keep this in mind, this behaviour of renderItem is what is making only the visible partial list rendered, but at the same time, the next items from the long list will only be rendered when we scroll furthur.
        renderItem={(itemObject)=>{ //One thing to note here is that this itemObject is actually an Object, not a string element. So to extract the data we need to use itemObject.item.data 
          return (
            <GoalItems itemObject={itemObject}/>
          )
        }}
        keyExtractor = {(item,index)=>{return item.id}} //VERY IMPORTANT, PRIORITY : This keyExtractor property is kept separate in the case of FlatList because the key that is coming from the stream of data could be from APIs, and APIS has their own set of rules about what should be the key, so we are extracting it separately.
        // The reason why this keyExtractor is kept separate, is that each View item from the list will require the unique list item.
        />
      </View>
    </View>
  );
}


// These stylesheet objects are used in the case of React Native applications since there are no option for CSS, since the DOM is not present int the case of Native Applications.
// IMPORANT : The following styling object might look like CSS, but there are certain differences, there is no inheritance and no cascading.
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
  goalsContainer : {
    flex : 5
  }
});
