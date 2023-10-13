// pkgs
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// comps
import "./index.css";
import AppLayout from "./AppLayout.jsx";
import Home from "./routes/Home.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Subscribe from "./routes/Subscribe.jsx";
import Post from "./routes/Post.jsx";
import Posts from "./routes/Posts.jsx";
import Categories from "./routes/Categories.jsx";
import Latest from "./routes/Latest";
import About from "./routes/About";
import { PostsProvider } from "./context/PostsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "api/posts",
        children: [
          {
            index: true,
            element: <Posts />,
          },
          {
            path: ":slug",
            element: <Post />,
          },
        ],
      },
      {
        path: "api/latest",
        element: <Latest />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  </React.StrictMode>
);
