const API_URL = 'http://localhost:3000/Departments'

const GET_DEPA_REQUEST = 'GET_DEPA_REQUEST'
const GET_DEPA_SUCCESS = 'GET_DEPA_SUCCESS'
const GET_DEPA_FAILURE = 'GET_DEPA_FAILURE'

export function getDepa() {
  return function (dispatch) {
    dispatch({
      type: GET_DEPA_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(departments => {
        dispatch({
          type: GET_DEPA_SUCCESS,
          departments: departments
        })
      })
      .catch(error => {
        dispatch({
          type: GET_DEPA_FAILURE,
          error: error
        })
      })
  }
}




export const template = () => {
    return {

    }
  }