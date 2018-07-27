const testReducer = (state = {
    deviceId: ''
}, action) => {
    switch (action.type) {
        case "GET_SMT":
            state = {
                ...state,
                deviceId: action.payload,
            }
            break;
        default:
            return state;
    }
    return state
}

export default testReducer;