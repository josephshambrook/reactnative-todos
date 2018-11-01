import React from "react";
import { View, Text } from 'react-native';
import { connect } from "react-redux";
// import Todo from "./Todo.jsx";

const TodoList = props => {
  return (
    <View><Text>Hello world</Text></View>
  );
};

const mapStateToProps = state => {
  return {
    list: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
