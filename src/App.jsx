import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends"
import UsersContainer from "./components/Users/UsersContainer";
import LoginPageContainer from "./components/Loginpage/LoginPage";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/preloader/Preloader";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))



const PageNotFound = () => {
  return (
    <div>
      <span>404 NOT FOUND</span>
    </div>
  )
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ params }}
      />
    );
  }
  return ComponentWithRouterProp;
}

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path="/" element={<UsersContainer />} />
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/friends" element={<Friends />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<LoginPageContainer />} />
              <Route path='/*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    )
  }

}



const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))
  (App)
  ;

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>

      <AppContainer />

    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp