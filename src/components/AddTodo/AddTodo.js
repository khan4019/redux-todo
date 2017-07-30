import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/todoActions';

class AddTodo extends Component {
    render() {
        return (
            <div>
                <input ref="todoInput" type="text"/>
                <button
                    onClick={()=>{
                        this.props.dispatch(addTodo(this.refs.todoInput.value))
                        this.refs.todoInput.value = '';
                    }}
                >Add</button>
            </div>
        );
    }
}

AddTodo = connect()(AddTodo);
export default AddTodo;