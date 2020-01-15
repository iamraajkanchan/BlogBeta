import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import Icon from 'react-native-vector-icons/FontAwesome';

const ShowScreen = ({ navigation }) => {
    
    const { state } = React.useContext(Context);

    const blogPost = state.find( blogPost => blogPost.id === navigation.getParam('id'));

    return (
        <View style={ styles.container }>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation}) => {
    return (
        { headerRight: () => (
            <TouchableOpacity onPress={ () => navigation.navigate( 'Edit', { id: navigation.getParam('id') } ) }>
                <Icon style={{marginRight: 30}} name="edit" size={30} color="gray" />
            </TouchableOpacity>
        )}
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ShowScreen;