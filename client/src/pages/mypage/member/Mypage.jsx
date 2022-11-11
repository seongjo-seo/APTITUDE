import React from "react";
import MemberNav from "../../../components/mypage/member/MemberNav";
import MemberHeader from "../../../components/mypage/MemberHeader";

import "./Mypage.css"

const Mypage = () => {
  return (
    <>
      <MemberHeader />
      <MemberNav/>
      <div className="side-logo">logo이미지 배치될 곳</div>
      <div className="side-container"></div>
      <div>test</div>
    </>
  );
};

export default Mypage;
