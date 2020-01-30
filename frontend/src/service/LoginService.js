import axios from 'axios'
import UserProfile from '../UserProfile';


//const BACKEND_HOST = 'http://localhost:8080'
const BACKEND_HOST =  UserProfile.getBackendHost()
// const BACKEND_HOST = 'http://3.12.7.5:8080'


class LoginService {


  isValidAdvisorLogin(username, password) {
      return axios.get(`${BACKEND_HOST}/advisorLogin/`, {
                  params: {
                    username: username,
                    password: password
                      }
                    });
  }
  isValidStudentLogin(username, password) {
      return axios.get(`${BACKEND_HOST}/studentLogin/`, {
                  params: {
                    username: username,
                    password: password
                      }
                    });
  }

}


export default new LoginService()
