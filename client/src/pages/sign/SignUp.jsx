import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

import { Link } from "react-router-dom";


/** 회원가입 */
const SignUp = () => {
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
                                      <input type="text" class="form-control form-control-user" id="exampleInputEmail" placeholder="아이디를 입력해 주세요"/>
                                    </div>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="비밀번호를 입력해 주세요"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" id="exampleLastName" placeholder="비밀번호를 한번 더 작성해 주세요"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="이메일을 입력해 주세요"/>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleInputPassword" placeholder="이름을 입력해 주세요"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="닉네임을 입력해 주세요"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                  <div class="col-sm-6 mb-3 mb-sm-0">
                                      <input type="password" class="form-control form-control-user" placeholder="주소지를 입력해 주세요"/>
                                  </div>
                                  <div class="col-sm-6">
                                      <input type="password" class="form-control form-control-user" placeholder="상세 주소지를 입력해 주세요"/>
                                  </div>
                                </div>
                                <a href="{% url 'login' %}" class="btn btn-primary btn-user btn-block">
                                    회원가입하기
                                </a>
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
