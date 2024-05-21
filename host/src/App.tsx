import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Counter from "remote_react/Counter";
import counterMounter from "remote_vue/counterMounter";
import { store } from "common/index";

import "./index.css";
import { Provider } from "react-redux";
import Example from "./Example";

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    counterMounter(ref.current);
  }, []);

  return (
    <div className="container">
      <div>Name: host</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <Counter />
      <Example />
      <div ref={ref}></div>
    </div>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
