import React from "react";
import { Responsive, Grid } from "semantic-ui-react";
import "./Promotion.css";
import {
  faHandHoldingUsd,
  faSmileWink,
  faUserShield,
  // faHandshake,
  // faRunning,
  // faGlassCheers,
  // faGifts,
  // faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Promotion = () => {
  return (
    <div className="promotion-content">
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Grid columns="3" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="promotion-col-m">
                <div className="promotion-icon-m">
                  <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
                </div>
                <div className="promotion-body">
                  <div className="promotion-title-m">GIÁ CẢ TỐI ƯU</div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col-m">
                <div className="promotion-icon-m">
                  <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                </div>
                <div className="promotion-body">
                  <div className="promotion-title-m">AN TOÀN CHO TRẺ NHỎ</div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col-m">
                <div className="promotion-icon-m">
                  <FontAwesomeIcon icon={faSmileWink}></FontAwesomeIcon>
                </div>
                <div className="promotion-body">
                  <div className="promotion-title-m">HÀI LÒNG</div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <Grid columns="3" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="promotion-col-m">
                <div className="promotion-icon-m">
                  <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
                </div>
                <div className="promotion-body">
                  <div className="promotion-title-m">GIÁ CẢ TỐI ƯU</div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col-m">
                <div className="promotion-icon-m">
                  <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                </div>
                <div className="promotion-body">
                  <div className="promotion-title-m">AN TOÀN CHO TRẺ NHỎ</div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col-m">
                <div className="promotion-icon-m">
                  <FontAwesomeIcon icon={faSmileWink}></FontAwesomeIcon>
                </div>
                <div className="promotion-body">
                  <div className="promotion-title-m">HÀI LÒNG</div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <Grid columns="3" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="promotion-col-outter">
                <div className="promotion-col">
                  <div className="promotion-icon">
                    <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
                  </div>
                  <div className="promotion-body">
                    <div className="promotion-title">GIÁ CẢ TỐI ƯU</div>
                    <div className="promotion-subtitle">
                      Bạn tìm thấy giá rẻ hơn ở nơi khác?
                      <br />
                      Chúng tôi tặng bạn ưu đãi 15%
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col-outter">
                <div className="promotion-col">
                  <div className="promotion-icon">
                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                  </div>
                  <div className="promotion-body">
                    <div className="promotion-title">AN TOÀN CHO TRẺ NHỎ</div>
                    <div className="promotion-subtitle">
                      An toàn của con em bạn
                      <br />
                      là ưu tiên hàng đầu của chúng tôi.
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col-outter">
                <div className="promotion-col">
                  <div className="promotion-icon">
                    <FontAwesomeIcon icon={faSmileWink}></FontAwesomeIcon>
                  </div>
                  <div className="promotion-body">
                    <div className="promotion-title">HÀI LÒNG</div>
                    <div className="promotion-subtitle">
                      Mọi người yêu thích Rèm Cửa Huy Hoàng
                      <br />
                      Hơn 90% khách hàng đánh giá 5 sao.
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </div>
  );
};

export default Promotion;
