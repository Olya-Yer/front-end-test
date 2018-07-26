


const deviceIdReducer = (state = {
    deviceId: ''
}, action) => {
    switch (action.type) {
        case "GET_DEVICE_ID":
            state = {
                ...state,
                deviceId: action.payload,
            }
            break;
    }
    return state;
}

export default deviceIdReducer;