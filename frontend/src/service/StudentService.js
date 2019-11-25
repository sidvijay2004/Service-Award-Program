import axios from 'axios'


const BACKEND_HOST = 'http://localhost:8080'

class StudentService {

    getAllStudents() {
        return axios.get(`${BACKEND_HOST}/StudentList`);
    }
}

export default new StudentService()
