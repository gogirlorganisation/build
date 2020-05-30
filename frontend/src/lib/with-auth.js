import React from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "./auth-context";
import Loading from "../pages/loading";

export default (Component, authenticated, fallback) =>
  class WithAuth extends React.Component {
    static contextType = AuthContext;

    state = { retComponent: <Loading /> };

    async componentDidMount() {
      try {
        const data = await (
          await fetch("/api/auth/me", {
            method: "POST",
          })
        ).json();

        this.context.setLoggedIn(data.auth);
        this.context.setUser(data.user);

        if (data.authenticated === authenticated) {
          this.setState({ retComponent: <Component {...this.props} /> });
        } else {
          this.setState({ retComponent: <Redirect to={fallback} /> });
        }
      } catch (e) {
        this.setState({
          retComponent: <Loading error={e.message} />,
        });
      }
    }

    render() {
      return this.state.retComponent;
    }
  };
