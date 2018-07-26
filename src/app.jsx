import React from 'react'
import getDeviceId from './actions/getDeviceId'
import { connect } from 'react-redux'

class App extends React.Component {


    render() {
        return (
            <div>
                <button onClick={() => { this.props.getDeviceId() }} >{"get device id"}</button>
                <div>
                    <p>{'deviceID is: '}{}{this.props.deviceIdReducer.deviceId}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        deviceIdReducer: state.deviceIdReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDeviceId: () => {
            dispatch(getDeviceId());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);