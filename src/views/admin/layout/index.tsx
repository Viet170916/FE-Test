import { MainNav } from "$/components/admin/layout/main-nav.tsx";
import { SideNav } from "$/components/admin/layout/side-nav.tsx";
import { Box, Container, GlobalStyles } from "@mui/material";
import { FC, memo } from "react";
import { Outlet } from "react-router-dom";

// interface AdminLayoutProps{
//   children?: ReactNode;
// }

const AdminLayout: FC = memo(
  function( ){
    return ( <>
      <GlobalStyles
        styles={{
          body: {
            '--MainNav-height': '56px',
            '--MainNav-zIndex': 1000,
            '--SideNav-width': '280px',
            '--SideNav-zIndex': 1100,
            '--MobileNav-width': '320px',
            '--MobileNav-zIndex': 1100,
          },
        }}
      />
      <Box
        sx={{
          bgcolor: 'var(--mui-palette-background-default)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '100%',
        }}
      >
        <SideNav />
        <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', pl: { lg: 'var(--SideNav-width)' } }}>
          <MainNav />
          <main>
            <Container maxWidth="xl" sx={{ py: '64px' }}>
              <Outlet/>
            </Container>
          </main>
        </Box>
      </Box>
    </> );
  }
);
export default AdminLayout;