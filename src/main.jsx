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
import Home from "./Home.jsx";
import AddNews from "./components/Newseditor/AddNews.jsx"
import EditNews from "./components/Newseditor/EditNews.jsx"
import News from "./components/Newscontainer/News.jsx"


const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
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
      {
        path: '/add-news',
        element: (<Protected authentication={true}>
          <AddNews/>
        </Protected>)
      },
      {
        path: '/edit-news/:slug',
        element: (<Protected authentication={true}>
          <EditNews/>
        </Protected>)
      },
      {
        path: '/news/:slug',
        element: (<Protected authentication={false}>
          <News/>
        </Protected>)
      }
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
