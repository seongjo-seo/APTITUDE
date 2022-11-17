import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../components/Nav";
import {AiOutlineUser, AiOutlineGift} from "react-icons/ai";
import {BiBell, BiMessageRoundedError} from "react-icons/bi";
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";
import {BsThreeDotsVertical} from "react-icons/bs";

import "./static/sb-admin-2.css";
import MypageFooter from "./common/MypageFooter";
// import "./static/sb-admin-2.min.css";

const Mypage = () => {
  return (
    <>



    {/* <Nav/> */}
      <div id="wrapper">

      {/* <!-- Sidebar --> */}
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* <!-- Sidebar - Brand --> */}
          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div class="sidebar-brand-icon rotate-n-15">
                  <i class="fas fa-laugh-wink"></i>
              </div>
              <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
          </a>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider my-0"/>

          {/* <!-- Nav Item - Dashboard --> */}
          <li class="nav-item active">
              <a class="nav-link" href="index.html">
                  <i class="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span></a>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider"/>

          {/* <!-- Heading --> */}
          <div class="sidebar-heading">
              Interface
          </div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseTwo">
                  <i class="fas fa-fw fa-cog"></i>
                  <span>Components</span>
              </a>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Custom Components:</h6>
                      <a class="collapse-item" href="buttons.html">Buttons</a>
                      <a class="collapse-item" href="cards.html">Cards</a>
                  </div>
              </div>
          </li>

          {/* <!-- Nav Item - Utilities Collapse Menu --> */}
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                  aria-expanded="true" aria-controls="collapseUtilities">
                  <i class="fas fa-fw fa-wrench"></i>
                  <span>Utilities</span>
              </a>
              <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Custom Utilities:</h6>
                      <a class="collapse-item" href="utilities-color.html">Colors</a>
                      <a class="collapse-item" href="utilities-border.html">Borders</a>
                      <a class="collapse-item" href="utilities-animation.html">Animations</a>
                      <a class="collapse-item" href="utilities-other.html">Other</a>
                  </div>
              </div>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider"/>

          {/* <!-- Heading --> */}
          <div class="sidebar-heading">
              Addons
          </div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                  aria-expanded="true" aria-controls="collapsePages">
                  <i class="fas fa-fw fa-folder"></i>
                  <span>Pages</span>
              </a>
              <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Login Screens:</h6>
                      <a class="collapse-item" href="login.html">Login</a>
                      <a class="collapse-item" href="register.html">Register</a>
                      <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                      <div class="collapse-divider"></div>
                      <h6 class="collapse-header">Other Pages:</h6>
                      <a class="collapse-item" href="404.html">404 Page</a>
                      <a class="collapse-item" href="blank.html">Blank Page</a>
                  </div>
              </div>
          </li>

          {/* <!-- Nav Item - Charts --> */}
          <li class="nav-item">
              <a class="nav-link" href="charts.html">
                  <i class="fas fa-fw fa-chart-area"></i>
                  <span>Charts</span></a>
          </li>

          {/* <!-- Nav Item - Tables --> */}
          <li class="nav-item">
              <a class="nav-link" href="tables.html">
                  <i class="fas fa-fw fa-table"></i>
                  <span>Tables</span></a>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider d-none d-md-block"/>

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div class="text-center d-none d-md-inline">
              <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
      </ul>
      {/* <!-- End of Sidebar --> */}

{/* ------------------------------------------------------------------------------ */}
{/* ------------------------------------------------------------------------------ */}
{/* ------------------------------------------------------------------------------ */}



    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">UI Elements</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="/">Buttons</a></li>
                <li class="nav-item"> <a class="nav-link" href="/">Dropdowns</a></li>
                <li class="nav-item"> <a class="nav-link" href="/">Typography</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
              <i class="icon-columns menu-icon"></i>
              <span class="menu-title">Form elements</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"><a class="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#" aria-expanded="false" aria-controls="charts">
              <i class="icon-bar-graph menu-icon"></i>
              <span class="menu-title">Charts</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="charts">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="#">ChartJs</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i class="icon-grid-2 menu-icon"></i>
              <span class="menu-title">Tables</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="tables">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
              <i class="icon-contract menu-icon"></i>
              <span class="menu-title">Icons</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="icons">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i class="icon-head menu-icon"></i>
              <span class="menu-title">User Pages</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="auth">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
              <i class="icon-ban menu-icon"></i>
              <span class="menu-title">Error pages</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="error">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/documentation/documentation.html">
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
    </nav>





{/* ------------------------------------------------------------------------------ */}
{/* ------------------------------------------------------------------------------ */}
{/* ------------------------------------------------------------------------------ */}


      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" class="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">

              {/* <!-- Topbar --> */}
              <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                  {/* <!-- Sidebar Toggle (Topbar) --> */}
                  <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                      <i class="fa fa-bars"></i>
                  </button>

                  {/* <!-- Topbar Search --> */}
                  <form
                      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
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

                  {/* <!-- Topbar Navbar --> */}
                  <ul class="navbar-nav ml-auto">

                      {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                      <li class="nav-item dropdown no-arrow d-sm-none">
                          <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="fas fa-search fa-fw"></i>
                          </a>
                          {/* <!-- Dropdown - Messages --> */}
                          <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                              aria-labelledby="searchDropdown">
                              <form class="form-inline mr-auto w-100 navbar-search">
                                  <div class="input-group">
                                      <input type="text" class="form-control bg-light border-0 small"
                                          placeholder="Search for..." aria-label="Search"
                                          aria-describedby="basic-addon2"/>
                                      <div class="input-group-append">
                                          <button class="btn btn-primary" type="button">
                                              {/* <i class="fas fa-search fa-sm"></i> */}
                                          </button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </li>

                      {/* <!-- Nav Item - Alerts --> */}
                      <li class="nav-item dropdown no-arrow mx-1">
                          <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <BiBell style={{width:"22", height:"22", viewBox:"0 0 22 22"}}/>
                              {/* <i class="fas fa-bell fa-fw"></i> */}
                              {/* <!-- Counter - Alerts --> */}
                              <span class="badge badge-danger badge-counter">3+</span>
                          </a>
                          {/* <!-- Dropdown - Alerts --> */}
                          <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                              aria-labelledby="alertsDropdown">
                              <h6 class="dropdown-header">
                                  Alerts Center
                              </h6>
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
                                      <div class="small text-gray-500">December 7, 2019</div>
                                      $290.29 has been deposited into your account!
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
                          </div>
                      </li>

                      {/* <!-- Nav Item - Messages --> */}
                      <li class="nav-item dropdown no-arrow mx-1">
                          <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <BiMessageRoundedError style={{width:"22", height:"22", viewBox:"0 0 22 22"}}/>
                              {/* <i class="fas fa-envelope fa-fw">여기</i> */}
                              {/* <!-- Counter - Messages --> */}
                              <span class="badge badge-danger badge-counter">7</span>
                          </a>
                          {/* <!-- Dropdown - Messages --> */}
                          <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                              aria-labelledby="messagesDropdown">
                              <h6 class="dropdown-header">
                                  Message Center
                              </h6>
                              <a class="dropdown-item d-flex align-items-center" href="#">
                                  <div class="dropdown-list-image mr-3">
                                      <img class="rounded-circle" src="" alt="..."/>
                                      <div class="status-indicator bg-success"></div>
                                  </div>
                                  <div class="font-weight-bold">
                                      <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                          problem I've been having.</div>
                                      <div class="small text-gray-500">Emily Fowler · 58m</div>
                                  </div>
                              </a>
                              <a class="dropdown-item d-flex align-items-center" href="#">
                                  <div class="dropdown-list-image mr-3">
                                      <img class="rounded-circle" src="" alt="..."/>
                                      <div class="status-indicator"></div>
                                  </div>
                                  <div>
                                      <div class="text-truncate">I have the photos that you ordered last month, how
                                          would you like them sent to you?</div>
                                      <div class="small text-gray-500">Jae Chun · 1d</div>
                                  </div>
                              </a>
                              <a class="dropdown-item d-flex align-items-center" href="#">
                                  <div class="dropdown-list-image mr-3">
                                      <img class="rounded-circle" src="" alt="..."/>
                                      <div class="status-indicator bg-warning"></div>
                                  </div>
                                  <div>
                                      <div class="text-truncate">Last month's report looks great, I am very happy with
                                          the progress so far, keep up the good work!</div>
                                      <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                  </div>
                              </a>
                              <a class="dropdown-item d-flex align-items-center" href="#">
                                  <div class="dropdown-list-image mr-3">
                                      <img class="rounded-circle" src="" alt="..."/>
                                      <div class="status-indicator bg-success"></div>
                                  </div>
                                  <div>
                                      <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                          told me that people say this to all dogs, even if they aren't good...</div>
                                      <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                  </div>
                              </a>
                              <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                          </div>
                      </li>

                      <div class="topbar-divider d-none d-sm-block"></div>

                      {/* <!-- Nav Item - User Information --> */}
                      <li class="nav-item dropdown no-arrow">
                          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {/* 사용자 이미지 */}
                              {/* <img class="img-profile rounded-circle" src="" alt="..."/> */}
                              <span class="mr-2 d-none d-lg-inline text-gray-600 small">user-img</span>
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


        
    </>
  );
};

export default Mypage;
