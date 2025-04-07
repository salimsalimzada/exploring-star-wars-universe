import { Outlet, useLocation } from "react-router";
import PageHeader from "./page-header";
import { ErrorBoundary } from "@components/shared/error-boundary";
import { Suspense } from "react";

function AppLayout() {
  const location = useLocation();
  return (
    <div className="bg-bg-main min-h-screen">
      <PageHeader />
      <div className="m-[1.5rem] p-0">
        <ErrorBoundary key={location.pathname}>
          <Suspense
            key={location.pathname}
            fallback={<p className="text-gray-600 font-medium text-lg">Loading...</p>}
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
export default AppLayout;
