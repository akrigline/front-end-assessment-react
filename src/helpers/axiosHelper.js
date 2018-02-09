import axios from 'axios'

const getSpace = () => {
  return axios.get('https://api.spacexdata.com/v2/launches')
}

export default getSpace