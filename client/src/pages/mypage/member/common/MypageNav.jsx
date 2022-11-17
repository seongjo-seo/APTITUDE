import React from 'react';
import {Link} from "react-router-dom";

import "../static/core.css"

const MypageNav =() =>{
  return (
    <>
      
      {/* static-top     bg-light   topbar */}
      <nav class="side-nav-bar pb-3  navbar-light">
        <div class="navbar">
          <Link to={"/"} class="navbar-brand mx-4 mb-3"><img src='/img/mainLogo.png' alt='...'/></Link>

          <div class="navbar-nav w-100">
              <Link to={"/member/Mypage"} class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>대시보드</Link>
              
              {/* 일정 정보 */}
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>일정정보</a>
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="#" class="dropdown-item">등록 일정 보기</a>
                      <a href="#" class="dropdown-item">일정 관리하기</a>
                  </div>
              </div>

              {/* Gift 관리 */}
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Gift 관리</a>
                <div class="dropdown-menu bg-transparent border-0">
                      <a href="#" class="dropdown-item">등록 일정 보기</a>
                      <a href="#" class="dropdown-item">일정 관리하기</a>
                </div>
              </div>



              {/* Gift 관리 */}
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>행사관리</a>
                <div class="dropdown-menu bg-transparent border-0">
                      <a href="#" class="dropdown-item">견적 1:1 문의하기</a>
                      <a href="#" class="dropdown-item">결제정보 수정</a>
                      <a href="#" class="dropdown-item">채팅내역 보기</a>
                      <a href="#" class="dropdown-item">등록친구 관리</a>
                      <a href="#" class="dropdown-item">차단친구 관리</a>
                      <a href="#" class="dropdown-item">회원 탈퇴신청</a>
                </div>
              </div>


              {/* Gift 관리 */}
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>개인정보</a>
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


              {/* Gift 관리 */}
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>이벤트</a>
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