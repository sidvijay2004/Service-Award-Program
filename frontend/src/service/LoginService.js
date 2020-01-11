import axios from 'axios'


const BACKEND_HOST = 'http://localhost:8080'

class LoginService {


  isValidLogin(username, password) {
      return axios.get(`${BACKEND_HOST}/login/`, {
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
