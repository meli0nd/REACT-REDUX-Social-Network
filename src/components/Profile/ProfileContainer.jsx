import React from 'react'
import Profile from './Profile';
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams, redirect } from "react-router-dom";
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../Redux/profile-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                redirect('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return <Profile
            {...this.props}
            savePhoto={this.props.savePhoto}
            isOwner={!this.props.router.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateUserStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})



export default
    compose(
        connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
        withRouter,
    )(ProfileContainer)