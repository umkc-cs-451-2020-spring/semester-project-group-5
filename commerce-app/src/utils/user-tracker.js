const USER_SESSION_KEY = 'commerce-bank-app-user'
const userTracker = () => {
  const user = () => {
    let userJSON = sessionStorage.getItem(USER_SESSION_KEY);
    return JSON.parse(userJSON);
  }

  const setUser = (user) => {
    let userJSON = JSON.stringify(user);
    sessionStorage.setItem(USER_SESSION_KEY, userJSON);
  }
  
  return [user, setUser];
}

export default userTracker;