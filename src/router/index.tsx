import { memo, FC, NamedExoticComponent } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import _routes from "./routes";

interface IProps{
  children?: FC | NamedExoticComponent;
}

const router = createBrowserRouter( [
  {
    path: "/",
    Component(){return <div className={ "app-container" }><Outlet/></div>;},
    children: _routes,
  },
] );
const AppRouter: FC | NamedExoticComponent<IProps> = memo(
  function( props: IProps ){
    return ( <>
      <RouterProvider router={ router }/>
    </> );
  }
);
export default AppRouter;