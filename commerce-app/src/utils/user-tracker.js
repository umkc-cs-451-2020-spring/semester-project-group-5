const USER_SESSION_KEY = 'commerce-bank-app-user'
const userTracker = () => {
  // This function will retrieve the user string from the session 
  function user() {
    let userJSON = sessionStorage.getItem(USER_SESSION_KEY);
    return JSON.parse(userJSON);
  }

  // This function provides a way to set who the current user of the applicaiton is
  function setUser(user) {
    let userJSON = JSON.stringify(user);
    sessionStorage.setItem(USER_SESSION_KEY, userJSON);
  }
  
  return [user, setUser];
}

export default userTracker;