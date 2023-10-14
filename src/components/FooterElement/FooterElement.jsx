import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function FooterElement() {
  return (
    <footer className="bg-black min-h-[200px] px-8 py-9 text-white mt-8">
      <div className="flex justify-evenly">
        <div>
          <Logo size={"text-2xl"} />
        </div>
        <div className="flex flex-col">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/subscribe"}>subscribe</Link>
          <Link to={"/admin"}>Admin</Link>
        </div>
      </div>
      <div className="h-[1px] bg-white my-6" />
      <p className="text-center">© copyright all rights reserved</p>
    </footer>
  );
}
export default FooterElement;
