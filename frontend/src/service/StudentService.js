  import axios from 'axios'
  import UserProfile from '../UserProfile';

  //const BACKEND_HOST = 'http://localhost:8080'
// const BACKEND_HOST = 'http://3.12.7.5:8080'

const BACKEND_HOST =  UserProfile.getBackendHost()


class StudentService {

    getAllStudents() {
        return axios.get(`${BACKEND_HOST}/ListStudents`);
    }

    searchStudents(searchText) {
        console.log('Inside search Students (StudServ)')
        return axios.get(`${BACKEND_HOST}/searchStudents/`, {
                    params: {
                      searchText: searchText
                        }
                      });
    }

    getStudent(id) {
      return axios.get(`${BACKEND_HOST}/students/${id}`);
    }

    deleteStudent(id) {

    return axios.delete(`${BACKEND_HOST}/students/${id}`);
  }
  updateStudent(id, student) {
      return axios.put(`${BACKEND_HOST}/students/${id}`, student);
  }

  createStudent(student) {
      return axios.post(`${BACKEND_HOST}/students/`, student);
  }

}

export default new StudentService()
