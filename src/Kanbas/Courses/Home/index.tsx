import ModuleList from "../Modules/List";
import SideBar from "./sidebar";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        <ModuleList />
      </div>
      <div className="d-none d-lg-block" style={{ flex: "0 0 auto" }}>
        <SideBar />
      </div>
    </div>
  );
}
export default Home;
