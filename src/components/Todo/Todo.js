import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <p
                 onClick={this.props.onClick}
                 style={{
                     fontSize:20,
                     textDecoration: (this.props.completed) ? 'line-through': 'none'
                 }}
                >{this.props.text}</p>
            </div>
        );
    }
}

export default Todo;