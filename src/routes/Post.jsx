import { useParams } from "react-router-dom";

function Post() {
  const { slug } = useParams();
  return <div>single post {slug}</div>;
}
export default Post;
