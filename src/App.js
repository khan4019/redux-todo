import React, { Component } from 'react';

import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Relax Todo</h1>
        <AddTodo></AddTodo>
        <VisibleTodoList></VisibleTodoList>
      </div>
    );
  }
}

export default App;
