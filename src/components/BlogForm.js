import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const BlogForm = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = React.useState(initialValues.title);
    const [content, setContent] = React.useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={ text => setTitle(text)}/>
            <Text style={styles.label}>Enter Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={ text => setContent(text)}/>
            <Button 
                title="Save Blog Post" 
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

BlogForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black'
    },
    label: {
        margin: 15,
        fontSize: 20,
        marginBottom: 10
    }
});

export default BlogForm;