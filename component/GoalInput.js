import { StyleSheet, View, TextInput, Button } from "react-native";
function GoalInput(props){
    return (
        <View style={{...styles.inputContainer, flex : 1}}>
            <TextInput style={styles.textInput} onChangeText={props.goalInputHandler} placeholder='Enter your goal'/>
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
    padding : 3,
    paddingLeft : 13,
    width : '80%',
    marginRight : 4    
  }
})