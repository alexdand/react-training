import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import AUTHORS from "./authors";
import AddAuthorForm from "./AddAuthorForm";
import * as serviceWorker from "./serviceWorker";

const authors = AUTHORS;
let state = {
  authors: authors,
  options: shuffle(AUTHORS.map(a => a.books[Math.floor(Math.random() * 4)])),
  random: Math.floor(Math.random() * 4),
  background: "quizz"
};

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
    // swapping variables with destructuring assignment may cause significant performance loss
  }
  return a;
}

const AuthorWrapper = withRouter(({ history }) => (
  <AddAuthorForm
    onAddAuthor={author => {
      this.authors.push(author);
      history.push("/");
    }}
  />
));

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" render={() => <App {...state} />} />
        <Route path="/add" component={AuthorWrapper} />
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

render();
serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
