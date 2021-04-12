import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./Pages/Todo/Todo";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav
          style={{
            display: "flex",
            backgroundColor: "black",
            justifyContent: "space-around",
          }}
        >
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
            to="/todo"
          >
            Todo
          </Link>
        </nav>

        <Switch>
          <Route path="/">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
