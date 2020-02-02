import Cookies from 'universal-cookie';

var UserProfile = (function() {
  const cookies = new Cookies();

  const ADVISOR = "advisor"
  const STUDENT = "student"
  
  var getBackendHost = function() {
    return 'http://' + window.location.hostname + ':8080';    
  };
  var getName = function() {
    return cookies.get('full_name');    
  };

  var setName = function(name) {
    cookies.set('full_name', name, { path: '/' });
    
  };
  var getStudentId = function() {
    return cookies.get('studentId');    
  };

  var setStudentId = function(studentId) {
    cookies.set('studentId', studentId, { path: '/' });
    
  };
  var getAdvisorId = function() {
    return cookies.get('advisorId');    
  };

  var setAdvisorId = function(advisorId) {
    cookies.set('advisorId', advisorId, { path: '/' });
    
  };

  var getStudentLogId = function() {
    return cookies.get('studentLogId');    
  };
  
  var setStudentLogId = function(studentLogId) {
    cookies.set('studentLogId', studentLogId, { path: '/' });
    
  };
  var getLoginType = function() {
    return cookies.get('loginType');    
  };
  var setStudentLogin = function() {
    setLoginType(STUDENT);
    
  };
  var setAdvisorLogin = function() {
    setLoginType(ADVISOR);
    
  };
  var setLoginType = function(lgType) {
    cookies.set('loginType', lgType, { path: '/' });
    
  };
  var removeCookies = function() {
    cookies.remove('loginType');
    cookies.remove('studentLogId');
    cookies.remove('studentId');
    cookies.remove('advisorId');
    cookies.remove('email');
    cookies.remove('full_name');
    
  };

  var isStudent = function() {
    if(this.getLoginType() ===STUDENT){
      return true;
    }
      return false;
  };

  var isAdvisor = function() {
    if(this.getLoginType() === ADVISOR){
      return true;
    }
      return false;
  };

  var isLoggedIn = function() {
    console.log('z1')
    if(this.getLoginType() ===STUDENT || this.getLoginType() === ADVISOR){
      return true;
    }
    else{
      console.log('z3')
      return false;
    }
  };
  
  var getEmail = function() {
    return cookies.get('email');    
  };
  
  var setEmail = function(email) {
    cookies.set('email', email, { path: '/' });
    
  };


  return {
    getBackendHost: getBackendHost,
    getName: getName,
    setName: setName,
    getStudentId: getStudentId,
    setStudentId: setStudentId,
    getAdvisorId: getAdvisorId,
    setAdvisorId: setAdvisorId,
    getLoginType: getLoginType,
    setLoginType: setLoginType,
    getStudentLogId: getStudentLogId,
    setStudentLogin: setStudentLogin,
    setAdvisorLogin: setAdvisorLogin,
    setStudentLogId: setStudentLogId,
    removeCookies: removeCookies,
    isLoggedIn: isLoggedIn,
    isStudent: isStudent,
    isAdvisor: isAdvisor,
    getEmail: getEmail,
    setEmail: setEmail

  }

})();

export default UserProfile;