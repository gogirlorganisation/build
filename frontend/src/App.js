import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastProvider } from "react-toast-notifications";
import AuthContext from "./lib/auth-context.js";
import theme from "./lib/theme";
import Login from "./pages/index";
import Dashboard from "./pages/dashboard";
import Initial from "./pages/initial";
import TimeTable from "./pages/time-table";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <AuthContext.Provider
          value={{ isLoggedIn, user, setLoggedIn, setUser }}
        >
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/initial" component={Initial} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/timetable" component={TimeTable} />
            </Switch>
          </Router>
        </AuthContext.Provider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
