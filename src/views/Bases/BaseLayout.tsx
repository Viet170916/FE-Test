import { FC, memo } from "react";

interface IProps{
  children: FC;
}

const BaseLayout = memo(
  function( props: IProps ){
    return ( <>{ props.children }</> );
  }
);
export default BaseLayout;