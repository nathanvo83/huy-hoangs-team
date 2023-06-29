import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Form,
  Button,
  Grid,
  Responsive,
  TextArea,
  Input,
} from "semantic-ui-react";
import {
  emailjsKey,
  emailjsServiceId,
  emailjsTemplateIdContactUs,
} from "../../config/config";
import emailjs from "emailjs-com";
import { faClock, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [query, setQuery] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  useEffect(() => {
    let hash = window.location.hash;
    let el = hash ? document.querySelector(hash) : null;
    if (el) {
      window.scrollTo({
        top: el.offsetTop + 70,
        left: 0,
        behavior: "smooth",
      });
    }
  });
  // const [errorQuery, setErrorQuery] = useState(false);

  const yourNameHandler = (e) => {
    setYourName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  const checkEmail = () => {
    setErrorEmail(email === "");
    return email === "";
  };

  const checkPhone = () => {
    setErrorPhone(phone === "");
    return phone === "";
  };

  const submitHandler = () => {
    const templateParas = {
      yourName,
      email,
      phone,
      subject,
      query,
    };

    if (!checkPhone() & !checkEmail()) {
      emailjs
        .send(
          emailjsServiceId,
          emailjsTemplateIdContactUs,
          templateParas,
          emailjsKey
        )
        .then(
          (result) => {
            console.log(result.text);
            resetHandler();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const resetHandler = () => {
    setYourName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setQuery("");

    setErrorEmail(false);
    setErrorPhone(false);
    // setErrorQuery(false);
  };

  const renderForm = () => (
    <div className="contact-form">
      <Form onSubmit={submitHandler}>
        <Form.Field className="contact-field">
          <div className="contact-field-title">Họ và tên:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          <Input
            value={yourName}
            onChange={yourNameHandler}
            placeholder="Họ và tên"
          ></Input>
        </Form.Field>

        <Form.Field className="contact-field">
          <div className="contact-field-title">Email:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          {errorEmail ? (
            <Input
              error
              value={email}
              onChange={emailHandler}
              placeholder="Email (*)"
            ></Input>
          ) : (
            <Input
              value={email}
              onChange={emailHandler}
              placeholder="Email (*)"
            ></Input>
          )}
        </Form.Field>

        <Form.Field className="contact-field">
          <div className="contact-field-title">Số điện thoại:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          {errorPhone ? (
            <Input
              error
              value={phone}
              onChange={phoneHandler}
              placeholder="Số điện thoại (*)"
            ></Input>
          ) : (
            <Input
              value={phone}
              onChange={phoneHandler}
              placeholder="Số điện thoại (*)"
            ></Input>
          )}
        </Form.Field>

        <Form.Field className="contact-field">
          <div className="contact-field-title">Chủ đề:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          <Input
            value={subject}
            onChange={subjectHandler}
            placeholder="Chủ đề"
          ></Input>
        </Form.Field>

        <Form.Field className="contact-field">
          <div className="contact-field-title">Nội dung:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          <TextArea
            value={query}
            onChange={queryHandler}
            placeholder="Nội dung"
          ></TextArea>
        </Form.Field>

        <div className="contact-bottom">
          <Button type="submit" className="contact-send-btn">
            &nbsp; GỬI &nbsp;
          </Button>
        </div>
      </Form>
    </div>
  );

  const renderDetails = () => (
    <div className="contact-details">
      <div className="contact-details-title">Bạn sẽ nhận được gì</div>
      <div>
        Công việc của cố vấn chúng tôi là làm cho cuộc sống của bạn dễ dàng nhất
        có thể với những ý tưởng đầy cảm hứng và giải pháp thiết thực cho ngôi
        nhà của bạn.
      </div>
      <div className="contact-details-subtitle">Cố vấn viên của bạn sẽ</div>
      <div className="contact-details-item">
        <FontAwesomeIcon icon={faHeart} className="contact-details-icon" />
        Tiếp cận bạn một cách thoải mái, đưa ra những ý tưởng đầy cảm hứng và
        giải pháp thiết thực
      </div>
      <div className="contact-details-item">
        <FontAwesomeIcon icon={faHeart} className="contact-details-icon" />
        Đồng hành với bạn xuyên suốt thời gian bạn cần, thường rơi vào khoảng 45
        phút (thời gian sẽ lâu hơn một chút đối với cửa chớp và rèm mái nhà
        kính)
      </div>
      <div className="contact-details-item">
        <FontAwesomeIcon icon={faHeart} className="contact-details-icon" />
        Đo cửa sổ của bạn
      </div>
      <div className="contact-details-item">
        <FontAwesomeIcon icon={faHeart} className="contact-details-icon" />
        Cung cấp báo giá chính xác cho sản phẩm bạn đã chọn
      </div>
    </div>
  );

  const renderTitle = () => (
    <div>
      <div className="contact-title">ĐĂNG KÝ ĐO ĐẠC VÀ BÁO GIÁ MIỄN PHÍ</div>
      <div className="contact-subtitle">
        Gọi ngay số 097 137 2222 hoặc điền vào mẫu dưới đây để người đại diện
        kinh doanh của Rèm cửa Huy Hoàng liên hệ với bạn.
      </div>
    </div>
  );

  const renderNote = () => {
    return (
      <div className="contact-note">
        *Điều khoản và điều kiện áp dụng. Thông số kỹ thuật và màu sắc thiết kế
        sản phẩm có thể thay đổi mà không cần thông báo trước và có thể khác với
        những gì được hiển thị. Hình ảnh hiển thị trên trang web chỉ nhằm mục
        đích minh họa. Hình ảnh nhằm giúp minh họa cách các sản phẩm khác nhau
        xuất hiện và cách chúng có thể được áp dụng trong các tình huống khác
        nhau.
      </div>
    );
  };

  const renderShowRoom = (type) => {
    return (
      <div id="contact-showroom" className={`contact-showroom ${type}`}>
        <div className="title">
          <div className="text">SHOWROOM</div>
        </div>

        <div className="content">
          <div>
            <FontAwesomeIcon icon={faHome} className="icon" /> Số 647 Điện Biên
            Phủ, Phường 1, Quận 3, Thành phố Hồ Chí Minh.
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className="icon" /> Vui lòng đặt
            lịch hẹn trước để chúng tôi có thể hỗ trợ bạn tốt nhất.
          </div>
        </div>
      </div>
    );
  };

  const renderDesktop = () => (
    <div>
      <div className="contact-container">
        {renderShowRoom("")}
        {renderTitle()}
        <Grid columns="2" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>{renderForm()}</Grid.Column>
            <Grid.Column>{renderDetails()}</Grid.Column>
          </Grid.Row>
        </Grid>
        {renderNote()}
      </div>
    </div>
  );

  const renderMobile = () => (
    <div>
      <div className="contact-container-m">
        {renderShowRoom("m")}
        {renderTitle()}
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>{renderForm()}</Grid.Column>
            <Grid.Column>{renderDetails()}</Grid.Column>
          </Grid.Row>
        </Grid>
        {renderNote()}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Header showQuote={false} showSale={false} showSlogan={false}></Header>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        {/*  */}
        {renderMobile()}
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        {renderMobile()}
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        {renderDesktop()}
      </Responsive>
      <br />
      <br />
    </React.Fragment>
  );
};

export default ContactUs;
