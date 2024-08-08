import RevenuePage from "@/views/admin/page/dashboard/Revenue";
import SubscriptionPage from "@/views/admin/page/dashboard/Subscription";
import PostManagementPage from "@/views/admin/page/postManagement";
import SettingsPage from "@/views/admin/page/settings";
import { ComponentType } from "react";
import { RouteObject } from "react-router-dom";
import AdminLayout from "../../views/admin/layout";
import DashboardPage from "../../views/admin/page/dashboard";

const adminRoutes: RouteObject = {
  Component: AdminLayout as ComponentType<any>,
  path: "",
  children: [
    {
      path: "dashboard",
      Component: DashboardPage as ComponentType<any>,
      children: [ {
        path: "subscription",
        Component: SubscriptionPage as ComponentType<any>,
      }, {
        path: "revenue",
        Component: RevenuePage as ComponentType<any>,
      } ]
    }, {
      path: "posts",
      Component: PostManagementPage as ComponentType<any>,
    }, {
      path: "settings",
      Component: SettingsPage as ComponentType<any>,
    },
  ]
  ,
};
export default adminRoutes;