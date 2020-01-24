import Cookies from 'universal-cookie';

var UserProfile = (function() {
  const cookies = new Cookies();

  const ADMIN = "admin"
  const STUDENT = "student"
  

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

  var getStudentLogId = function() {
    return cookies.get('studentLogId');    
  };

  var setStudentLogId = function(studentLogId) {
    cookies.set('studentLogId', studentLogId, { path: '/' });
    
  };
  var getLoginType = function() {
    return cookies.get('loginType');    
  };

  var setLoginType = function(lgType) {
    cookies.set('loginType', lgType, { path: '/' });
    
  };
  var removeCookies = function() {
    cookies.remove('loginType');
    cookies.remove('studentLogId');
    cookies.remove('studentId');
    cookies.remove('full_name');
    
  };

  var isStudent = function() {
    if(this.getLoginType() ===STUDENT){
      return true;
    }
      return false;
  };

  var isAdmin = function() {
    if(this.getLoginType() === ADMIN){
      return true;
    }
      return false;
  };

  var isLoggedIn = function() {
    console.log('z1')
    if(this.getLoginType() ===STUDENT || this.getLoginType() === ADMIN){
      return true;
    }
    else{
      console.log('z3')
      return false;
    }
  };
  var checkSecurity = function() {
    if(!this.isLoggedIn()){
      this.props.history.push(`/`)
    }

  };

  return {
    getName: getName,
    setName: setName,
    getStudentId: getStudentId,
    setStudentId: setStudentId,
    getLoginType: getLoginType,
    setLoginType: setLoginType,
    getStudentLogId: getStudentLogId,
    setStudentLogId: setStudentLogId,
    removeCookies: removeCookies,
    checkSecurity: checkSecurity,
    isLoggedIn: isLoggedIn,
    isStudent: isStudent,
    isAdmin: isAdmin
    
  }

})();

export default UserProfile;