import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const PostsContext = createContext({
  latest: [],
  posts: [],
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const values = {
    posts,
    setPosts,
  };
  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: PropTypes.element,
};
