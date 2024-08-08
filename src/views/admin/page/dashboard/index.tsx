import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import React, { FC, ReactNode } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

interface DashboardPageProps{
}

const DashboardPage: FC = React.memo(
  function( props: DashboardPageProps ): ReactNode{
    // console.log(location.pathname);
    const location = useLocation();
    const sx = ( endpoint: string ) => ( {
      ...( location.pathname.includes( ( "/admin/dashboard" ) + "/" + endpoint ) && {
        bgcolor: "var(--base-element-color)",
        color: "var(--NavItem-active-color)"
      } ),
    } );
    return ( <Box>
      <Grid container direction="row" alignItems="center" spacing={ 1 }>
        <Grid><Link to={ "subscription" }><Button sx={ sx( "subscription" ) }>Subscription</Button></Link></Grid>
        <Grid><Link to={ "revenue" }><Button sx={ sx( "revenue" ) }>Revenue</Button></Link></Grid>
      </Grid>
      <Container>
        <Outlet/>
      </Container>
    </Box> );
  }
);
export default DashboardPage;