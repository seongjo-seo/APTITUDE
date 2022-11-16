import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { Link } from "react-router-dom";
import {AiTwotoneStar} from "react-icons/ai";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
// import styled from 'styled-components';

import "./Home.css";
import "./Home/HomeTemplate.css";
import "./Home/Open.css";

import "./Home/OpenJs/active.js";



/** 홈 화면 페이지 */
const Home = () =>{
  return (
    <>
    <div>
      <Header/>
      <Nav/>
        <section>
          <div id="myCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                {/* 1번 사진 */}
                <img src="/img/HomePage/CarouselOne.png" width="100%" height="100%" class="bd-placeholder-img" alt="no_img" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                  <rect width="100%" height="100%" fill="#777"/>


              </div>
              <div class="carousel-item">
                <img src="/img/HomePage/CarouselTwo.png"  width="100%" height="100%"  class="bd-placeholder-img" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="/img/HomePage/CarouselThree.png"  width="100%" height="100%"  class="bd-placeholder-img" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>



      {/* 추천 상품 시작 */}
      <section>
        <div class="container">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h2>이런 선물은 어떠신가요?</h2>
                    <br/><br/><br/>
                    <p>
                    감사한 마음이 소중한 당신에게 닿을 수 있도록
                    <br/>love what you have.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="/">
                            <img src="/img/DummyImageData/19.Delicious_(2).png" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                </li>
                                <li class="text-muted text-right">20,000원</li>
                            </ul>
                            <a href="/" class="h2 text-decoration-none text-dark">도자기 그릇 세트</a>
                            <br/>
                            <p class="card-text">옹기 보다 훨씬 우수한 보온력</p>
                            <p class="text-muted">리뷰 (215)</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="/">
                            <img src="/img/DummyImageData/16.goddess_(3).png" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="harp-star-scope"/>
                                </li>
                                <li class="text-muted text-right">15,000원</li>
                            </ul>
                            <a href="/" class="h2 text-decoration-none text-dark">섬유탈취제</a>
                            <p class="card-text">
                            청량한 피톤치드 향 섬유탈취제
                            </p>
                            <p class="text-muted">리뷰 (76)</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="/">
                            <img src="/img/DummyImageData/6.Macarons.png" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                  <AiTwotoneStar className="star-scope"/>
                                </li>
                                <li class="text-muted text-right">18,000원</li>
                            </ul>
                            <a href="/" class="h2 text-decoration-none text-dark">마카롱</a>
                            <p class="card-text">햄버거 만큼 뚱뚱한 뚱카롱</p>
                            <p class="text-muted">리뷰 (146)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    {/* 추천 상품 종료 */}



    {/* <section class="pt-3 pb-4" id="count-stats">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto py-3">
            <div class="row">

              <div class="col-md-4 position-relative">
                <div class="p-3 text-center">
                  <h1 class="text-gradient text-primary"><span id="state1" countTo="70">0</span>+</h1>
                  <h5 class="mt-3">매칭 갯수</h5>
                  <p class="text-sm font-weight-normal">From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                </div>
                <hr class="vertical dark"/>
              </div>

              <div class="col-md-4 position-relative">
                <div class="p-3 text-center">
                  <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">0</span>+</h1>
                  <h5 class="mt-3">선물 갯수</h5>
                  <p class="text-sm font-weight-normal">Mix the sections, change the colors and unleash your creativity</p>
                </div>
                <hr class="vertical dark"/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section> */}








    {/* 컬러 카운터 시작 */}
    {/* <section className="color-container">
      <div class="counter">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-xl-5">
                      <div class="text-container">
                          <h2><span>동심원의 선물 만족도</span></h2>
                          <p>선물을 만족한 사람들이에요</p>

                          <div class="counter-container">
                              <div class="counter-cell">
                              
                                  <div class="matching-person-count">0</div>
                                  <div class="counter-info">동심원을 통한 매칭</div>
                              </div>
                              
                              <div class="counter-cell red">
                                  <div data-purecounter-start="0" data-purecounter-end="3189" data-purecounter-duration="2" class="purecounter">1</div>
                                  <div class="counter-info">선택한 선물 갯수</div>
                              </div>
                          </div>

                      </div>
                  </div>
                  <div class="col-lg-6 col-xl-7">
                      <div class="image-container">
                          <img class="img-fluid" src="/img/temporaryLogo.png" style={{width: '350px'}} alt="이미지가 없습니다."/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section> */}
    {/* 컬러 카운터 끝 */}


    <section className="info-container">
        <div class="container">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-5 order-md-1 text-center text-md-start"><img class="img-fluid mb-4" src="/img/ReviewPage/8.png" alt="" /></div>
              <div class="col-md-6 text-center text-md-start">
                <h6 class="fw-bold fs-4 display-3 lh-sm">추천 선물 리뷰</h6>
                <p class="my-4 pe-xl-5">이전에 경험한 고객들의 리뷰를 확인해보세요-!</p>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-4">
                      <div class="py-4"><img class="img-fluid" src="/img/ReviewPage/8.png" width="90" alt="" /></div>
                      <h5 class="fw-bold text-undefined">텐트</h5>
                      <p class="mt-2 mb-0">집에서 사용하는데, 보온용으로 좋은 것 같아요 ㅎㅎ 진짜 유용하게 잘 쓰고 있답니다 ㅎㅎ!</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <div class="py-4"><img class="img-fluid" src="/img/ReviewPage/3.png" width="90" alt="" /></div>
                      <h5 class="fw-bold text-undefined">식물</h5>
                      <p class="mt-2 mb-0">식물 선물 받고 집에 싱그러움이 생겼어요! 물도 자주 안줘도 괜찮아서 키우기 쉬운 녀석이네용~</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <div class="py-4"><img class="img-fluid" src="/img/ReviewPage/4.png" width="90" alt="" /></div>
                      <h5 class="fw-bold text-undefined">소금</h5>
                      <p class="mt-2 mb-0">세계제일 짠돌이 스크루지 영감님도 울고 갈 만큼 넘 맛있는 소금이에요! 저는 넘 만족!</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <div class="py-4"><img class="img-fluid" src="/img/ReviewPage/10.png" width="90" alt="" /></div>
                      <h5 class="fw-bold text-undefined">곰인형</h5>
                      <p class="mt-2 mb-0">너무 부드러운 촉감이 좋은 것 같아요. 자녀가 태어나면 애착인형이 될 것 같습니다!</p>
                    </div>
                  </div>
                </div><a class="btn btn-lg btn-primary rounded-pill hover-top" href="#" role="button">더 보기</a>
              </div>
            </div>
          </div>
        </div>
      </section>






      
      <section className="dd">
        <div className="container py-5">
          <div class="row text-center pt-3">
              <div class="col-lg-6 m-auto">
                  <div className="best-of-the-month">이달의 추천 브랜드</div>
              </div>
          </div>
          <div class="row">
              <div class="col-12 col-md-4 p-5 mt-3">
                  <a href="#"><img src="/img/LogoData/14.Derek_Coffee.png" class="rounded-circle img-fluid border"/></a>
                  <h5 class="text-center mt-3 mb-3">DEREK COFFEE</h5>
                  <p class="text-center"><a class="btn btn-success">보러가기</a></p>
              </div>
              <div class="col-12 col-md-4 p-5 mt-3">
                  <a href="#"><img src="/img/LogoData/29.Photo_at.png" class="rounded-circle img-fluid border"/></a>
                  <h2 class="h5 text-center mt-3 mb-3">PHOTO At</h2>
                  <p class="text-center"><a class="btn btn-success">보러가기</a></p>
              </div>
              <div class="col-12 col-md-4 p-5 mt-3">
                  <a href="#"><img src="/img/LogoData/3.Studio_Fragrance.png" class="rounded-circle img-fluid border"/></a>
                  <h2 class="h5 text-center mt-3 mb-3">Studio Fragrance</h2>
                  <p class="text-center"><a class="btn btn-success">보러가기</a></p>
              </div>
          </div>
        </div>
      </section>







      
      {/* New Arrivals Area Start */}
      {/* section 판매 물건 구분 화면 조정 필요함. */}
      <section class="third-container new_arrivals_area section_padding_100_0 clearfix">
            <div class="container">
              {/* 이쪽 조정 */}
                <div >
                    <div class="col-12">
                        <div class="section_heading text-center">
                            <h2>판매중인 선물이에요 :)</h2>
                        </div>
                    </div>
                    <div className="Trd-container-button-location">
                      <div class="flex-w flex-c-m m-tb-10">
                        <div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                          <i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                          <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                          Filter
                        </div>

                        <div class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                          <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                          <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                          Search
                        </div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="karl-projects-menu mb-100">
                <div class="text-center portfolio-menu">
                  {/* active 가 움직여야 함. */}
                    <button class="btn" data-filter="*">모든선물</button>
                    <button class="btn" data-filter=".bridal-shower">브라이덜 샤워</button>
                    <button class="btn" data-filter=".birth">출생</button>
                    <button class="btn" data-filter=".birthday">생일</button>
                    <button class="btn" data-filter=".Pregnant">임신</button>
                    <button class="btn" data-filter=".Childbirth-(baby-shower)">출산(베이비샤워)</button>
                    <button class="btn" data-filter=".first-birthday-party">돌잔치</button>
                    <button class="btn" data-filter=".engagement">약혼</button>
                    <button class="btn" data-filter=".sixtieth-birthday">환갑</button>
                    <button class="btn" data-filter=".seventy-birthday">칠순</button>
                </div>
            </div>

            <div class="container">
                <div class="row karl-new-arrivals">
                  
                  
                  
                    {/* 1~3 시작 */}
                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item Pregnant wow fadeInUpBig" data-wow-delay="0.2s">
                        <div class="product-img">
                            <img src="/img/DummyImageData/29.Photo_at.png" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <p>모공까지 보이는 필름카메라</p>
                            <h4 class="product-price">30,000원</h4>
                            <a href="#" class="add-to-cart-btn">장바구니 담기</a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item Pregnant wow fadeInUpBig" data-wow-delay="0.3s">
                        <div class="product-img">
                            <img src="/img/DummyImageData/25.BOUQUET_2.png" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <p>건성 피부에게 찰떡 수분크림</p>
                            <h4 class="product-price">20,000원</h4>
                            <a href="#" class="add-to-cart-btn">장바구니 담기</a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item bridal-shower wow fadeInUpBig" data-wow-delay="0.4s">
                        <div class="product-img">
                            <img src="/img/DummyImageData/18.Ceramic_(2).png" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <p>고급 본차이나 식기</p>
                            <h4 class="product-price">50,000원</h4>
                            <a href="#" class="add-to-cart-btn">장바구니 담기</a>
                        </div>
                    </div>
                    {/* 1~3 끝 */}



                    {/* 3~6 시작 */}
                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item birthday wow fadeInUpBig" data-wow-delay="0.5s">
                        <div class="product-img">
                            <img src="/img/DummyImageData/3.Studio_Fragrance_(3).png" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <p>봄 향기 가득 향수</p>
                            <h4 class="product-price">35,000원</h4>
                            <a href="#" class="add-to-cart-btn">장바구니 담기</a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item birthday wow fadeInUpBig" data-wow-delay="0.6s">
                        <div class="product-img">
                            <img src="/img/DummyImageData/25.BOUQUET_(3).png" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <p>남성용 춉챱챱 스킨로션</p>
                            <h4 class="product-price">20,000원</h4>
                            <a href="#" class="add-to-cart-btn">장바구니 담기</a>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item Childbirth-(baby-shower) man wow fadeInUpBig" data-wow-delay="0.7s">
                        <div class="product-img">
                            <img src="/img/DummyImageData/10.Headset_Robot.png" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <p>우영우 헤드셋</p>
                            <h4 class="product-price">35,000원</h4>
                            <a href="#" class="add-to-cart-btn">장바구니 담기</a>
                        </div>
                    </div>
                    {/* 3~6 끝 */}


                    {/* 6~9 시작 */}
                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item Pregnant wow fadeInUpBig" data-wow-delay="0.3s">
                        <div class="product-img">
                            <img src="/img/DummyImageData/28.moon_soon.png" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <p>미끌미끌 바디워시&로션</p>
                            <h4 class="product-price">28,000원</h4>
                            <a href="#" class="add-to-cart-btn">장바구니 담기</a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item Pregnant wow fadeInUpBig" data-wow-delay="0.3s">
                        <div class="product-img">
                            <img src="/img/DummyImageData/26.Olivia.png" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <p>친환경 비건 욕실용품</p>
                            <h4 class="product-price">31,000원</h4>
                            <a href="#" class="add-to-cart-btn">장바구니 담기</a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item Childbirth-(baby-shower) wow fadeInUpBig" data-wow-delay="0.3s">
                        <div class="product-img">
                            <img src="/img/DummyImageData/27.Victoria.png" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <p>최고급 면으로 만든 수건</p>
                            <h4 class="product-price">24,000원</h4>
                            <a href="#" class="add-to-cart-btn">장바구니 담기</a>
                        </div>
                    </div>
                <div className="container">
                  <button type="button" class="btn btn-outline-primary my-4">더보기</button>
                </div>
                    {/* 6~9 끝 */}
                </div>


            </div>
      </section>

      {/* 판매 이미지 */}
      <Footer/>
    </div>
    </>
  );
};

export default Home;

