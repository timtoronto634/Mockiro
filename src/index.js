import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>Hello, React!</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
