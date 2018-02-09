import React, { Component } from 'react';
import moment from 'moment'
import linkSvg from './link.svg'
import './DataTable.css';

const filterFunction = (filter, dataEntry) => {
  switch (filter) {
    case 'landSuccess':
      return dataEntry.launch_success
    case 'reused':
      return Object.values(dataEntry.reuse).includes(true)
    case 'reddit':
      const redditLink = Object.keys(dataEntry.links).includes('reddit_launch')
      return redditLink && dataEntry.links.reddit_launch !== null
    default:
      return true
  }
}
const sortNumberFunction = (a, b) => {
  return a - b
}

const sortStringFunction = (a, b) => {
    const stringA = a && a.toUpperCase(); // ignore upper and lowercase
    const stringB = b && b.toUpperCase(); // ignore upper and lowercase
    if (stringA < stringB) {
      return -1;
    }
    if (stringA > stringB) {
      return 1;
    }
  
    // strings must be equal
    return 0;
}

class DataTable extends Component {
  render() {

    let displayData = [...this.props.data]
    const hasFilter = Object.values(this.props.filters).includes(true)

    const sortFunction = (a, b) => {
      switch (this.props.sort.key) {
        case 'badge':
          return sortStringFunction(a.links.mission_patch, b.links.mission_patch)
        case 'rocketName':
          return sortStringFunction(a.rocket.rocket_name, b.rocket.rocket_name)
        case 'rocketType':
          return sortStringFunction(a.rocket.rocket_type, b.rocket.rocket_type)
        case 'launchDate':
          return moment(a.launch_date_utc).diff(moment(b.launch_date_utc))
        case 'details':
          return sortStringFunction(a.details, b.details)
        case 'id':
          return sortNumberFunction(a.flight_number, b.flight_number)
        case 'article':
          return sortStringFunction(a.links.article_link, b.links.article_link)
      }  
    }

    if (hasFilter) {
      const filters = Object.keys(this.props.filters)
        .filter((option) => {
          return this.props.filters[option]
        })

      displayData = displayData.filter((dataEntry) => {
        const boolArray = filters.map(filter => {
          return filterFunction(filter, dataEntry)
        })
        return boolArray.includes(true)
      })
    }

    displayData.sort(sortFunction)

    if (this.props.sort.order === 'DESC') {
      displayData.reverse()
    }

    return (
      <div>
        {displayData.map((item, index) => (
        <div className="DataTable-row" key={index}>
          <div className="DataTable--cell"><img src={item.links.mission_patch} alt='mission patch' className="DataTable--patch"/></div>
          <div className="DataTable--cell">{item.rocket.rocket_name}</div>
          <div className="DataTable--cell">{item.rocket.rocket_type}</div>
          <div className="DataTable--cell">{moment(item.launch_date_utc).utcOffset(-300).format('MM/DD/YYYY')}</div>
          <div className="DataTable--cell flex-grow">{item.details}</div>
          <div className="DataTable--cell">{item.flight_number}</div>
          <div className="DataTable--cell"><a href={item.links.article_link} target='_blank'><img src={linkSvg} className="DataTable--link" /></a></div>
        </div>
        ))}
      </div>
    );
  }
}

export default DataTable;
