import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import { FaGoogle, RiKakaoTalkFill } from 'react-icons/fa';
import {SiNaver, SiKakao} from 'react-icons/si'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

import "./Login.css";

/** 로그인 */
const Login = () => {

  // const [userId, setUserId] = useState();
  // const [userPw, setUserPw] = useState();


  return (
    <>
      <Header />
      <Nav />
      
      <section>
        <div class="container">

        <MDBContainer className="my-5 gradient-form">
          <div class="card o-hidden border-0 shadow my-5 p-4">
        <MDBRow>

          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column ms-5">

              <div className="text-center mb-5">
                <img src="/img/temporaryLogo.png"
                  style={{width: '185px'}} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">어서오세요!</h4>
              </div>

                <div class="form-group mb-3">
                  <input
                      for="inputId"
                      type="email"
                      class="form-control form-control-user"
                      id="exampleInputEmail" aria-describedby="emailHelp"
                      placeholder="아이디를 입력해 주세요"/>
                </div>
                <div class="form-group mb-3">
                  <input
                    for="inputPassword"
                    type="password"
                    class="form-control form-control-user"
                    id="exampleInputPassword"
                    placeholder="비밀번호를 입력해 주세요"/>
                </div>

              {/* input box 커스텀 하기 */}
              {/* <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/> */}

{/* MDBBtn */}
{/* MDBBtn color="danger" */}
              <div className="text-center pt-1 mb-5 pb-1">
                <button class="custom-button">로그인</button>
                
                <div class="text-right">
                    <Link to="/SignUp">회원 가입</Link>
                </div>
                <hr/>
                <a href="/">
                  <FaGoogle className="google-buttons" color="red"/>
                </a>
                <a href="/">
                  <SiNaver color="Green"/>
                </a>
                <a href="/">
                  <SiKakao color="yellow"/>
                </a>

                {/* <a class="btn text-white" style="background-color: #dd4b39;" href="#" role="button">
                    <i class="fab fa-google"></i>
                  </a> */}
                  {/* <a href="/" class="btn btn-google btn-user btn-block">
                      <i class="fab fa-google fa-fw"></i>구글
                  </a> */}
                  {/* <a href="/" class="btn btn-naver btn-user btn-block">
                    <i class="fab fa-facebook-f fa-fw"></i> 네이버
                  </a>
                  <a href="/" class="btn btn-kakao btn-user btn-block">
                    <i class="fab fa-facebook-f fa-fw"></i> 카카오
                  </a> */}
                <br/><br/>
                <a className="text-muted" href="#!">비밀번호를 잃어버리셨나요?</a>
              </div>

            </div>

          </MDBCol>

          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column  justify-content-center h-100 mb-4">
              <img src="img/SignPage/LoginPage.png" class="img-fluid" alt="이미지가 없습니다." />
            </div>

          </MDBCol>
          </MDBRow>
          </div>
        </MDBContainer>



        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
