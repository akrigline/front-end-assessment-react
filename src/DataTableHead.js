import React, { Component } from 'react';
import './DataTableHead.css';

const columns = [
  {
    key: 'badge',
    label: 'Badge',
    grow: false
  },
  {
    key: 'rocketName',
    label: 'Rocket Name',
    grow: false
  },
  {
    key: 'rocketType',
    label: 'Rocket Type',
    grow: false
  },
  {
    key: 'launchDate',
    label: 'Launch Date',
    grow: false
  },
  {
    key: 'details',
    label: 'Details',
    grow: true
  },
  {
    key: 'id',
    label: 'ID',
    grow: false
  },
  {
    key: 'article',
    label: 'Article',
    grow: false
  },
]

class DataTableHead extends Component {
  render() {
    return (
      <div className="DataTableHead-header">
      {columns.map((column, index) => (
        <button
          className={[
            "DataTable--cell",
            "DataTableHead--button",
            column.grow ? "flex-grow" : null,
            this.props.sort.key === column.key ? "DataTableHead--button-current" : null,
            this.props.sort.key === column.key && this.props.sort.order === 'DESC' ? "DataTableHead--button-reversed" : null
          ].join(' ')}
          onClick={() => this.props.setSortState(column.key)}
          key={`header-${index}`} >
          {column.label}
        </button>
      ))}
      </div>
    );
  }
}

export default DataTableHead;
