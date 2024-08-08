import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useAdminRedirect(){
  const location = useLocation();
  const navigate = useNavigate();
  console.log( location.pathname );
  useEffect( () => {
    if( location.pathname === "/" || location.pathname === "/admin" || location.pathname === "/admin/dashboard" ){
      navigate( "/admin/dashboard/subscription" );
    }
  }, [] );
}