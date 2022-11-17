import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineUser, AiOutlineGift} from "react-icons/ai";
import {BiBell} from "react-icons/bi";
import {TiMessages} from "react-icons/ti";
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";
import {BsThreeDotsVertical} from "react-icons/bs";

import "./static/core.css";
import MypageFooter from "./common/MypageFooter";
import MypageNav from "./common/MypageNav";


const Mypage = () => {
  return (
    <>
    
    
    <section>
      {/* <MypageNav/> */}


      {/* 뒷 배경 색상 코어 잡는 곳. */}
      <div id="wrapper"> 



      {/* Content Wrapper */}
      <div id="content-wrapper" class="d-flex flex-column">

      {/* 상단 header 시작 위치  */}
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

      {/* <!-- Topbar Search --> */}
      <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                  <button class="btn btn-primary" type="button">
                    <HiOutlineMagnifyingGlass style={{width:"18", height:"18", viewBox:"0 0 18 18"}}/>
                      {/* <i class="fas fa-search fa-sm"></i> */}
                  </button>
              </div>
          </div>
      </form>



    {/* 상단 헤더 바 위치 */}
    <ul class="navbar-nav ml-auto">
        {/*  Nav Item - Search Dropdown (Visible Only XS) */}
        <li class="nav-item dropdown no-arrow d-sm-none">
            {/* <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
            </a> */}
            
          </li>

        {/* 상단헤더 내비에 있는 벨 */}
        <li class="nav-item dropdown no-arrow mx-1">
            <Link class="nav-link dropdown-toggle" to={"#"} id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <BiBell style={{width:"22", height:"22", viewBox:"0 0 22 22"}}/>
                {/* <i class="fas fa-bell fa-fw"></i> */}
                {/* <!-- Counter - Alerts --> */}
                <span class="badge badge-danger badge-counter">5+</span>
            </Link>
            {/* 알람 내부 시작 영역 */}
            {/* <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">Alerts Center</h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                        <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div class="small text-gray-500">December 12, 2019</div>
                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                        <div class="icon-circle bg-success">
                            <i class="fas fa-donate text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div class="small text-gray-500">December 7, 2019</div>$290.29 has been deposited into your account!
                    </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                        <div class="icon-circle bg-warning">
                            <i class="fas fa-exclamation-triangle text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div class="small text-gray-500">December 2, 2019</div>
                        Spending Alert: We've noticed unusually high spending for your account.
                    </div>
                </a>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
            </div> */}
            {/* 알람 내부 종료 영역  */}
        </li>

        {/* 내비 내부 메시지 정리  nav messages info */}
        <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <TiMessages style={{width:"22", height:"22", viewBox:"0 0 22 22"}}/>
                {/* <i class="fas fa-envelope fa-fw">여기</i> */}

                {/* 메시지 개수 */}
                <span class="badge badge-danger badge-counter">2</span>
            </a>
           
        </li>

        <div class="topbar-divider d-none d-sm-block"></div>

        {/* <!-- Nav Item - User Information --> */}
        <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {/* 사용자 이미지 */}
                {/* <img class="img-profile rounded-circle" src="" alt="..."/> */}
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">김태평 님</span>
                <AiOutlineUser class="img-profile rounded-circle"/>
            </a>
            {/* <!-- Dropdown - User Information --> */}
            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                </a>
            </div>
        </li>

    </ul>

</nav>
{/* <!-- End of Topbar --> */}




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
                                          <i class="fas fa-calendar fa-2x text-gray-300"></i>
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
                                  <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                  <div class="dropdown no-arrow">
                                      <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <BsThreeDotsVertical/>
                                          {/* <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i> */}
                                      </a>
                                      <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                          aria-labelledby="dropdownMenuLink">
                                          <div class="dropdown-header">Dropdown Header:</div>
                                          <a class="dropdown-item" href="#">Action</a>
                                          <a class="dropdown-item" href="#">Another action</a>
                                          <div class="dropdown-divider"></div>
                                          <a class="dropdown-item" href="#">Something else here</a>
                                      </div>
                                  </div>
                              </div>
                              {/* <!-- Card Body --> */}
                              <div class="card-body">
                                  <div class="chart-area">
                                      <canvas id="myAreaChart"></canvas>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* <!-- Content Row --> */}
                  {/* 내용물 */}
                  <div class="row">

                      <div class="col-lg-6 mb-4">
                          {/* 두번째 컨테이너 */}
                          <div class="card shadow mb-4">
                              <div class="card-header py-3">
                                  <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                              </div>
                              <div class="card-body">
                                  <div class="text-center">
                                      <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src="img/undraw_posting_photo.svg" alt="..."/>
                                  </div>
                                  <p>Add some quality!</p>
                              </div>
                          </div>

                          {/* 세번째 컨테이너 [테이블] */}
                          <div class="card shadow mb-4">
                            <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">Recent Tickets</h6>
                            </div>

                              <div class="card-body">
                                <div class="table-responsive">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th> Assignee </th>
                                        <th> Subject </th>
                                        <th> Status </th>
                                        <th> Last Update </th>
                                        <th> Tracking ID </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <img src="assets/images/faces/face1.jpg" class="mr-2" alt="image"/> David Grey
                                        </td>
                                        <td> Fund is not recieved </td>
                                        <td>
                                          <label class="badge badge-gradient-success">DONE</label>
                                        </td>
                                        <td> Dec 5, 2017 </td>
                                        <td> WD-12345 </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img src="assets/images/faces/face2.jpg" class="mr-2" alt="image"/> Stella Johnson
                                        </td>
                                        <td> High loading time </td>
                                        <td>
                                          <label class="badge badge-gradient-warning">PROGRESS</label>
                                        </td>
                                        <td> Dec 12, 2017 </td>
                                        <td> WD-12346 </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img src="assets/images/faces/face3.jpg" class="mr-2" alt="image"/> Marina Michel
                                        </td>
                                        <td> Website down for one week </td>
                                        <td>
                                          <label class="badge badge-gradient-info">ON HOLD</label>
                                        </td>
                                        <td> Dec 16, 2017 </td>
                                        <td> WD-12347 </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img src="assets/images/faces/face4.jpg" class="mr-2" alt="image"/> John Doe
                                        </td>
                                        <td> Loosing control on server </td>
                                        <td>
                                          <label class="badge badge-gradient-danger">REJECTED</label>
                                        </td>
                                        <td> Dec 3, 2017 </td>
                                        <td> WD-12348 </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                          </div>


                          {/* 세번째 컨테이너 */}
                          <div class="card shadow mb-4">
                              <div class="card-header py-3">
                                  <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                              </div>
                              <div class="card-body">
                                  <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                      CSS bloat and poor page performance.</p>
                                  <p class="mb-0">Before working with this theme, you should become familiar with the
                                      Bootstrap framework, especially the utility classes.</p>
                              </div>
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
