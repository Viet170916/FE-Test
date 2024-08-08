import { FC, NamedExoticComponent } from "react";

interface IBaseRoutes{
  layout: FC | NamedExoticComponent<never>,
  layoutPath: string,
  pages: { path: string, page: FC | NamedExoticComponent<never>, }[]
}

export type { IBaseRoutes };