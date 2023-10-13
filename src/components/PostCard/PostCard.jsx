import moment from "moment/moment";
import PropTypes from "prop-types";

function PostCard({ title, date, body }) {
  const m = moment(date);
  return (
    <div className="bg-slate-200 m-4 p-5 rounded">
      <h2 className="font-bold mb-4">{title}</h2>
      <p className="my-2">{m.format("LLL")}</p>
      <p>{body}</p>
    </div>
  );
}
export default PostCard;

PostCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
};
