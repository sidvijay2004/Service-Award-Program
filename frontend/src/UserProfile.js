var UserProfile = (function() {
  var full_name = "";
  var studentId = "";
  var loginType = "";

  var getName = function() {
    return full_name;    
  };

  var setName = function(name) {
    full_name = name;
    
  };
  var getStudentId = function() {
    return studentId;    
  };

  var setStudentId = function(localId) {
    studentId = localId;
    
  };
  var getLoginType = function() {
    return loginType;    
  };

  var setLoginType = function(lgType) {
    loginType = lgType;
    
  };

  var isLoggedIn = function() {
    console.log('z1')
    if(loginType === "student"){
      console.log('z2')
      return true;
    }
    else{
      console.log('z3')
      return false;
    }
  };
  return {
    getName: getName,
    setName: setName,
    getStudentId: getStudentId,
    setStudentId: setStudentId,
    getLoginType: getLoginType,
    setLoginType: setLoginType
  }

})();

export default UserProfile;
