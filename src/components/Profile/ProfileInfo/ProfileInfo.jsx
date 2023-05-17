import React, { useState } from 'react'
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../assest/img/user.jpeg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, savePhoto, saveProfile, ...props }) => {
    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(status)
        // setTimeout(() => {
        //     window.location.reload()
        // }, 1000);
    }

    if (!profile) {
        return <Preloader />
    }

    const mainPhotoSelectedOn = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }



    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                deactivateEditMode()
            }
        )
    }


    let userProfilePhoto = profile.data.photos.small
    return (

        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profileInfo}>
                    <img className={s.userProfileAvatar} src={userProfilePhoto || userPhoto} alt='...' />
                    {isOwner && <input type='file' onChange={mainPhotoSelectedOn} />}

                    {editMode
                        ? <ProfileDataForm profile={profile} onSubmit={onSubmit} initialValues={profile.data} />
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={activateEditMode} />
                    }

                    <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
                </div>
            </div>
        </div>
    )
}


const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div> <b>Name</b>:  {profile.data.fullName}</div>
            <div> <b>About me</b>: {profile.data.aboutMe}</div>
            <div> <b>Looking for a job</b>: {profile.data.lookingForAJob ? 'yes' : 'no'}</div>
            <div> <b>About job</b>: {profile.data.lookingForAJobDescription}</div>
            <div> <b>Contacts</b>: {Object.keys(profile.data.contacts).map(k => {
                return <Contact key={k} contactTitle={k} contactValue={profile.data.contacts[k]} />
            })} </div>
        </div>
    )
}


export default ProfileInfo