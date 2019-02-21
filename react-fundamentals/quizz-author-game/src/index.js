import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import AUTHORS from "./authors";
import AddAuthorForm from "./AddAuthorForm";
import * as serviceWorker from "./serviceWorker";

let authors = AUTHORS;
let state = resetState();

function resetState() {
  return {
    randomAuthor: authors[Math.floor(Math.random() * 4)],
    options: shuffle(AUTHORS.map(a => a.books[Math.floor(Math.random() * 4)])),
    background: "quizz"
  };
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
    // swapping variables with destructuring assignment may cause significant performance loss
  }
  return a;
}

function onContinue() {
  console.log("continue");
  state = resetState();
  render();
}

const AuthorWrapper = withRouter(({ history }) => (
  <AddAuthorForm
    onAddAuthor={author => {
      authors.push(author);
      history.push("/");
      console.log(authors);
    }}
  />
));

function checkAnswer(isCorrect) {
  const background = isCorrect ? "quizz-correct" : "quizz-wrong";
  state = { ...state, background };
  render();
}

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route
          exact
          path="/"
          render={() => (
            <App {...state} checkAnswer={checkAnswer} onContinue={onContinue} />
          )}
        />
        <Route path="/add" component={AuthorWrapper} />
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById("root")
  );
  console.log(authors);
}

render();
serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
