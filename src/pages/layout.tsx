import { Outlet, useLocation } from "react-router";
import PageHeader from "./page-header";
import { ErrorBoundary } from "@components/shared/error-boundary";
import { Suspense } from "react";
import { LoadingIndicator } from "@components/shared/loading-indicator";

function AppLayout() {
  const location = useLocation();
  return (
    <div className="bg-bg-main min-h-screen">
      <div className="max-w-7xl w-full mx-auto px-4">
        <PageHeader />
      </div>
      <div className="m-[1.5rem] p-0">
        <div className="max-w-7xl w-full mx-auto px-4">
          <ErrorBoundary key={location.pathname}>
            <Suspense key={location.pathname} fallback={<LoadingIndicator loading />}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
