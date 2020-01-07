import axios from 'axios'


const BACKEND_HOST = 'http://localhost:8080'

class ReportService {


    getStudentMonthlyReport(studentId) {
      return axios.get(`${BACKEND_HOST}/monthlyStudentReport/${studentId}`);
    }

    getStudentWeeklyReport(studentId) {
      return axios.get(`${BACKEND_HOST}/weeklyStudentReport/${studentId}`);
    }

}

export default new ReportService()
