// pkgs
import { Outlet } from "react-router-dom";
// comps
import HeaderElement from "./components/HeaderElement/HeaderElement";
import FooterElement from "./components/FooterElement/FooterElement";

function AppLayout() {
  return (
    <>
      <HeaderElement />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <FooterElement />
    </>
  );
}
export default AppLayout;
