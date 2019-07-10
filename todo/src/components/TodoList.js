import React, { Component } from 'react';

class TodoList extends Component {  
  
  render() {
    return (
      <div className="list">
          <input type="text" placeholder="New Todo!" />
      </div>
      );
    }
  }

export default TodoList;
