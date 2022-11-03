import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { Link } from "react-router-dom";
import { useRef, useState } from 'react';

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

/** 로그인 */
const Login = () => {



  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();


  return (
    <>
      <Header />
      <Nav />
      <section>
        <div class="container">

          <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-right">
                                        <Link to="/SignUp">회원 가입</Link>
                                    </div>

                                    <div class="text-left">
                                        <h1 class="h3 text-gray-900 mb-4 text-bold">어서오세요!</h1>
                                    </div>

                                    <form class="user" method="POST" action="/login">
                                      <div class="form-group">
                                          <input
                                              for="inputId"
                                              type="email"
                                              class="form-control form-control-user"
                                              id="exampleInputEmail" aria-describedby="emailHelp"
                                              placeholder="아이디를 입력해 주세요"/>
                                      </div>
                                      <div class="form-group">
                                          <input
                                            for="inputPassword"
                                            type="password"
                                            class="form-control form-control-user"
                                            id="exampleInputPassword"
                                            placeholder="비밀번호를 입력해 주세요"/>
                                      </div>
                                      <div class="form-group">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                            <label class="custom-control-label" for="customCheck">기억하기</label>
                                        </div>
                                      </div>

                                      <button class="btn btn-primary btn-user btn-block" type="submit">로그인</button>
                                    <hr/>
                                    </form>

                                        
                                        <a href="/" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> 아이콘으로 바꿀거임 구글
                                        </a>
                                        <a href="/" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> 페이스북? 인스타?
                                        </a>
                                        <a href="/" class="btn btn-naver btn-user btn-block">
                                          <i class="fab fa-facebook-f fa-fw"></i> 네이버
                                        </a>
                                        <a href="/" class="btn btn-kakao btn-user btn-block">
                                          <i class="fab fa-facebook-f fa-fw"></i> 카카오
                                        </a>
                                    <hr/>
                                    <div class="text-center">
                                      <Link class="small" to="FindId">아이디 찾기</Link>
                                    </div>
                                    <div class="text-center">
                                        <Link class="small" to="/">비밀번호 찾기</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
