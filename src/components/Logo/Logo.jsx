// pkgs
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Logo({ size }) {
  return (
    <h3 className={`${size}  font-hairline underline cursor-pointer`}>
      <Link to={"/"}>Devblog</Link>
    </h3>
  );
}
export default Logo;

Logo.propTypes = {
  size: PropTypes.string,
};
