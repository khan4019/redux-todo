import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="Redux Relax Todo"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <AddTodo></AddTodo>
        <VisibleTodoList></VisibleTodoList>
      </div>
    );
  }
}

export default App;
