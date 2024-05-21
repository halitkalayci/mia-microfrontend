import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider, useSelector } from "react-redux";
import { store } from "common";
const App = () => {
  const userStore = useSelector((i: any) => console.log(i));

  useEffect(() => {
    console.log(userStore);
  }, [userStore]);

  return (
    <div className="container">
      <div>Name: remote-react</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
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
