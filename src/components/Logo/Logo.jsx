// pkgs
import PropTypes from "prop-types";

function Logo({ size }) {
  return <h3 className={`font-bold ${size} tracking-tight`}>Dev.blog</h3>;
}
export default Logo;

Logo.propTypes = {
  size: PropTypes.string,
};
