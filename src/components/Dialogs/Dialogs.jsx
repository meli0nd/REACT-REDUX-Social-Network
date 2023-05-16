import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { Navigate } from "react-router-dom"
import { Field, reduxForm } from 'redux-form'
import { Textarea } from "../common/FormsControls/FormsControls"

const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name='messageBody'
               component={Textarea}
               placeholder='Add new message' />
         </div>
         <div>
            <button>Send</button>
         </div>
      </form>
   )
}

const Dialogs = (props) => {

   const addNewMessage = (values) => {
      let body = values.messageBody
      props.addMessage(body)
   }

   let state = props.messagesPage
   let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
   let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />)

   if (!props.isAuth) return <Navigate to='/login' />

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>

            {dialogsElements}

         </div>

         <div className={s.messages}>
            {messagesElement}
         </div>
         <div>
            <MessageFormRedux onSubmit={addNewMessage} />

         </div>
      </div>
   )
}

const MessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)


export default Dialogs