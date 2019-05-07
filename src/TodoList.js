import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
