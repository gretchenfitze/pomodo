import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Todos = ({ todos }) => (
  <div>
    Todo List:
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text} - {todo.completed ? 'done' : 'not done'}
        </li>)
      )}
    </ul>
  </div>
);

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  })),
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
