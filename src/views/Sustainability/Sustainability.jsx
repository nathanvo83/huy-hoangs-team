import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Section01 from "./Section01";
import "./Sustainability.css";
import img_p01 from "../../assets/images/sustainability/pollution.jpg";
import img_p02 from "../../assets/images/sustainability/sea-tex.jpg";
import img_p03 from "../../assets/images/sustainability/flx-yarn.jpg";
import img_p04 from "../../assets/images/sustainability/fabric.png";

const Sustainability = () => {
  document.title = "Sustainable Roller Blinds | Soho Blinds";

  return (
    <React.Fragment>
      <Header showQuote={false} showSale={false} showSlogan={false}></Header>
      <div className="sustain-container">
        {renderTitle()}
        {renderDetails()}
      </div>
      <Section01></Section01>
    </React.Fragment>
  );
};

const renderDetails = () => (
  <div className="sustain-details">
    <p>
      Mành Cuốn là tương lai của thiết kế nội thất.
      <br />
      Tại sao lại như vậy?
      <br />
      Nội thất là thứ luôn luôn phản ánh thế giới xung quanh chúng ta. Vì thế,
      với nhận thức ngày càng rõ rệt về biến đổi khí hậu cùng tính bền vững và
      việc tái chế đóng vai trò thiết yếu trong cuộc sống hiện đại ngày nay,
      thiết kế nội thất cũng phải phản ánh và truyền tải điều này. Vậy, đâu là
      phương pháp, cách làm cụ thể mà thiết kế bền vững giúp ích cho việc bảo vệ
      môi trường và đại dương của chúng ta?
      <br />
      Hãy cùng tìm hiểu nhé!
      <br />
    </p>
    <div className="sustain-details-title">
      Khủng hoảng rác thải nhựa ở đại dương
    </div>
    <p>
      Nhu cầu về thiết kế bền vững đã trở nên cấp thiết hơn bao giờ hết. Qua
      đánh giá cẩn trọng, ước tính có khoảng 5,25 nghìn tỷ mành nhựa đang trôi
      nổi trên bề mặt đại dương của thế giới chúng ta. Một lượng lớn rác thải
      như vậy đang gây ra những tác hại vô cùng nghiêm trọng đến môi trường và
      hệ sinh thái biển vòng quanh thế giới.
      <br />
      Nhưng chúng ta cần làm gì?
      <br />
      Và điều này có liên quan như thế nào đến ngành thiết kế?
      <br />
    </p>
    <div style={{ textAlign: "center" }}>
      <img className="sustain-details-image" src={img_p01} alt="" />
    </div>

    <div className="sustain-details-title">
      Vải mành nhựa tái chế Greenscreen Sea-Tex
    </div>
    <p>
      Greenscreen Sea-Tex là một dòng vải độc đáo mang đến giải pháp thiết thực
      để giảm thiểu ô nhiễm đại dương gây ra bởi rác thải nhựa và nó đã được
      trao giải thưởng nhờ giúp ích cho hệ sinh thái của chúng ta. Loại vải này
      được làm từ nhựa đại dương được tái chế và nó được sáng tạo và phát triển
      bởi Hunter Douglas. Mành Cuốn bền vững được tạo ra từ loại vải này.
      <br />
    </p>
    <div style={{ textAlign: "center" }}>
      <img className="sustain-details-image" src={img_p02} alt="" />
    </div>

    <div className="sustain-details-title">
      Vải mành nhựa tái chế Greenscreen Sea-Tex
    </div>
    <p>
      Sợi FLX được hình thành bằng cách đốt và kéo sợi hàng tá sợi nhựa phế
      thải. Sau đó, nó được kết hợp tinh vi để tạo nên lớp nền của vải Sea-Tex.
      Dòng vải độc đáo này mang đến một giải pháp thiết thực để giảm ô nhiễm
      nhựa đại dương. Loại vải này được làm từ nhựa đại dương được tái chế và nó
      được sáng tạo và phát triển bởi Hunter Douglas. Mành Cuốn bền vững được
      tạo ra từ loại vải này.
    </p>
    <div style={{ textAlign: "center" }}>
      <img className="sustain-details-image" src={img_p03} alt="" />
    </div>
    <p>
      Điều này nghe có vẻ ấn tượng và rất có ích cho môi trường, nhưng nó có
      thiết thực để ứng dụng tại nhà không? Câu trả lời là có, rất thiết thực.
      <br />
      <ul>
        <li>
          Trước hết, đây là loại vải kiên cố và linh hoạt, lý tưởng đối với bối
          cảnh thực tế trong nước.
        </li>
        <li>
          Thứ hai, nó có hệ số mở 2-3%, tức là nó có khả năng giữ nhiệt hiệu
          quả.
        </li>
        <li>
          Thứ ba, nó có đặc tính chống cháy tuyệt vời có, điều này có thể hiểu
          là nó cực kỳ an toàn. Tuy nhiên, điều quan trọng nhất là nó không chứa
          PVC và halogen.
        </li>
      </ul>
      Vậy, Greenscreen Sea-Tex trông như thế nào trong thực tế?
    </p>

    <div className="sustain-details-title">
      Phong cách tái chế bị đánh giá thấp
    </div>
    <p>
      Greenscreen Sea-Tex có thể được dùng để tạo ra Mành Cuốn tiêu chuẩn với độ
      mờ của vải khác nhau.
      <br />
      Về màu sắc và tông màu, chúng thể hiện một phong cách lặng phù hợp với đại
      đa số thiết kế nội thất.
      <br />
      Các màu sắc bao gồm:
      <br />
      <ul>
        <li>Màu than chì</li>
        <li>Màu sương mù</li>
        <li>Màu cát</li>
        <li>Màu ngọc trai</li>
        <li>Màu trắng</li>
      </ul>
      Bạn có thể xem mẫu của các màu này ở bên dưới. Ngoài ra, bạn cũng có thể
      tùy chọn màu sắc bạn mong muốn.
    </p>
    <div style={{ textAlign: "center" }}>
      <img className="sustain-details-image" src={img_p04} alt="" />
    </div>
    <p>
      Đối với thiết kế trong tương lai, chúng tôi tin rằng tính bền vững sẽ là
      mối quan tâm hàng đầu. Những sáng kiến như Greenscreen Sea-Tex ngày càng
      trở nên phổ biến sẽ không chỉ thay đổi cách chúng ta nhìn ngôi nhà của
      mình mà còn là cách chúng ta nhìn nhận về cả thế giới bên ngoài.
      <br />
      Nếu bạn muốn biết thêm về thiết kế bền vững hoặc đầu tư vào Greenscreen
      Sea-Tex cho ngôi nhà của mình, đừng chần chừ mà hãy liên hệ với chúng tôi.
      <br />
      Cảm ơn bạn đã đọc đến đây.
    </p>
  </div>
);

const renderTitle = () => (
  <div>
    <div className="sustain-title">MÀNH CUỐN BỀN VỮNG</div>
    <div className="sustain-subtitle">
      Tại sao Mành Cuốn là tương lai của thiết kế nội thất?
      <br />
      (và chúng đang cứu lấy đại dương của chúng ta như thế nào?)
    </div>
  </div>
);

export default Sustainability;
