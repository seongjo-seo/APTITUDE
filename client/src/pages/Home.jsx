import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { Link } from "react-router-dom";

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





      {/* Giftpack API가 들어갈 곳  */}
      {/* featurette */}
      <section>
        <div class="second-container">
          <div className="divStyled">
            {/* class="col-md-7" */}
            <div>
              <p class="text-start">구미님의 연령대 사람들이 고른 상품</p>
            </div>
            <Link to={"/SaleList"}  className="Age-products-Container"><p>보러가기</p></Link>
            <div className="Homepage-Featured-Product-Image-Container">test</div>
            <div>
            </div>
          </div>

        
          {/* class="row" featurette */}
          <div>
            {/* class="col-md-7 order-md-2" */}
            <div>
              <h2 class="text-start">동심원이 추천하는 선물</h2>
              <p class="text-start">기프트팩 api</p>
            </div>
          </div>
        </div>
      </section>

      
      <section class="third-container">
        <div className="container py-5">
          <div class="row text-center pt-3">
              <div class="col-lg-6 m-auto">
                  <h1 class="h1">best of the month</h1>
                  <p> 이달의 추천 상품과 브랜드를 구경해 보세요!</p>
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
                  <h2 class="h5 text-center mt-3 mb-3">PHOTO at</h2>
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


      {/* 3개 이미지 카드 위치 */}
        {/* 여기서 가로 값이 초과. */}
      {/* <section>
        <div className="third-container">
          <div className="inner-container">
              <div className="positive-evaluation">긍정 평가</div>
            <ul className="period">
              <li>주/</li>
              <li>한달/</li>
              <li>분기</li>
            </ul>

            <div className="First-image-in-third-container">이미지1</div>
            <div className="Second-image-in-third-container">이미지2</div>
            <div className="Third-image-in-third-container">이미지3</div>
          </div>
        </div>
      </section> */}




      
      {/* New Arrivals Area Start */}
      {/* section 판매 물건 구분 */}
      <section class="new_arrivals_area section_padding_100_0 clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section_heading text-center">
                            <h2>판매중인 상품이에요 :)</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="karl-projects-menu mb-100">
                <div class="text-center portfolio-menu">
                    <button class="btn active" data-filter="*">모든상품</button>
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
                            <img src="/img/DummyImageData/7.Nuts_Bomb_(2).png" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
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
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
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
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
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
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
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
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
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
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
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
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
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
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
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
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
                            <a href="#" class="add-to-cart-btn">장바구니 담기</a>
                        </div>
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

