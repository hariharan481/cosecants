import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { Buton } from "./Buton";
import { ArrowForward } from "@mui/icons-material";

export const Salesforce = () => {
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
        <img src="https://cosecantinc.com/wp-content/uploads/elementor/thumbs/Salesforce.com_logo-e1669983014343-pykj8pptdlfmfml8j9dl82qxteslksf084wetxks1s.png"></img>
        <Typography
          variant="h5"
          color={"black"}
          fontWeight={800}
          position={"relative"}
          marginTop={-8}
          marginLeft={14}
        >
          SalesForce{" "}
        </Typography>
        <Typography
          variant="body2"
          color={"grey"}
          lineHeight={"30px"}
          marginLeft={"60px"}
        >
          Our Salesforce services are all about cost-effectiveness, close
          collaboration, efficiency gains, and process improvements! We will
          deep dive into your existing processes, practices & systems,
          understand your pain points, strategist, consult, recommend routes for
          efficiency gains, take alignments and then build your salesforce
          eco-system that complements your business.
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
  );
};
