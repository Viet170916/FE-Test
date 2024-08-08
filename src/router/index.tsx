import { useAdminRedirect } from "$/hooks/middleware.ts";
import { middlewares } from "$/router/middleware";
import { Box } from "@mui/material";
import { memo, FC, NamedExoticComponent } from "react";
import { RouterProvider, Outlet, createHashRouter, } from "react-router-dom";
import _routes from "./routes";

const router = createHashRouter( [
  ...middlewares,
  {
    path: "admin",
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
      <Box>
        <RouterProvider router={ router }/>
      </Box>
    </> );
  }
);
export default AppRouter;