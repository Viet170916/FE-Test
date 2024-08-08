import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAdminRedirect(){
  // const location = useLocation();
  const navigate = useNavigate();
  useEffect( () => {
    // if( location.pathname === "/" || location.pathname === "/admin" || location.pathname === "/admin/dashboard" ){
    navigate( "/admin/dashboard/subscription" );
    // }
  }, [] );
}