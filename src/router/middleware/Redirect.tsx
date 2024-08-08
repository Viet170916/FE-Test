import { useAdminRedirect } from "$/hooks/middleware.ts";
import { memo, NamedExoticComponent } from "react";

export const AminRedirect: NamedExoticComponent = memo(
  function(){
    useAdminRedirect();
    return ( <></> );
  }
);
