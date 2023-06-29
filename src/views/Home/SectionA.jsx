import React from "react";
import "./SectionA.css";
import { Responsive, Grid } from "semantic-ui-react";
import * as ROUTES from "../../constants/routes";

import h_01 from "../../assets/images/home/h-01.png";
import h_02 from "../../assets/images/home/h-02.jpg";
import h_03 from "../../assets/images/home/h-03.png";

import sale_off from "../../assets/images/home/sale_off.png";

const renderMobile = () => (
  <div className="sectionA">
    <div className="sectionA-container-m">
      <div className="sectionA-title">
        &nbsp; &bull; Đo lường chuyên nghiệp
        <br />
        &nbsp; &bull; Đáp ứng nhu cầu
        <br />
        &nbsp; &bull; Hoàn thiện cho bạn
      </div>
      <div className="sectionA-subtitle">
        Yên tâm lựa chọn màn cửa, cửa chớp và mành. Chúng tôi sẽ tận tâm đo
        lường, thiết kế và hoàn thiện sự lựa chọn của bạn
      </div>

      <div className="sectionA-gallery-image">
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="col-container-m">
                <a href={ROUTES.BLINDS_ROLLER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-m" src={h_01} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Mành</div>

                <div className="sectionA-item-details">
                  Với sự kết hợp hài hoà giữa phong cách hiện đại và lợi ích
                  thiết thực, mẫu mã mành đa dạng của chúng tôi đem đến giải
                  pháp tối ưu cho phong cách ngôi nhà của bạn.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ROLLER}
                    rel="noopener noreferrer"
                  >
                    Mành Cuốn
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VENETIAN}
                    rel="noopener noreferrer"
                  >
                    Mành Sáo Ngang
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VERTICAL}
                    rel="noopener noreferrer"
                  >
                    Mành Lá Dọc
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ZEBRA}
                    rel="noopener noreferrer"
                  >
                    Mành Cầu Vồng
                  </a>
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <br />
              <br />
              <div className="col-container-m">
                <a href={ROUTES.CURTAIN_DAY} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-m" src={h_02} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Màn Cửa</div>

                <div className="sectionA-item-details">
                  Tô điểm nét tinh tế, sang trọng cho ngôi nhà / tổ ấm của bạn
                  với bộ sưu tập màn cửa đẹp cùng chất lượng vải hàng đầu và
                  kiểu dáng theo xu hướng.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_DAY}
                    rel="noopener noreferrer"
                  >
                    Màn Voan
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_NIGHT}
                    rel="noopener noreferrer"
                  >
                    Màn Chống Nắng và Nóng
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <br />
              <br />
              <div className="col-container-m">
                <a href={ROUTES.SHUTTER_TIMBER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-m" src={h_03} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Cửa Chớp</div>

                <div className="sectionA-item-details">
                  Loạt kiểu dáng và màu sắc ấn tượng từ bộ sưu tập cửa chớp của
                  chúng tôi đáp ứng phong cách của riêng bạn và mang đến sự lý
                  tưởng cho mọi căn phòng.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_TIMBER}
                    rel="noopener noreferrer"
                  >
                    Cửa Chớp Gỗ
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_PVC}
                    rel="noopener noreferrer"
                  >
                    Cửa Chớp PVC
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_EXTERIOR}
                    rel="noopener noreferrer"
                  >
                    Cửa Chớp Ngoài Trời
                  </a>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="sectionA">
    <div className="sectionA-container-t">
      <div className="sectionA-title">
        Đo lường chuyên nghiệp &nbsp; &bull; &nbsp;Đáp ứng nhu cầu &nbsp; &bull;
        &nbsp; Hoàn thiện cho bạn
      </div>
      <div className="sectionA-subtitle">
        Yên tâm lựa chọn màn cửa, cửa chớp và mành. Chúng tôi sẽ tận tâm đo
        lường, thiết kế và hoàn thiện sự lựa chọn của bạn.
      </div>

      <div className="sectionA-gallery-image">
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="col-container-t">
                <a href={ROUTES.BLINDS_ROLLER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-t" src={h_01} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Mành</div>

                <div className="sectionA-item-details">
                  Với sự kết hợp hài hoà giữa phong cách hiện đại và lợi ích
                  thiết thực, mẫu mã mành đa dạng của chúng tôi đem đến giải
                  pháp tối ưu cho phong cách ngôi nhà của bạn.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ROLLER}
                    rel="noopener noreferrer"
                  >
                    Mành Cuốn
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VENETIAN}
                    rel="noopener noreferrer"
                  >
                    Mành Sáo Ngang
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VERTICAL}
                    rel="noopener noreferrer"
                  >
                    Mành Lá Dọc
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ZEBRA}
                    rel="noopener noreferrer"
                  >
                    Mành Cầu Vồng
                  </a>
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <br />
              <br />
              <div className="col-container-t">
                <a href={ROUTES.CURTAIN_DAY} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-t" src={h_02} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Màn Cửa</div>

                <div className="sectionA-item-details">
                  Tô điểm nét tinh tế, sang trọng cho ngôi nhà / tổ ấm của bạn
                  với bộ sưu tập màn cửa đẹp cùng chất lượng vải hàng đầu và
                  kiểu dáng theo xu hướng.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_DAY}
                    rel="noopener noreferrer"
                  >
                    Màn Voan
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_NIGHT}
                    rel="noopener noreferrer"
                  >
                    Màn Chống Nắng và Nóng
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <br />
              <br />
              <div className="col-container-t">
                <a href={ROUTES.SHUTTER_TIMBER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-t" src={h_03} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Cửa Chớp</div>

                <div className="sectionA-item-details">
                  Loạt kiểu dáng và màu sắc ấn tượng từ bộ sưu tập cửa chớp của
                  chúng tôi đáp ứng phong cách của riêng bạn và mang đến sự lý
                  tưởng cho mọi căn phòng.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_TIMBER}
                    rel="noopener noreferrer"
                  >
                    Cửa Chớp Gỗ
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_PVC}
                    rel="noopener noreferrer"
                  >
                    Cửa Chớp PVC
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_EXTERIOR}
                    rel="noopener noreferrer"
                  >
                    Cửa Chớp Ngoài Trời
                  </a>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="sectionA">
    <div className="sectionA-container">
      <div className="sectionA-title">
        Đo lường chuyên nghiệp &nbsp; &bull; &nbsp;Đáp ứng nhu cầu &nbsp; &bull;
        &nbsp; Hoàn thiện cho bạn
      </div>
      <div className="sectionA-subtitle">
        Yên tâm lựa chọn màn cửa, cửa chớp và mành. Chúng tôi sẽ tận tâm đo
        lường, thiết kế và hoàn thiện sự lựa chọn của bạn.
      </div>

      <div className="sectionA-gallery-image">
        <Grid columns="3">
          <Grid.Row>
            <Grid.Column>
              <div className="col-container">
                <a href={ROUTES.BLINDS_ROLLER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image" src={h_01} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Mành</div>

                <div className="sectionA-item-details">
                  Với sự kết hợp hài hoà giữa phong cách hiện đại và lợi ích
                  thiết thực, mẫu mã mành đa dạng của chúng tôi đem đến giải
                  pháp tối ưu cho phong cách ngôi nhà của bạn.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ROLLER}
                    rel="noopener noreferrer"
                  >
                    Mành Cuốn
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VENETIAN}
                    rel="noopener noreferrer"
                  >
                    Mành Sáo Ngang
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VERTICAL}
                    rel="noopener noreferrer"
                  >
                    Mành Lá Dọc
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ZEBRA}
                    rel="noopener noreferrer"
                  >
                    Mành Cầu Vồng
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="col-container">
                <a href={ROUTES.CURTAIN_DAY} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image" src={h_02} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Màn Cửa</div>

                <div className="sectionA-item-details">
                  Tô điểm nét tinh tế, sang trọng cho ngôi nhà / tổ ấm của bạn
                  với bộ sưu tập màn cửa đẹp cùng chất lượng vải hàng đầu và
                  kiểu dáng theo xu hướng.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_DAY}
                    rel="noopener noreferrer"
                  >
                    Màn Voan
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_NIGHT}
                    rel="noopener noreferrer"
                  >
                    Màn Chống Nắng và Nóng
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="col-container">
                <a href={ROUTES.SHUTTER_TIMBER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image" src={h_03} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Cửa Chớp</div>

                <div className="sectionA-item-details">
                  Loạt kiểu dáng và màu sắc ấn tượng từ bộ sưu tập cửa chớp của
                  chúng tôi đáp ứng phong cách của riêng bạn và mang đến sự lý
                  tưởng cho mọi căn phòng.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_TIMBER}
                    rel="noopener noreferrer"
                  >
                    Cửa Chớp Gỗ
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_PVC}
                    rel="noopener noreferrer"
                  >
                    Cửa Chớp PVC
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_EXTERIOR}
                    rel="noopener noreferrer"
                  >
                    Cửa Chớp Ngoài Trời
                  </a>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </div>
);

const renderContent = () => (
  <div>
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      {renderMobile()}
    </Responsive>
    <Responsive
      minWidth={Responsive.onlyTablet.minWidth}
      maxWidth={Responsive.onlyTablet.maxWidth}
    >
      {renderTablet()}
    </Responsive>
    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      {renderDesktop()}
    </Responsive>
  </div>
);

const SectionA = () => {
  return <div>{renderContent()}</div>;
};

export default SectionA;
