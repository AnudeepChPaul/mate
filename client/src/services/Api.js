import axios from 'axios'

export default () => (axios.create({
  baseURL: 'http://serv.pwa.in'
}))
