
const DEFAULT_STATE = {
  departments: []
}

const Department = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'GET_DEPA_SUCCESS':
            return {departments: action.departments}
        default:
            return state
            
    }

}

export default Department