
const DEFAULT_STATE = {
  Department: []
}

const Department = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'LOAD_DEPA':
            return {Department:action.db}

        default:
            return state
            
    }

}

export default Department