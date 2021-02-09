// import React from 'react';
import React, { Component, component } from 'react';

import './item-status-filter.css'

// const ItemStatusFilter = () => {
//    return (
//       <div className="btn-group">
//          <button type="button"
//             className="btn btn-info">All</button>
//          <button type="button"
//             className="btn btn-outline-secondary">Active</button>
//          <button type="button"
//             className="btn btn-outline-secondary">Done</button>
//       </div>

//    )
// }

export default class ItemStatusFilter extends Component {



   render() {
      return (
         <div className="btn-group">
            <button type="button"
               className="btn btn-info"
               onClick={() => this.props.onStatusChange('')}
            >All</button>
            <button type="button"
               className="btn btn-outline-secondary"
               onClick={() => this.props.onStatusChange('0')}
            >Active</button>
            <button type="button"
               className="btn btn-outline-secondary"
               onClick={() => this.props.onStatusChange('1')}
            >Done</button>
         </div>

      )
   }
}

// export default ItemStatusFilter;