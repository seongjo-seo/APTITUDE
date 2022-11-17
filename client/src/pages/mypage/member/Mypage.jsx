import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineUser, AiOutlineGift} from "react-icons/ai";
import {TiMessages} from "react-icons/ti";
import {BsThreeDotsVertical} from "react-icons/bs";

import "./static/core.css";
import MypageFooter from "./common/MypageFooter";
import MypageNav from "./common/MypageNav";
import MypageTopNav from "./common/MypageTopNav";


const Mypage = () => {
  return (
    <>
    
    <MypageNav/>
    
    <section className="mypage-section-right-size">


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
