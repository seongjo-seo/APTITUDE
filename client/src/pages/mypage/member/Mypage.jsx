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
      {/* <div className="side-logo">logo이미지 배치될 곳</div> */}
      {/* <div className="side-container"></div> */}
      <div>test</div>
      <Link to={"/Invitation"}>test code</Link>
    </>
  );
};

export default Mypage;
