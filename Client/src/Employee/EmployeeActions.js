import uuid from 'uuid/v1'
const API_URL = 'http://localhost:3000/Employees'

const GET_EMPL_REQUEST = 'GET_EMPL_REQUEST'
const GET_EMPL_SUCCESS = 'GET_EMPL_SUCCESS'
const GET_EMPL_FAILURE = 'GET_EMPL_FAILURE'

const DELETE_EMPL_FAILURE = 'DELETE_EMPL_FAILURE'
const DELETE_EMPL_REQUEST = 'DELETE_EMPL_REQUEST'
const DELETE_EMPL_SUCCESS = 'DELETE_EMPL_SUCCESS'

export function getEmpl() {
  return function (dispatch) {
    dispatch({
      type: GET_EMPL_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(employees => {
        dispatch({
          type: GET_EMPL_SUCCESS,
          employees: employees
        })
      })
      .catch(error => {
        dispatch({
          type: GET_EMPL_FAILURE,
          error: error
        })
      })
  }
}

export const deleteEmpl = id => {
  return function (dispatch) {
    dispatch({
      type: DELETE_EMPL_REQUEST
    })
    fetch(API_URL+"/"+id, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: DELETE_EMPL_SUCCESS,
          id: id
        })
      })
      .catch(error => {
        dispatch({
          type: DELETE_EMPL_FAILURE,
          error: error
        });
      })
  }
}