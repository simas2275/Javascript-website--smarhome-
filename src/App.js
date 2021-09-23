import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Register from "./Register";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Login from "./Login";
import Kitchen from "./components/Rooms/Kitchen";
import Garage from "./components/Rooms/Garage";
import Bathroom from "./components/Rooms/Bathroom";
import Bedroom from "./components/Rooms/Bedroom";
import Electricity from "./components/Rooms/Electricity";
import Security from "./components/Rooms/Security";
import Settings from "./components/Rooms/Settings";
import { UserContext } from "./UserContext";

const App = (props) => {
  let [SideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [user, setUser] = useContext(UserContext);

  let view;
  let backdrop;
  let loggedIn = user;
  let topbar;

  const isLoggedIn = () => {
    let token = localStorage.getItem("x-auth-token");
    if (!token) return false;
    return true;
  };

  const drawerToggleClickHandler = (prevState) => {
    setSideDrawerOpen(!SideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  if (SideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  if (loggedIn) {
    topbar = (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer
          show={SideDrawerOpen}
          closeBackdrop={drawerToggleClickHandler}
        />
        {backdrop}
      </div>
    );
  }
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  return (
    <Router>
      {topbar}
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <PrivateRoute path="/kitchen" component={Kitchen}></PrivateRoute>
        <PrivateRoute path="/garage" component={Garage}></PrivateRoute>
        <PrivateRoute path="/bedroom" component={Bedroom}></PrivateRoute>
        <PrivateRoute path="/bathroom" component={Bathroom}></PrivateRoute>
        <PrivateRoute path="/security" component={Security}></PrivateRoute>
        <PrivateRoute
          path="/electricity"
          component={Electricity}
        ></PrivateRoute>
        <PrivateRoute path="/settings" component={Settings}></PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
