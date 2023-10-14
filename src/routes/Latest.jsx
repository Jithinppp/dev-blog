import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchLatestPosts } from "../Utils/post.functions";

import PostCard from "../components/PostCard/PostCard";
import { FiArrowUpRight } from "react-icons/fi";
import Loader from "../components/Loader/Loader";

function Latest() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchLatestPosts(10).then((data) => setPosts(data));
  }, []);

  return (
    <div className="max-w-[80%] m-auto">
      <div className="flex justify-between mb-5 items-center">
        <h4 className="font-bold underline text-lg">Latest posts</h4>
        <Link to={"/api/posts"} className="text-xl">
          <FiArrowUpRight />
        </Link>
      </div>
      {posts?.length > 0 ? (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.attributes.title}
              date={post.attributes.publishedAt}
              body={post.attributes.body}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
export default Latest;
