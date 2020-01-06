import axios from 'axios'


const BACKEND_HOST = 'http://localhost:8080'

class ReportService {


    getStudentMonthlyReport(id) {
      return axios.get(`${BACKEND_HOST}/monthlyStudentReport/${id}`);
    }

}

export default new ReportService()
