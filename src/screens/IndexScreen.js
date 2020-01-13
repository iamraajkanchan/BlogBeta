import React from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {

    const { data, addBlogPost } = React.useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({

})

export default IndexScreen;