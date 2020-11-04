import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/som8.png";
import team2 from "assets/img/faces/suryansh.jpg";
import team3 from "assets/img/faces/raj.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Somya Jaiswal
                <br />
                <small className={classes.smallTitle}>
                  Web Designer, Backend Developer
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Hi! I{"''"}am a Full Stack Developer with masters in
                  programming languages like in Python, Java, C and C++. Beside
                  that I also use React and Node js for Web Projects.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <a href="https://twitter.com/somj57">
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    onClick="https://twitter.com/somj57"
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                </a>
                <a href="https://www.instagram.com/som.jaiswal.sj/">
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                </a>
                <a href="https://www.facebook.com/som.jaiswal.144/">
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Suryansh Yadav
                <br />
                <small className={classes.smallTitle}>Backend Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Hi! I{"''"}am a Full Stack Developer with masters in
                  programming languages like in Python, Java, C and C++. Beside
                  that I also use React and Node js for Web Projects.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <a href="https://twitter.com/suryansh098">
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                </a>
                <a href="https://www.instagram.com/suryansh098/">
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                </a>
                <a href="https://www.facebook.com/suryansh.yadav.731">
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Raj Vardhan Singh
                <br />
                <small className={classes.smallTitle}>Designer,Tester</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Hi! I{"''"}am a Full Stack Developer with masters in
                  programming languages like in Python, Java, C and C++. Beside
                  that I also use Node js for Web Projects.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <a href="https://twitter.com/rajsingh14453">
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                </a>
                <a href="https://www.instagram.com/pranjal_singh2300/">
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                </a>
                <a href="https://www.facebook.com/pranjal.singh.524381">
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
