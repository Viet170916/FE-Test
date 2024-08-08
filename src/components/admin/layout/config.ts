import { FC } from "react";

export interface INavItem{
  key: string,
  title: string,
  href: string,
  icon?: FC
}

export const navItems: INavItem[] = [
  { key: "Dashboard", title: "Dashboard", href: "dashboard/subscription" },
  { key: "PostManagement", title: "Post management", href: "posts" },
  { key: "Settings", title: "Settings", href: "settings" },
];

