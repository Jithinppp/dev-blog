import { useEffect, useState } from "react";
import { fetchAllPosts } from "../Utils/post.functions";

import PostCard from "../components/PostCard/PostCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Loader from "../components/Loader/Loader";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetchAllPosts(page).then((data) => {
      setPosts(data.data);
      console.log(data);
      setPageCount(data.meta.pagination.pageCount);
      console.log(pageCount, page);
    });
  }, [page]);

  return (
    <div className="flex flex-col gap-2 sm:max-w-[80%] m-auto">
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.attributes.title}
            date={post.attributes.publishedAt}
            body={post.attributes.body}
          />
        ))
      ) : (
        <Loader />
      )}
      <div className="flex justify-between my-5 items-center px-2">
        {/* check state 1 then disabled */}
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className={`text-xl ${page <= 1 && "hidden"}`}
        >
          <FiArrowLeft />
        </button>
        {/* check if post length < 10 then disabled */}
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className={`text-xl ml-auto ${page >= pageCount ? "hidden" : ""}`}
        >
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
}
export default Posts;
