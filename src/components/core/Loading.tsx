import { Box, CircularProgress } from "@mui/material";
import { memo, NamedExoticComponent } from "react";

const Loading: NamedExoticComponent = memo(
  function(){
    return ( <>
      <Box sx={ {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      } }>
        <CircularProgress/>
      </Box></> );
  }
);
export default Loading;