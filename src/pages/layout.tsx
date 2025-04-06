import { Outlet } from "react-router";
import PageHeader from "./page-header";

function AppLayout() {
  return (
    <div className="bg-main-bg min-h-screen">
      <PageHeader />
      <div className="m-[1.5rem] p-0">
        <Outlet />
      </div>
    </div>
  );
}
export default AppLayout;
