import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItemFromList } from './actions'

import ListItem from './ListItem';

class List extends Component {
  render() {
    const { items, removeItemFromList } = this.props;
    return (
      <div>
        <ul>
          {
            items.map(
              (item, index) => {
                return <ListItem
                  key={index}
                  item={item}
                  index={index}
                  removeItem={removeItemFromList}
                />
              }
            ) 
          }
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ( {items: state.items} )

export default connect(mapStateToProps, {removeItemFromList})(List)