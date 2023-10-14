import moment from "moment/moment";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function PostCard({ title, date, body }) {
  const m = moment(date);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="border-2 m-2 p-5 rounded"
    >
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="my-2 text-gray-600">{m.format("LLL")}</p>
      <p>{body}</p>
    </motion.div>
  );
}
export default PostCard;

PostCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
};
