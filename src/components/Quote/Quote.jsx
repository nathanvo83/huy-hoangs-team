import React, { useState } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./Quote.css";
import {
  emailjsKey,
  emailjsServiceId,
  emailjsTemplateIdQuote,
} from "../../config/config";
import emailjs from "emailjs-com";
import { Responsive } from "semantic-ui-react";

const Quote = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");

  // const [errorFullName, setErrorFullName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [errorPostCode, setErrorPostCode] = useState(false);

  const fullNameHandler = (e) => {
    setFullName(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  const postCodeHandler = (e) => {
    setPostCode(e.target.value);
  };

  // const checkFullName = () => {
  //   //
  //   setErrorFullName(fullName === "");
  //   return fullName === "";
  // };

  const checkPhone = () => {
    //
    setErrorPhone(phone === "");
    return phone === "";
  };

  const checkEmail = () => {
    //
    setErrorEmail(email === "");
    return email === "";
  };

  const checkAddress = () => {
    //
    setErrorAddress(address === "");
    return address === "";
  };

  const checkPostCode = () => {
    //
    setErrorPostCode(postCode === "");
    return postCode === "";
  };

  const submitHandler = () => {
    const templateParas = {
      fullName,
      phone,
      email,
      address,
      postCode,
    };

    if (
      // !checkFullName() &
      !checkPhone() &
      !checkEmail() &
      !checkAddress() &
      !checkPostCode()
    ) {
      emailjs
        .send(
          emailjsServiceId,
          emailjsTemplateIdQuote,
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
    } else {
      console.log("form invalid");
    }
  };

  const resetHandler = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setPostCode("");

    // setErrorFullName(false);
    setErrorPhone(false);
    setErrorEmail(false);
    setErrorAddress(false);
    setErrorPostCode(false);
  };

  const renderMobile = () => (
    <div className="quote-bg">
      <Form onSubmit={submitHandler}>
        <Form.Field className="quote-field">
          <a href="tel:097 137 2222" rel="noopener noreferrer">
            <div className="quote-phone">
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
              &nbsp; 097 137 2222
            </div>
          </a>
        </Form.Field>
        <Form.Field>
          <div className="quote-title">ĐĂNG KÝ ĐO VÀ BÁO GIÁ MIỄN PHÍ</div>
        </Form.Field>
        <Form.Field className="quote-field">
          <Input
            value={fullName}
            placeholder="Họ và tên"
            onChange={fullNameHandler}
          ></Input>
        </Form.Field>
        <Form.Field className="quote-field">
          {errorPhone ? (
            <Input
              error
              value={phone}
              placeholder="Số điện thoại(*)"
              onChange={phoneHandler}
            ></Input>
          ) : (
            <Input
              value={phone}
              placeholder="Số điện thoại(*)"
              onChange={phoneHandler}
            ></Input>
          )}
        </Form.Field>
        <Form.Field className="quote-field">
          {errorEmail ? (
            <Input
              error
              value={email}
              placeholder="Email(*)"
              onChange={emailHandler}
            ></Input>
          ) : (
            <Input
              value={email}
              placeholder="Email(*)"
              onChange={emailHandler}
            ></Input>
          )}
        </Form.Field>
        <Form.Field className="quote-field">
          {errorAddress ? (
            <Input
              error
              value={address}
              placeholder="Địa chỉ(*)"
              onChange={addressHandler}
            ></Input>
          ) : (
            <Input
              value={address}
              placeholder="Địa chỉ(*)"
              onChange={addressHandler}
            ></Input>
          )}
        </Form.Field>
        <Form.Field className="quote-field">
          {errorPostCode ? (
            <Input
              error
              value={postCode}
              placeholder="Mã bưu chính(*)"
              onChange={postCodeHandler}
            ></Input>
          ) : (
            <Input
              value={postCode}
              placeholder="Mã bưu chính(*)"
              onChange={postCodeHandler}
            ></Input>
          )}
        </Form.Field>
        <div className="quote-bottom">
          <Button type="submit" className="send-btn">
            &nbsp; Đăng ký &nbsp;
          </Button>
        </div>
      </Form>
    </div>
  );
  const renderTablet = () => (
    <div className="quote-bg">
      <Form onSubmit={submitHandler}>
        <Form.Field className="quote-field">
          <a href="tel:097 137 2222" rel="noopener noreferrer">
            <div className="quote-phone">
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
              &nbsp; 097 137 2222
            </div>
          </a>
        </Form.Field>
        <Form.Field>
          <div className="quote-title">ĐĂNG KÝ ĐO VÀ BÁO GIÁ MIỄN PHÍ</div>
        </Form.Field>
        <Form.Field className="quote-field">
          <Input
            value={fullName}
            placeholder="Họ và tên"
            onChange={fullNameHandler}
          ></Input>
        </Form.Field>
        <Form.Field className="quote-field">
          {errorPhone ? (
            <Input
              error
              value={phone}
              placeholder="Số điện thoại(*)"
              onChange={phoneHandler}
            ></Input>
          ) : (
            <Input
              value={phone}
              placeholder="Số điện thoại(*)"
              onChange={phoneHandler}
            ></Input>
          )}
        </Form.Field>
        <Form.Field className="quote-field">
          {errorEmail ? (
            <Input
              error
              value={email}
              placeholder="Email(*)"
              onChange={emailHandler}
            ></Input>
          ) : (
            <Input
              value={email}
              placeholder="Email(*)"
              onChange={emailHandler}
            ></Input>
          )}
        </Form.Field>
        <Form.Field className="quote-field">
          {errorAddress ? (
            <Input
              error
              value={address}
              placeholder="Địa chỉ(*)"
              onChange={addressHandler}
            ></Input>
          ) : (
            <Input
              value={address}
              placeholder="Địa chỉ(*)"
              onChange={addressHandler}
            ></Input>
          )}
        </Form.Field>
        <Form.Field className="quote-field">
          {errorPostCode ? (
            <Input
              error
              value={postCode}
              placeholder="Mã bưu chính(*)"
              onChange={postCodeHandler}
            ></Input>
          ) : (
            <Input
              value={postCode}
              placeholder="Mã bưu chính(*)"
              onChange={postCodeHandler}
            ></Input>
          )}
        </Form.Field>
        <div className="quote-bottom">
          <Button type="submit" className="send-btn">
            &nbsp; Đăng ký &nbsp;
          </Button>
        </div>
      </Form>
    </div>
  );
  const renderDesktop = () => (
    <div className="quote-bg">
      <Form onSubmit={submitHandler}>
        <Form.Field className="quote-field">
          <a href="tel:097 137 2222" rel="noopener noreferrer">
            <div className="quote-phone">
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
              &nbsp; 097 137 2222
            </div>
          </a>
        </Form.Field>
        <Form.Field>
          <div className="quote-title">ĐĂNG KÝ ĐO VÀ BÁO GIÁ MIỄN PHÍ</div>
        </Form.Field>
        <Form.Field className="quote-field">
          <Input
            value={fullName}
            placeholder="Họ và tên"
            onChange={fullNameHandler}
          ></Input>
        </Form.Field>
        <Form.Field className="quote-field">
          {errorPhone ? (
            <Input
              error
              value={phone}
              placeholder="Số điện thoại(*)"
              onChange={phoneHandler}
            ></Input>
          ) : (
            <Input
              value={phone}
              placeholder="Số điện thoại(*)"
              onChange={phoneHandler}
            ></Input>
          )}
        </Form.Field>
        <Form.Field className="quote-field">
          {errorEmail ? (
            <Input
              error
              value={email}
              placeholder="Email(*)"
              onChange={emailHandler}
            ></Input>
          ) : (
            <Input
              value={email}
              placeholder="Email(*)"
              onChange={emailHandler}
            ></Input>
          )}
        </Form.Field>
        <Form.Field className="quote-field">
          {errorAddress ? (
            <Input
              error
              value={address}
              placeholder="Địa chỉ(*)"
              onChange={addressHandler}
            ></Input>
          ) : (
            <Input
              value={address}
              placeholder="Địa chỉ(*)"
              onChange={addressHandler}
            ></Input>
          )}
        </Form.Field>
        <Form.Field className="quote-field">
          {errorPostCode ? (
            <Input
              error
              value={postCode}
              placeholder="Mã bưu chính(*)"
              onChange={postCodeHandler}
            ></Input>
          ) : (
            <Input
              value={postCode}
              placeholder="Mã bưu chính(*)"
              onChange={postCodeHandler}
            ></Input>
          )}
        </Form.Field>
        <div className="quote-bottom">
          <Button type="submit" className="send-btn">
            &nbsp; Đăng ký &nbsp;
          </Button>
        </div>
      </Form>
    </div>
  );

  return (
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
};

export default Quote;
