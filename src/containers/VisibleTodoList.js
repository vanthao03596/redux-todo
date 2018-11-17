import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from '../components/TodoList';
import * as actions from '../actions';

const VisibleTodoList = props => {
  return <TodoList {...props} />;
};

const mapStateToProps = state => ({
  visibleTodos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);
