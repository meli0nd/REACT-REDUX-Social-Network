import React from 'react'
import { Input, Textarea, createField } from '../../common/FormsControls/FormsControls'
import s from '../../common/FormsControls/FormsControls.module.css'
import { reduxForm } from 'redux-form'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div> <b>Name</b>: {createField('Name', 'fullName', [], Input)} </div>
            <div> <b>About me</b>: {createField('About me', 'aboutMe', [], Input)}</div>
            <div> <b>Looking for a job</b>: {createField('Looking for a job', 'lookingForAJob', [], Input, { type: 'checkbox' })}</div>
            <div> <b>Professional skills</b>: {createField('Professional skills', 'lookingForAJobDescription', [], Textarea)}</div>
            <div> <b>Contacts</b>: {Object.keys(profile.data.contacts).map(k => {
                return <div key={k}>
                    <b>{k}: {createField(k, 'contacts.' + k, [], Input)}</b>
                </div>
            })} </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm