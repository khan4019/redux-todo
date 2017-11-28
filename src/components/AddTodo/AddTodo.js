import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/todoActions';
import RaisedButton from 'material-ui/RaisedButton';
                
import TextField from 'material-ui/TextField';

class AddTodo extends Component {
    render() {
        return (
            <div>
                
                <TextField
                    hintText="Things to commit you do"
                    floatingLabelText="Your todo"
                    type="text"
                    ref="fancyInput"
                    />
                <RaisedButton 
                    label="Primary" 
                    primary={true} 
                    onClick={()=>{
                        this.props.dispatch(addTodo(this.refs.fancyInput.input.value))
                        this.refs.fancyInput.input.value = '';
                    }}
                />
            </div>
        );
    }
}

AddTodo = connect()(AddTodo);
export default AddTodo;