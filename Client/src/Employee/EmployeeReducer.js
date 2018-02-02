
const DEFAULT_STATE = {
    employees: []
  }
  
  const Employee = (state = DEFAULT_STATE, action) => {
      switch (action.type) {
          case 'GET_EMPL_SUCCESS':
              return {employees: action.employees}
          default:
              return state
              
      }
  
  }
  
  export default Employee