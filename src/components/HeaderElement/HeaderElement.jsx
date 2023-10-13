import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function HeaderElement() {
  return (
    <>
      <div className="gradientBackgroundDiv"></div>
      <header className="flex justify-between my-4 px-4">
        <Logo size="text-2xl" />
        <nav className="">
          <ul className="flex gap-6 font-semibold">
            <li className="hover:underline">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/subscribe"}>Subscribe</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/api/latest"}>Latest</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default HeaderElement;
