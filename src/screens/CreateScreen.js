import React from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const CreateScreen = ({navigation}) => {
  const {addBlogPost} = React.useContext(Context);

  return (
    <BlogForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate('Index');
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
