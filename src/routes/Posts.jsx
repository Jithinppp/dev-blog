import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import PostCard from "../components/PostCard/PostCard";
import { fetchAllPosts } from "../Utils/post.functions";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllPosts(page).then((data) => setPosts(data));
    console.log(posts);
  }, [page]);
  return (
    <div className="">
      {posts.length > 0 &&
        posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.attributes.title}
            date={post.attributes.publishedAt}
            body={post.attributes.body}
          />
        ))}
      <button
        disabled={posts.length < 10}
        onClick={() => setPage((prev) => prev + 1)}
      >
        inc page
      </button>
    </div>
  );
}
export default Posts;
