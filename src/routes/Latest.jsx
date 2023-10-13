import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import PostCard from "../components/PostCard/PostCard";
import { Link } from "react-router-dom";
import { fetchLatestPosts } from "../Utils/post.functions";

function Latest() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchLatestPosts(10).then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Latest posts</h1>
      {posts?.length > 0 && (
        <div>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.attributes.title}
              date={post.attributes.publishedAt}
              body={post.attributes.body}
            />
          ))}
        </div>
      )}
      <Link to={"/api/posts"}>See more posts</Link>
    </div>
  );
}
export default Latest;
