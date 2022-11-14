import React from "react";
import { Link } from "react-router-dom";
import MemberNav from "../../../components/mypage/member/MemberNav";
import MemberHeader from "../../../components/mypage/MemberHeader";

import "./Mypage.css"

const Mypage = () => {
  return (
    <>
      <MemberHeader />
      <MemberNav/>
      <div className="mypage-container">
        {/* <div className="side-logo">logo이미지 배치될 곳</div> */}
        {/* <div className="side-container"></div> */}
        <div> <br/><br/><br/><br/></div>
        {/* <div>test</div> */}
        <Link to={"/Invitation"}>test code</Link>
        <div className="Remaining-schedule-text">결혼식 일정까지 56일 남았어요!</div>
        <Link to={"/Mypage/Schedule"}><img className="Remaining-schedule" src="/img/Mypage/wedding-mypage.jpg" alt="이미지-없음"/></Link>
        {/* <div className="Remaining-schedule-text"></div> */}

        {/* 좌측 박스 */}
        <span className="Inquiry-history-id-text">구미님의 문의 내역이에요.</span>
        <div className="Inquiry-history">문의 내용 들어갈 곳</div>

        {/* 우측 박스 */}
        <span className="Product-details-id-text">구미님의 상품 내역이에요.</span>
        <div className="Product-details">상품 내역 들어갈 곳</div>
        
        {/* 최하단 컨테이너 */}
        <span className="bottom-container-title">구미님의 지출 내역이에요.</span>
        <div className="bottom-container"></div>
        
        <footer className="mypage-footer"><span className="mypage-footer-text">ⓒ 2022 (주)성조</span></footer>
      </div>
      {/* <div className="wrap">
      </div> */}
    </>
  );
};

export default Mypage;
