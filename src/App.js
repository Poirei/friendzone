import { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import { FriendProvider } from "./context/FriendContext";
import FriendInfoPage from "./pages/friend_info_page/FriendInfoPage";
import HomePage from "./pages/homepage/HomePage";
import SignInSignUpPage from "./pages/sign_in_sign_up_page/SignInSignUpPage";
import firebase from "firebase";

const App = withRouter(({ location }) => {
  return (
    <div className="app">
      {location.pathname !== "/signin" && <Header />}
      <Switch>
        <Route exact path="/signin" component={SignInSignUpPage} />
        <FriendProvider>
          <Route exact path="/" component={HomePage} />
          <Route path="/friends/:first_name" component={FriendInfoPage} />
        </FriendProvider>
      </Switch>
    </div>
  );
});

export default App;
