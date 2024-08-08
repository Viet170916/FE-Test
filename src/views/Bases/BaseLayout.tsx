import { FC, memo, NamedExoticComponent } from "react";
import { Outlet } from "react-router-dom";

interface IProps{
  children: FC;
}

const BaseLayout: NamedExoticComponent<IProps> = memo(
  function( props: IProps ){
    return ( <><Outlet/></> );
  }
);
export default BaseLayout;