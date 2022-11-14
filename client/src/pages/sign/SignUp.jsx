import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import DaumPostHook from '../../components/common/DaumPostHook';
import { Link, useNavigate } from "react-router-dom";
import React, {useState, useRef} from "react";
import styled from 'styled-components';
import axios from 'axios';

import './SignUp.css';

// border: 1px solid var(--bordercolor-default);
const SignUpStyle = styled.div`
  margin: 0 auto 10px auto;
  width: 800px;
  height: fit-content;
  font-size: 20px;
  `;
  // color: black;



/** 회원가입 */
const SignUp = () => {
  const navigate = useNavigate();
  
  const [inputId, setInputId] = useState();
  const [inputPw, setInputPw] = useState();
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputPhone, setInputPhone] = useState();

  const [userInfo, setUserInfo] = useState({
    address: '',
    // zonecode: '',
    // detailAddress: '',
    // region1: '',
    // region2: '',
    // region3: '',
    // extraAddress: '',
    // buildingName: '',
  });

  const savingAddressInput = (input) => {
    setUserInfo(() => ({
      zonecode: input.zonecode,
      address: input.address + ` ${input.buildingName}`,
      detailAddress: input.detailAddress,
      // region1: input.sido,
      // region2: input.sigungu,
      // region3: input.bname,
      extraAddress: input.jibunAddress,
    }));
    console.log(input);
  };

  const { zonecode, address, detailAddress } = userInfo;

  const joinBtn = useRef();
  const clickSubmitBtn = (e) => {
    if (
      inputId === undefined ||
      inputPw === undefined ||
      inputName === undefined ||
      // inputNick === undefined ||
      inputEmail === undefined ||
      inputPhone === undefined
    ) {
      alert('빈칸이 존재합니다. 빠짐없이 입력해주세요.');
    }
    axios
      .post('http://localhost:8000/api/users/join', {
        userId: inputId,
        userEmail: inputEmail,
        userPhone: inputPhone,
        userPw: inputPw,
        userName: inputName,
        // userNick: inputNick,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 'success') {
          alert('회원가입이 완료되었습니다.');
          navigate('/join');
        } else {
          alert('다시 시도해 주세요.');
        }
      });
  };
  const signBtn = useRef();

  return (
    <>
      <Header />
      <Nav />

      <section>
        <div class="container py-5">
          {/* 영역 박스 그림자 (임시 제거) border-0 o-hidden*/}
          <div class="card shadow my-5 p-5">
              {/* card-body p-0 */}
              <div class="text-center">
                  <span class="text-center"><p className="signup-text">회원가입</p></span>
                  <form  method="POST">
                    <SignUpStyle>
                      <input type="text" placeholder="아이디를 입력해 주세요"/>
                    </SignUpStyle>
                    <SignUpStyle>
                        <input type="password"placeholder="비밀번호를 입력해 주세요"/>
                    </SignUpStyle>
                    <SignUpStyle>
                          <input type="password" placeholder="비밀번호를 한번 더 작성해 주세요"/>
                    </SignUpStyle>
                    <SignUpStyle>
                        <input type="email" placeholder="이메일을 입력해 주세요"/>
                    </SignUpStyle>
                    <SignUpStyle>
                        <input type="text" placeholder="이름을 입력해 주세요"/>
                    </SignUpStyle>

                      <div>
                        <SignUpStyle>
                          <DaumPostHook
                            savingAddressInput={savingAddressInput}
                            zonecode={zonecode}
                            address={address}
                            detailAddress={detailAddress}
                          />
                        </SignUpStyle>
                        <SignUpStyle>
                          <input type="text" placeholder="상세 주소를 입력해주세요"/>
                        </SignUpStyle>
                      </div>

                      <button className="join-btn btn-info btn btn-outline-primary" ref={signBtn} onClick={clickSubmitBtn}>
                        회원가입
                      </button>
                      <hr className="hr-size text-center"/>
                  </form>

                  <button className="id-find">
                    <Link className="custom-signup" to={"/"}>아이디를 잃어버리셨나요?</Link>
                  </button>
                  <br/>
                  <button className="password-find">
                    <Link className="custom-signup" to={"/"}>비밀번호를 잃어버리셨나요?</Link>
                  </button>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SignUp;
