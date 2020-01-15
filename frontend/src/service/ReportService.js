import axios from 'axios'


const BACKEND_HOST = 'http://localhost:8080'
// const BACKEND_HOST = 'http://3.12.7.5:8080'

class ReportService {


    getStudentMonthlyReport(studentId) {
      return axios.get(`${BACKEND_HOST}/monthlyStudentReport/${studentId}`);
    }

    getStudentWeeklyReport(studentId) {
      return axios.get(`${BACKEND_HOST}/weeklyStudentReport/${studentId}`);
    }

    getStudentTotalHours(awardLevel) {
      return axios.get(`${BACKEND_HOST}/getStudentTotalHours/`, {
                  params: {
                    awardLevel: awardLevel
                      }
                    });
    }



}

export default new ReportService()
