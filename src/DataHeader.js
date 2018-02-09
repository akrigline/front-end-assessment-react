import React, { Component } from 'react';
import refreshSvg from './refresh.svg'
import './DataHeader.css';

class DataHeader extends Component {

  createFilters(filters, addedString, setFilterState) {
    let newFilters = {...filters}
    if (newFilters[addedString]) {
      newFilters[addedString] = !filters[addedString]
    } else {
      newFilters[addedString] = true
    }
    setFilterState(newFilters)
  }

  render() {
    return (
      <header className="DataHeader-header">
        <button onClick={this.props.getData} className="DataHeader--refresh">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="DataHeader--refresh-icon">
            <path d="M24 8V2l-8 8 8 8v-6c6.63 0 12 5.37 12 12 0 2.03-.51 3.93-1.39 5.61l2.92 2.92C39.08 30.05 40 27.14 40 24c0-8.84-7.16-16-16-16zm0 28c-6.63 0-12-5.37-12-12 0-2.03.51-3.93 1.39-5.61l-2.92-2.92C8.92 17.95 8 20.86 8 24c0 8.84 7.16 16 16 16v6l8-8-8-8v6z"/>
            <path d="M0 0h48v48H0z" fill="none"/>
          </svg>
        </button>
        <form className="DataHeader--form">
          <label>
            <input type='checkbox' id='landSuccess' className="DataHeader--form-input" onChange={() => 
              this.createFilters(this.props.filters, 'landSuccess', this.props.setFilterState)
            } />
            <div className="DataHeader--form-checkbox">
              <svg className="DataHeader--form-checkmark" width="14" height="11" viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg"><path d="M5.687 9.227l-4.44-3.813 4.44 3.813L5 10l.687-.773zm0 0l.417.359-.417-.359L13 1 5.687 9.227z" stroke="#13A2E8" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square"/></svg>
            </div>
            Land Success
          </label>

          <label>
            <input type='checkbox' id='reused' className="DataHeader--form-input" onChange={() => 
              this.createFilters(this.props.filters, 'reused', this.props.setFilterState)
            } />
            <div className="DataHeader--form-checkbox">
              <svg className="DataHeader--form-checkmark" width="14" height="11" viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg"><path d="M5.687 9.227l-4.44-3.813 4.44 3.813L5 10l.687-.773zm0 0l.417.359-.417-.359L13 1 5.687 9.227z" stroke="#13A2E8" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square"/></svg>
            </div>
            Reused
          </label>

          <label>
            <input type='checkbox' id='reddit' className="DataHeader--form-input" onChange={() => 
              this.createFilters(this.props.filters, 'reddit', this.props.setFilterState)
            } />
            <div className="DataHeader--form-checkbox">
              <svg className="DataHeader--form-checkmark" width="14" height="11" viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg"><path d="M5.687 9.227l-4.44-3.813 4.44 3.813L5 10l.687-.773zm0 0l.417.359-.417-.359L13 1 5.687 9.227z" stroke="#13A2E8" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square"/></svg>
            </div>
            With Reddit
          </label>
        </form>
      </header>
    );
  }
}

export default DataHeader;
