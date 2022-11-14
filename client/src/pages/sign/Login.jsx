import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import { FaGoogle, RiKakaoTalkFill } from 'react-icons/fa';
import {SiNaver, SiKakaotalk} from 'react-icons/si'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import axios from 'axios';
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
const Login = ({userInfoHandler}) => {
  const navigate = useNavigate();

  const idRegex = /^[a-z][a-zA-Z0-9]{5,15}$/; /** 아이디 정규표현식  */
  const userPWRegExp = /^(?=.*[a-zA-Z])(?=.*[#?!@$%^&*-])(?=.*[0-9]).{8,16}$/; /** 비밀번호 정규표현식  */

  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();
  const [isErrorId, setIsErrorId] = useState(false);
  const [isErrorPw, setIsErrorPw] = useState(false);
  const idInput = useRef();
  const pwInput = useRef();
  const loginBtn = useRef();
  

  const onChangeIdInput = (e) => {
    setUserId(e.target.value);
    if (idRegex.test(e.target.value) === false) {
      setIsErrorId(true);
    } else {
      setIsErrorId(false);
    }

    if (
      idRegex.test(e.target.value) === true &&
      isErrorPw === false &&
      pwInput.current.value >= 8
    ) {
      loginBtn.current.readOnly = false;
    } else if (idRegex.test(e.target.value) === false) {
      loginBtn.current.readOnly = true;
    }
  };

  const onChangePwInput = (e) => {
    setUserPw(e.target.value);
    if (userPWRegExp.test(e.target.value) === false) {
      setIsErrorPw(true);
    } else {
      setIsErrorPw(false);
    }

    if (isErrorId === false && userPWRegExp.test(e.target.value) === true) {
      loginBtn.current.readOnly = false;
    } else {
      loginBtn.current.readOnly = true;
    }
  };

  const clickLoginBtn = async (e) => {
    try {
      const res = await axios.post(`http://localhost:8000/api/users`, {
        userId,
        userPw,
      });
      console.log(res);
      if (!res.data.auth) {
        alert('아이디나 비밀번호가 맞지 않습니다.');
      } else {
        userInfoHandler(res);
        localStorage.setItem('token', res.data.accessToken);
        navigate('/');
        alert('로그인 되었습니다.');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clickLoginBtn();
  };



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
                <h4 className="mt-1 mb-4">동심원 서비스에 어서오세요!</h4>
              </div>
              <form className="login-form" onSubmit={onSubmit}>
                <div class="form-group mb-3">
                  <input
                      for="inputId"
                      ref={idInput}
                      type="id"
                      class="form-control form-control-user"
                      id="exampleInputId" aria-describedby="idHelp"
                      placeholder="아이디를 입력해 주세요"/>
                </div>
                <div class="form-group mb-3">
                  <input
                    for="inputPassword"
                    ref={pwInput}
                    type="password"
                    class="form-control form-control-user"
                    id="exampleInputPassword"
                    placeholder="비밀번호를 입력해 주세요"/>
                </div>
                <button class="btn btn-warning custom-button"
                        >로그인</button>
                </form>
              <div className="text-center pt-1 mb-5 pb-1">
                
                <button class="btn btn-warning custom-button-signup">
                    <Link className="custom-signup" to="/SignUp">회원 가입</Link>
                </button>
                <hr/>
                <a href="/">
                  <FaGoogle className="google-buttons" color="red"/>
                </a>
                <a href="/">
                  <SiNaver className="naver-buttons" color="Green"/>
                </a>
                <a href="/">
                  <SiKakaotalk className="kakao-buttons" color="yllow"/>
                </a>
                <br/><br/>
                <button className="id-find">
                  <Link className="custom-signup" href="/">아이디를 잃어버리셨나요?</Link>
                </button>
                <button className="password-find">
                  <Link className="custom-signup" href="/">비밀번호를 잃어버리셨나요?</Link>
                </button>
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
