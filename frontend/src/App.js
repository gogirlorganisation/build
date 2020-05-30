import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastProvider } from "react-toast-notifications";
import theme from "./lib/theme";
import Login from "./pages/index";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
