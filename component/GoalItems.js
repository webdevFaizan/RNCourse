import { StyleSheet, View, Text } from "react-native";
function GoalItems(props){
    return (
        // IMPORTANT : Notice the custom mapping method is now removed which was being used in the case of ScrollView, but instead a separate function is itself created such that the renderItem is now taking an object from the list of arrays and then extracting the data from it and then displaying.
        <View style={styles.goalItem}>
            {/* IMPORTANT : Since the style element is applied to the View Component, there is an important difference between the actual Cascading Style Sheets and this CSS like JS codes. In here, the style of View is not going to be applied to the children component, and the child component is Text. This is why in order to have specific color of the Texts we need to give it separate color. */}
                <Text style={styles.goalText}>{props.itemObject.item.data}</Text>
        </View>
    )
}

export default GoalItems;

const styles = StyleSheet.create({
    goalItem : {
        margin : 8,
        padding : 8,
        borderRadius :6,
        backgroundColor : '#5e0acc',
        color : 'white',  //IMPORTANT : This property is applied to the View element, This color element does not have any effect on the child elements like the view elements, so we need to write down the color property separately.
        
      },
      goalText : {
        color : 'white'
      }
})