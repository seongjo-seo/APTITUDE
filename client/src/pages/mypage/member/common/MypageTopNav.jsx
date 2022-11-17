import React from 'react';
import { Link } from "react-router-dom";
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";
import {BiBell} from "react-icons/bi";
import {AiOutlineUser } from "react-icons/ai";
import {TiMessages} from "react-icons/ti";

import '../static/core.css';

const MypageTopNav = () => {
  return (
    <>
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* d-none form-inline  mr-auto  my-2 my-md-0 mw-100 */}
        <form class=" d-sm-inline-block  ml-md-3  navbar-search">
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

          {/* 상단헤더 내비에 있는 알람 */}
          <li class="nav-item dropdown no-arrow mx-1">
              <Link class="nav-link dropdown-toggle" to={"#"} id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <BiBell style={{width:"22", height:"22", viewBox:"0 0 22 22"}}/>
                  {/* <i class="fas fa-bell fa-fw"></i> */}
                  {/* <!-- Counter - Alerts --> */}
                  <span class="badge badge-danger badge-counter">5+</span>
              </Link>
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
              <Link class="nav-link dropdown-toggle" to={"/"} id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {/* 사용자 이미지 */}
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">김태평 님</span>
                  {/* <img class="img-profile rounded-circle" src="" alt="..."/> */}
                  <AiOutlineUser class="img-profile rounded-circle"/>
              </Link>
          </li>

        </ul>

        </nav>
    </>
  );
}

export default MypageTopNav;