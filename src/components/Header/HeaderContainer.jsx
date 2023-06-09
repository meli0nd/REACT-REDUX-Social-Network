import React from 'react'
import Header from './Header'
import { connect } from "react-redux";
import { setAuthUserData, setAuthProfile, logout } from "../../Redux/auth-reducer";




class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthProfile()
    }


    render() {
        return <Header {...this.props} />
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, { setAuthUserData, setAuthProfile, logout })(HeaderContainer)