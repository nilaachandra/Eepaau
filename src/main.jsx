import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Login from "./components/Authentication/Login.jsx"
import Signup from "./components/Authentication/Signup.jsx"
import Protected from "./components/protected/Protected.jsx";

const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (<Protected authentication={false}>
                  <Login/>
                </Protected>),
      },
      {
        path: '/signup',
        element: (<Protected authentication={false}>
                  <Signup/>
                </Protected>),
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
