var UserProfile = (function() {
  var full_name = "";
  var loginType = "";

  var getName = function() {
    return full_name;    // Or pull this from cookie/localStorage
  };

  var setName = function(name) {
    full_name = name;
    // Also set this in cookie/localStorage
  };
  var getLoginType = function() {
    return loginType;    // Or pull this from cookie/localStorage
  };

  var setLoginType = function(lgType) {
    loginType = lgType;
    // Also set this in cookie/localStorage
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
    getLoginType: getLoginType,
    setLoginType: setLoginType
  }

})();

export default UserProfile;
