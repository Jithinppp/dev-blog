import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchLatestPosts } from "../Utils/post.functions";
import { motion } from "framer-motion";

import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import { FiArrowUpRight } from "react-icons/fi";
import PostCard from "../components/PostCard/PostCard";
import Loader from "../components/Loader/Loader";

function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchLatestPosts(5).then((data) => {
      setPosts(data);
      console.log(data);
      setLoading(false);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center flex-col  mt-20 flex-wrap"
    >
      <h1 className=" text-6xl text-center py-4 px-2 tracking-tight">
        Every day we discus the most interesting things
      </h1>
      <p className=" text-base text-gray-600 mb-3 px-4 text-center">
        Subscribe to learn about new posts and technology updates
      </p>
      <SubscribeForm />
      {/* recent blog posts */}
      <div className=" justify-stretch basis-full mt-16 md:w-4/5">
        <div className="flex justify-between mb-5 items-center px-2">
          <h4 className="font-bold underline text-lg">Recent blog posts </h4>
          <Link to={"/api/latest"} className="text-xl">
            <FiArrowUpRight />
          </Link>
        </div>
        {/* recent blogs */}
        {loading === true ? (
          <Loader />
        ) : (
          <div className="my-10 flex flex-col gap-2 ">
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
      </div>
    </motion.div>
  );
}
export default Home;
