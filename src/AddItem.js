import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addItemToList } from './actions'

class AddItem extends Component {

  handleClick = () => {
    const newItem = document.getElementById('new-item').value;
    document.getElementById('new-item').value = '';
    this.props.addItemToList(newItem)
  }

 render() {
    return (
      <div>
          <input id='new-item' type='text' placeholder='Add your new item here' />
          <button onClick={this.handleClick}>Add Item</button>
      </div>
    );
  }
}

export default connect(null, { addItemToList })(AddItem)