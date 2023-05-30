import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import "../Styles/Home2.css";
import { ArrowForward } from "@mui/icons-material";

export const Online = () => {
  return (
    <div>
      <div>
        <Typography variant="body2" color={"white"}>
          Home
        </Typography>
        <div className="servtop">
          <div className="servtop2"></div>

          <Typography className="caresrhover" variant="body2" color={"white"} fontWeight={650} sx={{
         
        }} >HOME
        
        
        < IconButton disableRipple  >
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
            variant="h5"
            color={"black"}
            fontWeight={800}
            position={"relative"}
            marginTop={-8}
            marginLeft={8}
            className="heads1"
          >
            Online Training
          </Typography>
          <Typography
            variant="body2"
            color={"grey"}
            lineHeight={"30px"}
            marginLeft={"60px"}
            marginTop={5}
          >
            Comprehensive training is available whenever and wherever you need
            it. Through a hassle-free online platform, our training sessions,
            training videos, and knowledgeable in-house consultants will guide
            you through the core elements of your software system.
            <Button
              variant="contained"
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
    </div>
  );
};
