import React from "react"
import { addNewMessageActionCreator, } from '../../Redux/message-reducer'
import Dialogs from "./Dialogs"
import { connect } from "react-redux"
import { withAuthRedirect } from "../../HOC/withAuthRedirect"
import { compose } from "redux"

let mapStateToProps = (state) => {
   return {
      messagesPage: state.messagesPage,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: (messageBody) => {
         dispatch(addNewMessageActionCreator(messageBody))
      },

   }
}


export default
   compose(
      connect(mapStateToProps, mapDispatchToProps),
      withAuthRedirect,
   )(Dialogs)