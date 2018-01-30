
const DEFAULT_STATE = {
  Employee: []
}

const Employee = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'LOAD_EMPL':
            return {Employee:action.db}

        default:
            return state
            
    }

}

export default Employee