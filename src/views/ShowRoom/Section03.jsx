import React from "react";
import "./Section03.css";
import { Responsive, Grid } from "semantic-ui-react";

import h_01 from "../../assets/images/showroom/section03_1.jpg";
import h_02 from "../../assets/images/showroom/section03_2.jpg";
import h_03 from "../../assets/images/showroom/section03_3.jpg";

const renderMobile = () => (
  <div className="section03">
    <div className="section03-container-m">
      <div className="section03-title">Bạn nên làm gì tiếp theo</div>

      <div className="section03-gallery-image">
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="col-container-m">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-m" src={h_01} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  1. Đặt một lịch hẹn tại nhà miễn phí
                </div>
                <div className="section03-item-details">
                  Chọn thời gian phù hợp với bạn, kể cả buổi tối và cuối tuần
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <br />
              <br />
              <div className="col-container-m">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-m" src={h_02} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  2. Nhận lời khuyên từ chuyên gia
                </div>
                <div className="section03-item-details">
                  Cố vấn viên địa phương của bạn sẽ mang đến tất cả hàng mẫu. Họ
                  sẽ đo đạc cửa sổ và báo giá cho bạn những thiết kế mà bạn ưng
                  ý.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <br />
              <br />
              <div className="col-container-m">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-m" src={h_03} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  3. Lắp đặt chuyên nghiệp đã được bao gồm
                </div>
                <div className="section03-item-details">
                  Một khi thành phẩm đã sẵn sàng, cố vấn viên của chúng tôi sẽ
                  lo liệu việc lắp đặt vào thời gian bạn mong muốn vì vậy bạn có
                  thể mong đợi một thành phẩm hoàn hảo.
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
  <div className="section03">
    <div className="section03-container-t">
      <div className="section03-title">Bạn nên làm gì tiếp theo</div>

      <div className="section03-gallery-image">
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="col-container-t">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-t" src={h_01} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  1. Đặt một lịch hẹn tại nhà miễn phí
                </div>
                <div className="section03-item-details">
                  Chọn thời gian phù hợp với bạn, kể cả buổi tối và cuối tuần
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <br />
              <br />
              <div className="col-container-t">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-t" src={h_02} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  2. Nhận lời khuyên từ chuyên gia
                </div>
                <div className="section03-item-details">
                  Cố vấn viên địa phương của bạn sẽ mang đến tất cả hàng mẫu. Họ
                  sẽ đo đạc cửa sổ và báo giá cho bạn những thiết kế mà bạn ưng
                  ý.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <br />
              <br />
              <div className="col-container-t">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-t" src={h_03} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  3. Lắp đặt chuyên nghiệp đã được bao gồm
                </div>
                <div className="section03-item-details">
                  Một khi thành phẩm đã sẵn sàng, cố vấn viên của chúng tôi sẽ
                  lo liệu việc lắp đặt vào thời gian bạn mong muốn vì vậy bạn có
                  thể mong đợi một thành phẩm hoàn hảo.
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
  <div className="section03">
    <div className="section03-container">
      <div className="section03-title">Bạn nên làm gì tiếp theo</div>

      <div className="section03-gallery-image">
        <Grid columns="3">
          <Grid.Row>
            <Grid.Column>
              <div className="col-container">
                <div>
                  <div className="section03-image-box">
                    <img
                      className="section03-image"
                      src={h_01}
                      alt="Book an Appointment"
                    />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  1. Đặt một lịch hẹn tại nhà miễn phí
                </div>
                <div className="section03-item-details">
                  Chọn thời gian phù hợp với bạn, kể cả buổi tối và cuối tuần
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="col-container">
                <div>
                  <div className="section03-image-box">
                    <img
                      className="section03-image"
                      src={h_02}
                      alt="Get Expert Advice"
                    />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  2. Nhận lời khuyên từ chuyên gia
                </div>
                <div className="section03-item-details">
                  Cố vấn viên địa phương của bạn sẽ mang đến tất cả hàng mẫu. Họ
                  sẽ đo đạc cửa sổ và báo giá cho bạn những thiết kế mà bạn ưng
                  ý.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="col-container">
                <div>
                  <div className="section03-image-box">
                    <img
                      className="section03-image"
                      src={h_03}
                      alt="Professional fitting"
                    />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  3. Lắp đặt chuyên nghiệp đã được bao gồm
                </div>
                <div className="section03-item-details">
                  Một khi thành phẩm đã sẵn sàng, cố vấn viên của chúng tôi sẽ
                  lo liệu việc lắp đặt vào thời gian bạn mong muốn vì vậy bạn có
                  thể mong đợi một thành phẩm hoàn hảo.
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

const Section03 = () => {
  return <div>{renderContent()}</div>;
};

export default Section03;
