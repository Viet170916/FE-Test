import { AminRedirect } from "@/router/middleware/Redirect.tsx";
import { RouteObject } from "react-router-dom";

export const middlewares: RouteObject[] = [ {
  path: "",
  Component: AminRedirect,
}, {
  path: "admin/dashboard",
  Component: AminRedirect,
}, ];