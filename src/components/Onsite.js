import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import "../Styles/Home2.css";
import { ArrowForward } from "@mui/icons-material";

export const Onsite = () => {
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
            variant="h5"
            color={"black"}
            fontWeight={800}
            position={"relative"}
            marginTop={-4}
            marginLeft={8}
          >
            Onsite Training
          </Typography>
          <Typography
            variant="body2"
            color={"grey"}
            lineHeight={"30px"}
            marginLeft={"60px"}
            marginTop={5}
          >
            Grow your employees understanding of how software functions with
            onsite training in Salesforce and data warehouse technologies. Our
            consultants have dealt with multiple industries and know which
            information suits each situation the best. Our courses are tailored
            to your individual organization’s needs so you get the most out of
            your training experience
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
