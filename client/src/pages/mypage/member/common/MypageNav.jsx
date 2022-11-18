import React from 'react';
import {Link} from "react-router-dom";
import {HiCalendarDays} from "react-icons/hi2";
import {AiOutlineGift, AiOutlineUser, AiOutlineArrowDown} from "react-icons/ai";
import {MdOutlineManageAccounts} from "react-icons/md";
import {BsCalendar4Event} from "react-icons/bs";

import "../static/core.css"

const MypageNav =() =>{
  return (
    <>
      
      {/* static-top    pb-3  bg-light   topbar navbar-light */}
      <nav class="side-nav-bar ">
        <div class="navbar">
          <Link to={"/"} class="navbar-brand mx-4 mb-3"><img src='/img/mainLogo.png' alt='...'/></Link>

          <div class="navbar-nav w-100">
              <Link to={"/member/Mypage"} class="nav-item nav-link active">Dashboard</Link>
              <hr/>
              
              {/* 일정 정보 */}
              <div class="nav-item dropdown">
                {/* dropdown-toggle */}
                  <Link href="#" class="nav-link" data-bs-toggle="dropdown"><HiCalendarDays class="fa fa-laptop me-2"/>일정정보</Link>
                  {/* AiOutlineArrowDown */}
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="#" class="dropdown-item">등록 일정 보기</a>
                      <a href="#" class="dropdown-item">일정 관리하기</a>
                  </div>
              </div>

              {/* Gift 관리 */}
              {/*  dropdown-toggle */}
              <div class="nav-item dropdown">
                <Link href="#" class="nav-link" data-bs-toggle="dropdown"><AiOutlineGift class="fa fa-laptop me-2"/>Gift 관리</Link>
                <div class="dropdown-menu bg-transparent border-0">
                    <a href="#" class="dropdown-item">Gift 장바구니</a>
                    <a href="#" class="dropdown-item">Gift 배송조회</a>
                    <a href="#" class="dropdown-item">Gift 리뷰관리</a>
                    <a href="#" class="dropdown-item">Gift 메시지 작성</a>
                </div>
              </div>



              {/* 행사 관리  dropdown-toggle */}
              <div class="nav-item dropdown">
                <a href="#" class="nav-link" data-bs-toggle="dropdown"><MdOutlineManageAccounts class="fa fa-laptop me-2"/>행사관리</a>
                <div class="dropdown-menu bg-transparent border-0">
                      <a href="#" class="dropdown-item">견적 1:1 문의하기</a>
                      <a href="#" class="dropdown-item">택배수령 답례품 설정</a>
                      <a href="#" class="dropdown-item">방문수령 답례품 설정</a>
                      <a href="#" class="dropdown-item">기프티콘 답례품 설정</a>
                </div>
              </div>


              {/* 개인정보  dropdown-toggle */}
              <div class="nav-item dropdown">
                <a href="#" class="nav-link" data-bs-toggle="dropdown"><AiOutlineUser class="fa fa-laptop me-2"/>개인정보</a>
                <div class="dropdown-menu bg-transparent border-0">
                      <a href="#" class="dropdown-item">개인정보 수정</a>
                      <a href="#" class="dropdown-item">결제정보 수정</a>
                      <a href="#" class="dropdown-item">채팅내역 보기</a>
                      <a href="#" class="dropdown-item">거래내역 보기</a>
                      <a href="#" class="dropdown-item">등록친구 관리</a>
                      <a href="#" class="dropdown-item">차단친구 관리</a>
                      <a href="#" class="dropdown-item">회원 탈퇴신청</a>
                </div>
              </div>


              {/* 이벤트 dropdown-toggle */}
              <div class="nav-item dropdown">
                <a href="#" class="nav-link" data-bs-toggle="dropdown"><BsCalendar4Event class="fa fa-laptop me-2"/>이벤트</a>
                <div class="dropdown-menu bg-transparent border-0">
                      <a href="#" class="dropdown-item">쿠폰 등록하기</a>
                      <a href="#" class="dropdown-item">진행 중 이벤트 보기</a>
                      <a href="#" class="dropdown-item">이벤트 결과보기</a>

                </div>
              </div>


                {/* <a href="#" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Widgets</a>
                <a href="#" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</a> */}
              
              
              {/* <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Pages</a>
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="#" class="dropdown-item">Sign In</a>
                      <a href="#" class="dropdown-item">Sign Up</a>
                      <a href="#" class="dropdown-item">404 Error</a>
                      <a href="#" class="dropdown-item">Blank Page</a>
                  </div>
              </div> */}
          </div>
        </div>
      </nav>

    </>
  );
};

export default MypageNav;