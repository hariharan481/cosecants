import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import "../Styles/Serv1.css";
import { ArrowForward } from "@mui/icons-material";

export const Webdeveloment = () => {
  return (
    <div>
      <div className="servtop">
        <div className="servtop2"></div>

        <Typography className="caresrhover" variant="body2" color={"white"} fontWeight={650} sx={{
         
        }} >HOME
        
        
        <IconButton disableRipple  >
          <ArrowForward fontWeight={650} sx={{
            color:"white",
            fontSize:"15px",
            

          }}  /><Typography variant="body2" color={"white"}>CONTACT US</Typography>
        </IconButton>
        </Typography>
      </div>
      <Box
        sx={{
          height: "300px",
          width: "1000px",
          marginTop: "130px",
          justifyContent: "center",
          marginLeft: "90px",
          lineHeight: "50px",
        }}
      >
        <Typography
          variant="h6"
          color={"black"}
          fontWeight={600}
          position={"relative"}
          marginTop={-8}
          marginLeft={7}
          fontSize={"35px"}
        >
          Web Development Services
        </Typography>
        <Typography
          variant="body2"
          color={"grey"}
          lineHeight={"30px"}
          marginLeft={"60px"}
        >
          Our skilled web developers implement the most recent innovation
          strategies to build unique web applications that suit your business
          needs. If you aspire to develop successful business website solutions
          with brand presence and high-quality lead generation techniques,
          Cosecant provides affordable, quality websites and related services
          for businesses.
          <Button
            variant="contained"
            className="muibutt"
            href="/cont"
            sx={{
              background: "black",
              justifyContent: "center",
              marginLeft: "400px",
              marginTop: "20px",
              height: "50px",
              width: "300px",
            }}
          >
            {" "}
            Contact us
          </Button>
        </Typography>
      </Box>
    </div>
  );
};
