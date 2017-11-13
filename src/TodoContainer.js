import React, { Component } from 'react';
import List from './List';
import AddItem from './AddItem';

class TodoContainer extends Component {

 render() {
    return (
      <div className="container">
        <h1>My Awesome Todo List</h1>
        <AddItem />
        <List />
      </div>
    );
  }
}

export default TodoContainer
