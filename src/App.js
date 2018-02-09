import React, { Component } from 'react';
import DataHeader from './DataHeader';
import DataTableHead from './DataTableHead';
import DataTable from './DataTable';
import getSpace from './helpers/axiosHelper';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          "flight_number": 1,
          "launch_year": "2006",
          "launch_date_unix": 1143239400,
          "launch_date_utc": "2006-03-24T22:30:00Z",
          "launch_date_local": "2006-03-25T10:30:00+12:00",
          "rocket": {
            "rocket_id": "falcon1",
            "rocket_name": "Falcon 1",
            "rocket_type": "Merlin A",
            "first_stage": {
              "cores": [
                {
                  "core_serial": "Merlin 1A",
                  "reused": false,
                  "land_success": false,
                  "landing_type": null,
                  "landing_vehicle": null
                }
              ]
            },
            "second_stage": {
              "payloads": [
                {
                  "payload_id": "FalconSAT-2",
                  "reused": false,
                  "customers": [
                    "DARPA"
                  ],
                  "payload_type": "Satellite",
                  "payload_mass_kg": 20,
                  "payload_mass_lbs": 43,
                  "orbit": "LEO"
                }
              ]
            }
          },
          "telemetry": {
            "flight_club": null
          },
          "reuse": {
            "core": false,
            "side_core1": false,
            "side_core2": false,
            "fairings": false,
            "capsule": false
          },
          "launch_site": {
            "site_id": "kwajalein_atoll",
            "site_name": "Kwajalein Atoll",
            "site_name_long": "Kwajalein Atoll Omelek Island"
          },
          "launch_success": false,
          "links": {
            "mission_patch": "http://spacexpatchlist.space/images/thumbs/falcon_1_flight_1.png",
            "article_link": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
            "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88"
          },
          "details": "Engine failure at 33 seconds and loss of vehicle"
        },
        {
          "flight_number": 2,
          "launch_year": "2007",
          "launch_date_unix": 1174439400,
          "launch_date_utc": "2007-03-21T01:10:00Z",
          "launch_date_local": "2007-03-21T13:10:00+12:00",
          "rocket": {
            "rocket_id": "falcon1",
            "rocket_name": "Falcon 1",
            "rocket_type": "Merlin A",
            "first_stage": {
              "cores": [
                {
                  "core_serial": "Merlin 1A",
                  "reused": false,
                  "land_success": false,
                  "landing_type": null,
                  "landing_vehicle": null
                }
              ]
            },
            "second_stage": {
              "payloads": [
                {
                  "payload_id": "DemoSAT",
                  "reused": false,
                  "customers": [
                    "DARPA"
                  ],
                  "payload_type": "Satellite",
                  "payload_mass_kg": 0,
                  "payload_mass_lbs": 0,
                  "orbit": "LEO"
                }
              ]
            }
          },
          "telemetry": {
            "flight_club": null
          },
          "reuse": {
            "core": false,
            "side_core1": false,
            "side_core2": false,
            "fairings": false,
            "capsule": false
          },
          "launch_site": {
            "site_id": "kwajalein_atoll",
            "site_name": "Kwajalein Atoll",
            "site_name_long": "Kwajalein Atoll Omelek Island"
          },
          "launch_success": false,
          "links": {
            "mission_patch": "http://spacexpatchlist.space/images/thumbs/falcon_1_flight_2.png",
            "article_link": "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
            "video_link": "https://www.youtube.com/watch?v=YMvQsmLv44o"
          },
          "details": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
        }
      ],
      filters: {},
      sort: {
        key: 'id',
        order: 'ASC'
      }
    }
  }

  setFilterState(filters) {
    this.setState(
      (prevState, props) => {
        return {
          ...prevState,
          filters: filters
        }
      }
    )
  }

  setSortState(sortKey) {
    let sort = {
      ...this.state.sort
    }
    if (this.state.sort.key === sortKey) {
      sort.order === 'ASC' ? sort.order = 'DESC' : sort.order = 'ASC'
    } else {
      sort.key = sortKey
      sort.order = 'ASC'
    }

    this.setState(
      (prevState, props) => {
        return {
          ...prevState,
          sort: sort
        }
      }
    )
  }

  getData() {
    getSpace()
    .then( (response) => {
      this.setState((prevState, props) => {
        return {
          ...prevState,
          data: response.data
        }
      })
    })
  }

  componentDidMount() {
    this.getData()
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">SpaceX Launches</h1>
        <DataHeader filters={this.state.filters} getData={this.getData.bind(this)} setFilterState={this.setFilterState.bind(this)} />
        <DataTableHead setSortState={this.setSortState.bind(this)} sort={this.state.sort} />
        <DataTable data={this.state.data} filters={this.state.filters} sort={this.state.sort} />
      </div>
    );
  }
}

export default App;
