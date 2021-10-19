import App from "./App.tsx";
import React, { createElement as h } from "https://esm.sh/react@17.0.2";
import ReactDOM from "https://esm.sh/react-dom@17.0.2";

declare global {
  var __INITIAL_STATE__: { todos: [] };
  var document: Document;
}

const { todos } = window.__INITIAL_STATE__ || { todos: [] };
ReactDOM.hydrate(<App todos={todos} />, document.getElementById("root"));
