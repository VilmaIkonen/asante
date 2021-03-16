// "import * as" = import everything from actions as api
import * as api from '../api/indexAPI'
import { AUTH, SIGNUP, SIGNIN } from '../Constants/actionTypes'

// Action creators:
// if they are async, must use redux-think

export const signin = (formData, history) => async (dispatch) => {
  try {
    // send data to db/backend, call the backend endpoint here
    // log in the user...
    // navigate back to homepage
    history.push('/');
  } catch (err) {
    console.log(err)
  }
} // formData and history passed in to signin in Auth.js 

export const signup = (formData, history) => async (dispatch) => {
  try {
    // send data to db/backend, call the backend endpoint here
    // sign up the user...
    // navigate back to homepage
    history.push('/');
  } catch (err) {
    console.log(err)
  }
}