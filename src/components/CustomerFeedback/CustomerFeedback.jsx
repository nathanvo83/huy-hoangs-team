import React from "react";
import "./CustomerFeedback.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as ROUTES from "../../constants/routes";
import { Responsive, Grid, Button } from "semantic-ui-react";

const renderMobile = () => (
  <div className="CustomerFeedback-m">
    <div className="CustomerFeedback-container-m">
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="CustomerFeedback-header">
              Hãy thư giãn và tận hưởng những gì chúng tôi mang đến cho bạn.
            </div>
            <div className="CustomerFeedback-title">
              Đo đạc một cách chuyên nghiệp.
            </div>
            <div className="CustomerFeedback-details">
              Chúng tôi sẽ đo lường và tư vấn giải pháp tối ưu nhất cho cửa sổ
              nhà bạn.
            </div>
            <div className="CustomerFeedback-title">
              Thiết kế riêng đáp ứng phong cách của bạn.
            </div>
            <div className="CustomerFeedback-details">
              Tỉ mỉ hoàn thành với sự chính xác tối đa.
            </div>
            <div className="CustomerFeedback-title">Hướng tới sự hoàn hảo.</div>
            <div className="CustomerFeedback-details">
              Chúng tôi lắp đặt và bảo đảm toàn diện chất lượng các sản phẩm của
              chúng tôi.
            </div>

            <br />
            <br />
            <a href={ROUTES.CONTACTUS} rel="noopener noreferrer">
              <Button className="CustomerFeedback-button">Đặt lịch hẹn</Button>
            </a>
            <br />
            <br />
          </Grid.Column>
          <Grid.Column>
            <div className="CustomerFeedback-box">
              <div className="CustomerFeedback-header">
                Những khách hàng hài lòng về chúng tôi
              </div>
              <div className="CustomerFeedback-name">Li Quan</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Chất lượng sản phẩm và dịch vụ tuyệt vời! Tôi rất hài lòng với
                thành phẩm vì nó hoàn toàn phù hợp với phong cách ngôi nhà mới
                của tôi. Rèm cửa Huy Hoàng Blinds đã hoàn thành công việc một
                cách gọn gàng và ngăn nắp. Tôi rất khuyến khích các bạn trải
                nghiệm sản phẩm và dịch vụ ở đây!
              </div>
              <br />
              <div className="CustomerFeedback-name">Nicolas C., Auckland</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Sản phẩm tốt, dịch vụ tuyệt vời và giá cả phải chăng! Chúng tôi
                cảm thấy rất hài lòng vì đã tin tưởng lựa chọn Rèm cửa Huy Hoàng
                và màn cửa của họ. Tôi đã và sẽ tiếp tục giới thiệu Rèm cửa Huy
                Hoàng đến với gia đình và bạn bè của tôi.
              </div>
              <br />
              <div className="CustomerFeedback-name">Christine Keown</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Mức giá rất hợp lý. Việc trao đổi giữa hai bên diễn ra khá thuận
                lợi. Sản phẩm tốt và đúng như ý muốn. Nhân viên làm việc với
                chúng tôi là một người rất dễ gần.
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="CustomerFeedback-t">
    <div className="CustomerFeedback-container-t">
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="CustomerFeedback-header">
              Hãy thư giãn và tận hưởng những gì chúng tôi mang đến cho bạn.
            </div>
            <div className="CustomerFeedback-title">
              Đo đạc một cách chuyên nghiệp.
            </div>
            <div className="CustomerFeedback-details">
              Chúng tôi sẽ đo lường và tư vấn giải pháp tối ưu nhất cho cửa sổ
              nhà bạn.
            </div>
            <div className="CustomerFeedback-title">
              Thiết kế riêng đáp ứng phong cách của bạn.
            </div>
            <div className="CustomerFeedback-details">
              Tỉ mỉ hoàn thành với sự chính xác tối đa.
            </div>
            <div className="CustomerFeedback-title">Hướng tới sự hoàn hảo.</div>
            <div className="CustomerFeedback-details">
              Chúng tôi lắp đặt và bảo đảm toàn diện chất lượng các sản phẩm của
              chúng tôi.
            </div>

            <br />
            <br />
            <a href={ROUTES.CONTACTUS} rel="noopener noreferrer">
              <Button className="CustomerFeedback-button">
                REQUEST AN APPOINTMENT
              </Button>
            </a>
          </Grid.Column>
          <Grid.Column>
            <div className="CustomerFeedback-box">
              <div className="CustomerFeedback-header">Happy Customers</div>
              <div className="CustomerFeedback-name">Li Quan</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Chất lượng sản phẩm và dịch vụ tuyệt vời! Tôi rất hài lòng với
                thành phẩm vì nó hoàn toàn phù hợp với phong cách ngôi nhà mới
                của tôi. Rèm cửa Huy Hoàng Blinds đã hoàn thành công việc một
                cách gọn gàng và ngăn nắp. Tôi rất khuyến khích các bạn trải
                nghiệm sản phẩm và dịch vụ ở đây!
              </div>
              <br />
              <div className="CustomerFeedback-name">Nicolas C., Auckland</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Sản phẩm tốt, dịch vụ tuyệt vời và giá cả phải chăng! Chúng tôi
                cảm thấy rất hài lòng vì đã tin tưởng lựa chọn Rèm cửa Huy Hoàng
                và màn cửa của họ. Tôi đã và sẽ tiếp tục giới thiệu Rèm cửa Huy
                Hoàng đến với gia đình và bạn bè của tôi.
              </div>
              <br />
              <div className="CustomerFeedback-name">Christine Keown</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Mức giá rất hợp lý. Việc trao đổi giữa hai bên diễn ra khá thuận
                lợi. Sản phẩm tốt và đúng như ý muốn. Nhân viên làm việc với
                chúng tôi là một người rất dễ gần.
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="CustomerFeedback">
    <div className="CustomerFeedback-container">
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="CustomerFeedback-header">
              Hãy thư giãn và tận hưởng những gì chúng tôi mang đến cho bạn.
            </div>
            <div className="CustomerFeedback-title">
              Đo đạc một cách chuyên nghiệp.
            </div>
            <div className="CustomerFeedback-details">
              Chúng tôi sẽ đo lường và tư vấn giải pháp tối ưu nhất cho cửa sổ
              nhà bạn.
            </div>
            <div className="CustomerFeedback-title">
              Thiết kế riêng đáp ứng phong cách của bạn.
            </div>
            <div className="CustomerFeedback-details">
              Tỉ mỉ hoàn thành với sự chính xác tối đa.
            </div>
            <div className="CustomerFeedback-title">Hướng tới sự hoàn hảo.</div>
            <div className="CustomerFeedback-details">
              Chúng tôi lắp đặt và bảo đảm toàn diện chất lượng các sản phẩm của
              chúng tôi.
            </div>

            <br />
            <br />
            <a href={ROUTES.CONTACTUS} rel="noopener noreferrer">
              <Button className="CustomerFeedback-button">Đặt lịch hẹn</Button>
            </a>
          </Grid.Column>
          <Grid.Column>
            <div className="CustomerFeedback-box">
              <div className="CustomerFeedback-header">
                Những khách hàng hài lòng về chúng tôi
              </div>

              <div className="CustomerFeedback-name">Li Quan</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Chất lượng sản phẩm và dịch vụ tuyệt vời! Tôi rất hài lòng với
                thành phẩm vì nó hoàn toàn phù hợp với phong cách ngôi nhà mới
                của tôi. Rèm cửa Huy Hoàng Blinds đã hoàn thành công việc một
                cách gọn gàng và ngăn nắp. Tôi rất khuyến khích các bạn trải
                nghiệm sản phẩm và dịch vụ ở đây!
              </div>
              <br />
              <div className="CustomerFeedback-name">Nicolas C., Auckland</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Sản phẩm tốt, dịch vụ tuyệt vời và giá cả phải chăng! Chúng tôi
                cảm thấy rất hài lòng vì đã tin tưởng lựa chọn Rèm cửa Huy Hoàng
                và màn cửa của họ. Tôi đã và sẽ tiếp tục giới thiệu Rèm cửa Huy
                Hoàng đến với gia đình và bạn bè của tôi.
              </div>
              <br />
              <div className="CustomerFeedback-name">Christine Keown</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Mức giá rất hợp lý. Việc trao đổi giữa hai bên diễn ra khá thuận
                lợi. Sản phẩm tốt và đúng như ý muốn. Nhân viên làm việc với
                chúng tôi là một người rất dễ gần.
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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

const CustomerFeedback = () => {
  return <div>{renderContent()}</div>;
};

export default CustomerFeedback;
