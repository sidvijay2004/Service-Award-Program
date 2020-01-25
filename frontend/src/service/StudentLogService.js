import axios from 'axios'
import UserProfile from '../UserProfile';


//const BACKEND_HOST = 'http://localhost:8080'
// const BACKEND_HOST = 'http://3.12.7.5:8080'

const BACKEND_HOST =  UserProfile.getBackendHost()


class StudentLogService {

    getAllStudentLogs() {
        return axios.get(`${BACKEND_HOST}/ListStudentLogs`);
    }

    getAllStudentLogsByStudentId(studentId) {
        return axios.get(`${BACKEND_HOST}/ListStudentLogs/${studentId}`);
    }

    getStudentLog(id) {
        return axios.get(`${BACKEND_HOST}/studentLogs/${id}`);
    }

    deleteStudentLog(id) {
        return axios.delete(`${BACKEND_HOST}/studentLogs/${id}`);
    }
    updateStudentLog(id, studentLog) {
        return axios.put(`${BACKEND_HOST}/studentLogs/${id}`, studentLog);
    }

    createStudentLog(studentLog) {
        return axios.post(`${BACKEND_HOST}/studentLogs/`, studentLog);
    }

}

export default new StudentLogService()
