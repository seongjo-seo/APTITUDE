import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import DaumPostHook from '../../components/common/DaumPostHook';
import { Link, useNavigate } from "react-router-dom";
import React, {useState, useRef} from "react";
import styled from 'styled-components';
import axios from 'axios';


const DaumPostStyle = styled.div`
  margin: 0 auto 10px auto;
  width: 800px;
  height: fit-content;
  font-size: 20px;
  input {
    display: block;
    border: 1px solid var(--bordercolor-default);
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin: 2px 0;
    transition: 0.3s;
  }
  input:focus {
    border: 1px solid var(--accent-default);
  }
`;



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
      .post('http://localhost:8000/api/users', {
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
        <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">회원가입</h1>
                            </div>
                            <form  method="POST" class="user">
                                <div class="form-group row">

                                    <div class="form-group">
                                      <input type="text" class="form-control form-control-user" placeholder="아이디를 입력해 주세요"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control form-control-user"placeholder="비밀번호를 입력해 주세요"/>
                                    </div>
                                </div>
                                  <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" placeholder="비밀번호를 한번 더 작성해 주세요"/>
                                  </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" placeholder="이메일을 입력해 주세요"/>
                                </div>
                                  <div class="col-sm-6 mb-3 mb-sm-0">
                                      <input type="text" class="form-control form-control-user" placeholder="이름을 입력해 주세요"/>
                                  </div>
                                  {/* <div class="col-sm-6">
                                      <input type="text" class="form-control form-control-user" placeholder="닉네임을 입력해 주세요"/>
                                  </div> */}

                                <div class="form-group row">
                                  <DaumPostStyle>
                                    <DaumPostHook
                                      savingAddressInput={savingAddressInput}
                                      zonecode={zonecode}
                                      address={address}
                                      detailAddress={detailAddress}
                                    />
                                  </DaumPostStyle>
                                  <div class="form-group">
                                    <input type="text" class="form-control form-control-user" placeholder="상세 주소를 입력해주세요"/>
                                  </div>
                                </div>

                                

                                <button className="join-btn" ref={signBtn} onClick={clickSubmitBtn}>
                                  회원가입
                                </button>
                                <hr/>
                            </form>
                            <div class="text-center">
                                <Link class="small" to="/Login">비밀번호를 잃어버리셨나요?</Link>
                            </div>
                            <div class="text-center">
                                <Link class="small" to="/Login">로그인 창으로</Link>
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

export default SignUp;
