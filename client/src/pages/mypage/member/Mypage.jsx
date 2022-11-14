import React from "react";
import { Link } from "react-router-dom";
import MemberNav from "../../../components/mypage/member/MemberNav";
import MemberHeader from "../../../components/mypage/MemberHeader";

import "./Mypage.css"

const Mypage = () => {
  return (
    <>
    {/* <div> */}
      <div className="all-container">
        <MemberHeader />
        <MemberNav/>
        {/* <div className="side-logo">logo이미지 배치될 곳</div> */}
        {/* <div className="side-container"></div> */}
        <div> <br/><br/><br/><br/></div>
        <div>test</div>
        <Link to={"/Invitation"}>test code</Link>
        <div className="Remaining-schedule-text"></div>

        {/* 좌측 박스 */}
        <span className="Inquiry-history-id-text"> 구미님의 문의 내역이에요.</span>
        <div className="Inquiry-history">문의 내용 들어갈 곳</div>

        {/* 우측 박스 */}
        <span className="Product-details-id-text"> 구미님의 상품 내역이에요.</span>
        <div className="Product-details">상품 내역 들어갈 곳</div>

      </div>
    {/* </div> */}
    </>
  );
};

export default Mypage;
