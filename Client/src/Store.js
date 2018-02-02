import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import DepartmentReducer from './Department/DepartmentReducer'
import EmployeeReducer from './Employee/EmployeeReducer'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
})



const Store = createStore(combineReducers({employees:EmployeeReducer, departments:DepartmentReducer}), 
composeWithDevTools(
  applyMiddleware(
    ReduxThunk,
    logger
  ),
))

export default Store