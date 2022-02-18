import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";




    const TransformingButton = (props) => {

        return(

            <TouchableOpacity style = {styles.transButton}>
                <Text style = {styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>

        )
    }


const styles = StyleSheet.create({

       transButton: {
           width: '100%',
           height: '20%',
           backgroundColor: 'white',
           justifyContent: 'center',
           alignItems: 'center',
           borderRadius: 38,
           flexDirection: 'column',
           marginBottom: 10,
       },

       buttonText: {
        color: '#045b62',
        fontFamily: 'poppin',
        fontWeight: 'bold',
        fontSize: 20,
      },
    
    
});
    
    

export default TransformingButton;