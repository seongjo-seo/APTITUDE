import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineUser, AiOutlineGift} from "react-icons/ai";
import {TiMessages} from "react-icons/ti";
import {BsThreeDotsVertical} from "react-icons/bs";
import {GiMoneyStack} from "react-icons/gi";

import "./static/core.css";
import MypageFooter from "./common/MypageFooter";
import MypageNav from "./common/MypageNav";
import MypageTopNav from "./common/MypageTopNav";


const Mypage = () => {
  return (
    <>
    
    <MypageNav/>
    
    <section className="mypage-section-right-size">
      {/* <nav className="">
      </nav> */}

      {/* 뒷 배경 색상 코어 잡는 곳. */}
      <div id="wrapper"> 



      {/* Content Wrapper */}
      <div id="content-wrapper" class="d-flex flex-column">
        <MypageTopNav/>




          {/* <!-- Main Content --> */}
          <div id="content">

              

              {/* <!-- Begin Page Content --> */}
              <div class="container-fluid">

              {/* <!-- Content Row --> */}
                    
                    <div class="row">
                      {/* 첫번째 작은 컨테이너 시작  */}
                      <div class="col-xl-4 col-md-6 mb-5">
                          <div class="card border-left-primary shadow h-100 py-2">
                              <div class="card-body">
                                  <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                        {/* text-xs */}
                                          <div class="font-weight-bold text-primary text-uppercase mb-1"> 남은 금액</div>
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">530,400원</div>
                                      </div>
                                      <div class="col-auto">
                                        <GiMoneyStack class="fas fa-calendar fa-2x"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* 첫번째 작은 컨테이너 끝 */}

                      {/* 두번째 최근 지출 금액 컨테이너 시작 */}
                      <div class="col-xl-4 col-md-6 mb-5">
                          <div class="card border-left-success shadow h-100 py-2">
                              <div class="card-body">
                                  <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                        {/* text-xs */}
                                          <div class="font-weight-bold text-success text-uppercase mb-1">최근 지출 금액</div>
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">469,600원</div>
                                      </div>
                                      <div class="col-auto">
                                          <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* 최근 지출 금액 컨테이너 끝 */}


                      {/* 세번째 주문 건수 컨테이너 시작 */}
                      <div class="col-xl-4 col-md-6 mb-5">
                          <div class="card border-left-warning shadow h-100 py-2">
                              <div class="card-body">
                                  <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                        {/* text-xs  */}
                                          <div class="font-weight-bold text-warning text-uppercase mb-1">주문 완료</div>
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">6건</div>
                                      </div>
                                      <div class="col-auto">
                                        <AiOutlineGift style={{width:"36", height:"36", viewBox:"0 0 36 36"}}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* 세번째 주문 건수 컨테이너 끝 */}
                    </div>

                  {/* <!-- Content Row --> */}

                  <div class="row">
                  
                      {/* <!-- Area Chart --> */}
                      <div class="col-xl-8 col-lg-7">
                          <div class="card shadow mb-4">
                              {/* <!-- Card Header - Dropdown --> */}
                              <div
                                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                  <h6 class="m-0 font-weight-bold text-primary">김태평님의 가까운 일정까지 12일 남았어요</h6>
                                  <div class="dropdown no-arrow">
                                      <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <BsThreeDotsVertical/>
                                      </a>
                                      
                                  </div>
                              </div>
                              {/* <!-- Card Body --> */}
                              <div class="card-body">
                                <button onClick={()=>window.open('https://www.figma.com/file/InOCgwADIU0GZXts5dLwTQ/%EC%B2%AD%EC%B2%A9%EC%9E%A5?node-id=0%3A1&t=wWgjMCLuK8ZoVQzc-0','_blank')}>
                                <img src="/img/InvitationPage/wedding_photo.png" alt="..." />
                                </button>
                                {/* <Link to={"/"}> </Link> */}
                                    
                                  {/* <div class="chart-area"> */}
                                      {/* <canvas id="myAreaChart">
                                      </canvas> */}
                                  {/* </div> */}
                              </div>
                          </div>
                      </div>
                  </div><br/>

                  {/* <!-- Content Row --> */}
                  {/* 내용물 */}
                  <div class="row">

                      <div class="col-lg-5">
                        <div>
                          {/* 두번째 컨테이너 */}
                          <div class="card shadow mb-4">
                              <div class="card-header py-3">
                                  <h6 class="m-0 font-weight-bold text-primary">태평님의 문의 내역이에요</h6>
                              </div>
                              <div class="card-body">
                                  <div class="text-center">
                                  </div>
                                  <p></p>
                              </div>
                          </div>

                          {/* 세번째 컨테이너 */}
                          <div class="card shadow mb-4">
                              <div class="card-header py-3">
                                  <h6 class="m-0 font-weight-bold text-primary">태평님의 선물 내역이에요.</h6>
                              </div>
                              <div class="card-body">
                                  <p></p>
                                  
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>

                          {/* 세번째 컨테이너 [테이블] */}
                          <div class="card shadow mb-4">
                            <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">선물 내역</h6>
                            </div>

                              <div class="card-body">
                                <div class="table-responsive">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th> 친구 아이디 </th>
                                        <th> 선물명 </th>
                                        <th> 배송 상태 </th>
                                        <th> 접수일 </th>
                                        <th> 운송장 번호 </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                            <AiOutlineUser style={{width:"24", height:"24", viewBox:"0 0 24 24"}} class="img-profile rounded-circle"/>rkdehddnjs123@naver.com
                                        </td>
                                        <td> 핑크 솔트 </td>
                                        <td>
                                          접수 신청중
                                          {/* <label class="badge badge-gradient-success"></label> */}
                                        </td>
                                        <td> 2022-11-18 </td>
                                        <td> TDW-12345-67-4321 </td>
                                      </tr>
                                      
                                    </tbody>
                      
                                  </table>
                                </div>
                              </div>
                          </div>


                          

              </div>
              {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}
          <MypageFooter/>
      </div>
      {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}
      </section>

        
    </>
  );
};

export default Mypage;
