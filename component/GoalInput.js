import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
//IMPORTANT : The button component uses the pressable component internally, which means that we could build the custom Button by default by creating the pressable component and customizing it.
function GoalInput(props){
    return (
        <Modal visible={props.modalButtonState} animationType={'slide'}>
            <View style={{...styles.inputContainer, flex : 1}}>
                <TextInput 
                style={styles.textInput} 
                onChangeText={props.goalInputHandler} 
                value={props.enteredGoalText}       //This addition of value will create the two way binding, which means when the state has to be changed to empty string then this will help us reflect back.
                placeholder='Enter your goal'
                />                
                <View style= {styles.buttonContainer}>
                    <View style={{margin : 10}}>
                        <Button onPress={props.addGoalHandler} title='ADD GOAL'/>      
                    </View>
                    <View style={{margin : 10}}>
                        <Button title="CANCEL" onPress={props.modalButtonPressed}/>
                    </View>
                </View>
            </View>
        </Modal>        
    )
}

export default GoalInput;

const styles = StyleSheet.create({        
    inputContainer : {    
      flexDirection : 'column',
      justifyContent : 'center',
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
  },
  buttonContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    // margin : 10
  }
})