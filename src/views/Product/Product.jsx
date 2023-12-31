import React from "react";

import { Responsive, Grid } from "semantic-ui-react";
// import { Container, Row, Col } from "shards-react";
import Com01 from "./Com01";
import Com02 from "./Com02";
import Com03 from "./Com03";

import "./Product.css";
import Promotion from "../../components/Promotion/Promotion";

const Product = (props) => {
  const {
    title,
    tab01,
    tab02,
    content01,
    content02,

    images,
  } = props;

  return (
    <div className="p-outbound">
      {/* phone */}
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Promotion></Promotion>
        <Com01 images={images} title={title}></Com01>
        <div className="p-part02-m">
          <Com02
            title={title}
            tab01={tab01}
            tab02={tab02}
            content01={content01}
            content02={content02}
          ></Com02>
        </div>

        {/* <Com04 summary={summary}></Com04> */}
        <br />
        <Com03 images={images}></Com03>
      </Responsive>
      {/* tablet */}
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <Promotion></Promotion>
        <Com01 images={images} title={title}></Com01>
        <div className="p-part02-m">
          <Com02
            title={title}
            tab01={tab01}
            tab02={tab02}
            content01={content01}
            content02={content02}
          ></Com02>
        </div>

        <br />
        <Com03 images={images}></Com03>
      </Responsive>
      {/* desktop */}
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <Promotion></Promotion>

        {/* <Container fluid> */}
        <div className="p-content">
          <Grid columns="2" style={{ margin: "0px" }}>
            <Grid.Row>
              <Grid.Column>
                <Com01 images={images} title={title}></Com01>
              </Grid.Column>
              <Grid.Column>
                <Com02
                  title={title}
                  tab01={tab01}
                  tab02={tab02}
                  content01={content01}
                  content02={content02}
                ></Com02>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* <Com04 summary={summary}></Com04>
          <br />
          <Com05 about={about}></Com05> */}
          <br />
          <Com03 images={images}></Com03>
        </div>
        {/* </Container> */}
      </Responsive>
    </div>
  );
};

export default Product;
