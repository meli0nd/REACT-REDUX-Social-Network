import React from "react";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getRequestUsers,

} from "../../Redux/users-reducer";

import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    getUsersSuper,

} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getRequestUsers(currentPage, pageSize)

    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props
        this.props.getRequestUsers(pageNumber, pageSize)

    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default
    compose(
        connect(mapStateToProps, {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingInProgress,
            getRequestUsers,
        }),
    )(UsersContainer)