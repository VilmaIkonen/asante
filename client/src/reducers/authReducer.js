import { AUTH, LOGOUT } from '../Constants/actionTypes'

const authReducer = (state = {authData: null}, action) => {
  switch(action.type) {
    case AUTH:
      // authentication will be saved in local storage so that browser will remeber if user is still logged in
      // profile is set to contain the user data --> used in NavBar component
      // action.data = result=googleId, and token
      localStorage.setItem('profile', JSON.stringify({...action?.data}))
      return {...state, authData: action.data}
    case LOGOUT:
      localStorage.clear();
      return {...state, authData: null}
    default:
      return state;
  }
}

export default authReducer;
