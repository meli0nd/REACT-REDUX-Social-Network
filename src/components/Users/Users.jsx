import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User_1 from "./User_1";

const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    return (
        <div>

            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize} />

            {users.map(u => <User_1
                key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                follow={props.follow} unfollow={props.unfollow} />)}

        </div >
    )
}

export default Users
