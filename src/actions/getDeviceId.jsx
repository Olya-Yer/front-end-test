import axios from 'axios'

// const getDeviceId = () => {
//     return function (dispatch) {
//         return axios.get("http://localhost:3000/getId")
//             .then(function (response) {
//                 console.log(response.data)
//                 return {
//                     type: "GET_DEVICE_ID",
//                     payload: response.data.deviceId,
//                 }
//             }).catch(function (error) {
//                 console.log(error);
//             });
//     }
// }


const getDeviceId = () => {
    return function (dispatch) {
        return axios.get("http://localhost:3000/getId")
            .then(function (response) {
                dispatch({
                    type: "GET_DEVICE_ID",
                    payload: response.data.deviceId,
                })
            }).catch(function (error) {
                console.log(error);
            });
    }
}



export default getDeviceId