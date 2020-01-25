import axios from 'axios'
import UserProfile from '../UserProfile';

//const BACKEND_HOST = 'http://localhost:8080'
// const BACKEND_HOST = 'http://3.12.7.5:8080'

const BACKEND_HOST =  UserProfile.getBackendHost()


class ReportService {


  getStudentMonthlyReport(studentId) {
    console.log('getStudentMonthlyReport studentId' + studentId)
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
  getChartData(rptType, studentId) {
    return axios.get(`${BACKEND_HOST}/getChartData`, {
      params: {
        rptType: rptType,
        studentId: studentId
      }
    });
  }
}


export default new ReportService()
