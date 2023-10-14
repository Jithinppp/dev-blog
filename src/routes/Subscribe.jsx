import { motion } from "framer-motion";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";

function Subscribe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center flex-col  mt-20 flex-wrap"
    >
      <h2 className="my-4 text-6xl tracking-tighter">
        Stay upto-date with dev.blogs
      </h2>
      <p className=" m-auto">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publish
      </p>
      <SubscribeForm />
    </motion.div>
  );
}
export default Subscribe;
