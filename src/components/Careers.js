import { ArrowForward } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

export const Careers = () => {
  return (
    <>
      <div className="servtop">
        <div className="servtop2"></div>
        <div>
        <Typography className="caresrhover" variant="body2" color={"white"} fontWeight={650} sx={{
         
        }} >HOME
        
        
        <IconButton disableRipple  >
          <ArrowForward fontWeight={650} sx={{
            color:"white",
            fontSize:"15px",
            

          }}  /><Typography variant="body2" color={"white"}>CAREERS</Typography>
        </IconButton>
        </Typography>
        </div>

        
      </div>
      <Box
        sx={{
          height: "300px",
          width: "500px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" mt={5}>
          No openings right now. Stay tuned
        </Typography>
      </Box>
    </>
  );
};
