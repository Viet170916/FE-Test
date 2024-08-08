import { navItems } from "@/components/admin/layout/config.ts";
import { RenderNavItems } from "@/components/admin/layout/side-nav.tsx";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";


export interface MobileNavProps{
  onClose?: () => void;
  open?: boolean;
}

export function MobileNav( { open, onClose }: MobileNavProps ): React.JSX.Element{
  // const pathname = usePathname();
  return (
    <Drawer
      PaperProps={ {
        sx: {
          // "--MobileNav-background": "var(--mui-palette-neutral-950)",
          // "--MobileNav-color": "var(--mui-palette-common-white)",
          // "--NavItem-color": "var(--mui-palette-neutral-300)",
          // "--NavItem-hover-background": "rgba(255, 255, 255, 0.04)",
          // "--NavItem-active-background": "var(--mui-palette-primary-main)",
          // "--NavItem-active-color": "var(--mui-palette-primary-contrastText)",
          // "--NavItem-disabled-color": "var(--mui-palette-neutral-500)",
          // "--NavItem-icon-color": "var(--mui-palette-neutral-400)",
          // "--NavItem-icon-active-color": "var(--mui-palette-primary-contrastText)",
          // "--NavItem-icon-disabled-color": "var(--mui-palette-neutral-600)",
          // bgcolor: "var(--MobileNav-background)",
          // color: "var(--MobileNav-color)",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          scrollbarWidth: "none",
          width: "var(--MobileNav-width)",
          zIndex: "var(--MobileNav-zIndex)",
          "&::-webkit-scrollbar": { display: "none" },
        },
      } }
      onClose={ onClose }
      open={ open }
    >
      <Box sx={{
        height: "100%",
        backgroundColor: "white",
        border: "none",
      }}>
        <Stack spacing={ 2 } sx={ { p: 3 } }>

          <Box
            sx={ {
              alignItems: "center",
              // backgroundColor: "var(--mui-palette-neutral-950)",
              // border: "1px solid var(--mui-palette-neutral-700)",
              borderRadius: "12px",
              height: 30,
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
      </Box>
    </Drawer>
  );
}

