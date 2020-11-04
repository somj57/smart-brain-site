import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Build from "@material-ui/icons/Build";
import Web from "@material-ui/icons/Web";
import PersonOutline from "@material-ui/icons/PersonOutline";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import team1 from "assets/img/faces/facereco.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            Machine learning is a method of data analysis that automates
            analytical model building. It is a branch of artificial intelligence
            based on the idea that systems can learn from data, identify
            patterns and make decisions with minimal human intervention.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Face Mask Detection"
              description="Face Mask Detection System uses existing IP cameras and CCTV cameras combined with Computer Vision to detect people without masks."
              icon={Face}
              iconColor="success"
              vertical
            />
            <Button
              color="info"
              round
              size="sm"
              href="https://drive.google.com/drive/folders/1OT4Mp_bXBLO1twGKqiFfqPdsJWdykCul?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-play" />
              Try It
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Face Detection Model"
              description="This Model is build very efficient so you can track People and further use that data for different activities. This is very simple and easy to use "
              icon={PersonOutline}
              iconColor="success"
              vertical
            />
            <Button
              color="info"
              round
              size="sm"
              href="https://somj57.github.io/Smart-brain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-play" />
              Try It
            </Button>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Technology We Use</h2>
            <br></br>
            <img src={team1} alt="..." width="80%" />
            <br></br>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Python"
              description="Python is also usable as an extension language for applications written in other languages that need easy-to-use scripting or automation interfaces. Python is widely considered as the preferred language for teaching and learning Ml (Machine Learning)"
              icon={Build}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Javascript"
              description="Use off-the-shelf JavaScript models or convert Python TensorFlow models to run in the browser or under Node.js. Beside that JavaScript is also used for webpage design"
              icon={Web}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="React"
              description="React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. ... React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple"
              icon={Web}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

// <GridItem xs={12} sm={12} md={4}>
//   <InfoArea
//     title="Fingerprint"
//     description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
//     icon={Fingerprint}
//     iconColor="danger"
//     vertical
//   />
// </GridItem>
