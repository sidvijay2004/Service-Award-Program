import axios from 'axios'


const BACKEND_HOST = 'http://localhost:8080'

class ReportService {


    getStudentMonthlyReport(studentId) {
      return axios.get(`${BACKEND_HOST}/monthlyStudentReport/${studentId}`);
    }

    getStudentWeeklyReport(studentId) {
      return axios.get(`${BACKEND_HOST}/weeklyStudentReport/${studentId}`);
    }

    getStudentTotalHours() {
      return axios.get(`${BACKEND_HOST}/getStudentTotalHours`);
    }



}

export default new ReportService()
