import { useAdminRedirect } from "@/hooks/middleware.ts";
import { middlewares } from "@/router/middleware";
import { memo, FC, NamedExoticComponent } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import _routes from "./routes";

const router = createBrowserRouter( [
  ...middlewares,
  {
    path: "/admin",
    Component(){
      useAdminRedirect();
      return <div className={ "app-container" }><Outlet/></div>;
    },
    children: _routes,
  },
] );
const AppRouter: FC | NamedExoticComponent = memo(
  function(){
    return ( <>
      <RouterProvider router={ router }/>
    </> );
  }
);
export default AppRouter;