import { INavItem, navItems } from "$/components/admin/layout/config.ts";
import { memo, NamedExoticComponent } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Link, useLocation } from "react-router-dom";

export const SideNav: NamedExoticComponent = memo( function(): React.JSX.Element{
    return (
      <Box
        sx={ {
          "--SideNav-background": "var(--mui-palette-neutral-950)",
          "--SideNav-color": "var(--mui-palette-common-white)",
          "--NavItem-color": "var(--mui-palette-neutral-300)",
          "--NavItem-hover-background": "rgba(255, 255, 255, 0.04)",
          "--NavItem-active-background": "var(--base-element-color)",
          "--NavItem-active-color": "var(--mui-palette-primary-contrastText)",
          "--NavItem-disabled-color": "var(--mui-palette-neutral-500)",
          "--NavItem-icon-color": "var(--mui-palette-neutral-400)",
          "--NavItem-icon-active-color": "var(--mui-palette-primary-contrastText)",
          "--NavItem-icon-disabled-color": "var(--mui-palette-neutral-600)",
          bgcolor: "var(--SideNav-background)",
          color: "var(--SideNav-color)",
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          height: "100%",
          left: 0,
          maxWidth: "100%",
          position: "fixed",
          scrollbarWidth: "none",
          top: 0,
          width: "var(--SideNav-width)",
          zIndex: "var(--SideNav-zIndex)",
          "&::-webkit-scrollbar": { display: "none" },
        } }
      >
        <Stack spacing={ 2 } sx={ { p: 3 } }>
          <Box component={ Link } sx={ { display: "inline-flex" } }>
            {/*<Logo color="light" height={ 32 } width={ 122 }/>*/}
          </Box>
          <Box
            sx={ {
              alignItems: "center",
              backgroundColor: "var(--mui-palette-neutral-950)",
              border: "1px solid var(--mui-palette-neutral-700)",
              borderRadius: "12px",
              cursor: "pointer",
              display: "flex",
              p: "4px 12px",
            } }
          >
          </Box>
        </Stack>
        <Divider sx={ { borderColor: "var(--mui-palette-neutral-700)" } }/>
        <Box component="nav" sx={ { flex: "1 1 auto", p: "12px" } }>
          <RenderNavItems items={ navItems } baseBathName={ "/admin" }/>
        </Box>
        <Divider sx={ { borderColor: "var(--mui-palette-neutral-700)" } }/>
      </Box>
    );
  }
);




export function RenderNavItems( props: { items: INavItem[]; baseBathName?: string } ): React.JSX.Element{
  const location = useLocation();
  const children = props.items.map( ( item ) => {
    return <Link to={ item.href } key={ item.key }>
      <Button sx={ {
        width: "100%",
        justifyContent: "start",
        borderRadius: 1,
        color: "var(--NavItem-color)",
        cursor: "pointer",
        gap: 1,
        p: "6px 16px",
        position: "relative",
        textDecoration: "none",
        whiteSpace: "nowrap",
        // ...( disabled && {
        //   bgcolor: "var(--NavItem-disabled-background)",
        //   color: "var(--NavItem-disabled-color)",
        //   cursor: "not-allowed",
        // } ),
        ...( location.pathname.includes( ( props.baseBathName ?? "" ) + "/" + item.href ) && {
          bgcolor: "var(--base-element-color)",
          color: "black"
        } ),
      } }>
        { item.title }
      </Button>
    </Link>;
  } );
  return (
    <Stack component="ul" spacing={ 1 } sx={ { listStyle: "none", m: 0, p: 0 } }>
      { children }
    </Stack>
  );
}

