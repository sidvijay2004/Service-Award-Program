  import axios from 'axios'
  import UserProfile from '../UserProfile';

  //const BACKEND_HOST = 'http://localhost:8080'
// const BACKEND_HOST = 'http://3.12.7.5:8080'

const BACKEND_HOST =  UserProfile.getBackendHost()


class AdvisorService {

    getAdvisor(id) {
      return axios.get(`${BACKEND_HOST}/advisor/${id}`);
    }


  updateAdvisor(id, advisor) {
      return axios.put(`${BACKEND_HOST}/advisor/${id}`, advisor);
  }

  
}

export default new AdvisorService()
