import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact us</h2>
          <h4 className={classes.description}>
            Divide details about your work into parts. Write a few lines about
            each one and contact us about any further collaboration. We will
            responde get back to you in a couple of hours.
          </h4>
          <form>
            <GridContainer justify="center">
              <GridItem cs={12} sm={12} md={3}>
                <br></br>
                <a
                  className="submit"
                  href="mailto:som.jaiswal.sj@gmail.com.com?subject=FeedBack"
                >
                  <Button color="primary">Send Message</Button>
                </a>
              </GridItem>
              <GridItem cs={12} sm={12} md={3}>
                <br></br>
                <a className="submit" href="http://eepurl.com/hdXBDX">
                  <Button color="primary">Submit Feedback</Button>
                </a>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
