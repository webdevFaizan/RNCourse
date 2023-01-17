import { StyleSheet, View, TextInput, Button } from "react-native";
function GoalInput(props){
    return (
        <View style={{...styles.inputContainer, flex : 1}}>
            <TextInput 
            style={styles.textInput} 
            onChangeText={props.goalInputHandler} 
            value={props.enteredGoalText}       //This addition of value will create the two way binding, which means when the state has to be changed to empty string then this will help us reflect back.
            placeholder='Enter your goal'
            />
            <Button onPress={props.addGoalHandler} title='Add Goal'/>      
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({        
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
    borderRadius : 8,
    padding : 3,
    paddingLeft : 13,
    width : '80%',
    marginRight : 4    
  }
})