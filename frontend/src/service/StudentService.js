import axios from 'axios'


const BACKEND_HOST = 'http://localhost:8080'

class StudentService {

    getAllStudents() {
        return axios.get(`${BACKEND_HOST}/StudentList`);
    }

    getStudent(id) {
      return axios.get(`${BACKEND_HOST}/students/${id}`);
    }

    deleteStudent(id) {

    return axios.delete(`${BACKEND_HOST}/students/${id}`);
  }

}

export default new StudentService()
