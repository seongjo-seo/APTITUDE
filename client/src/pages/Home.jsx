import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import Sell_Table from "../components/Sell_Table";
// import Three_Card from "../components/Three_Card";
// import styled from 'styled-components';

import "./Home.css";


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


      {/* 3개 이미지 카드 위치 */}
      <section>
        {/* 여기서 가로 값이 초과. */}
        <div className="third-container">
          <div className="inner-container">
            {/* <div className="rating-adjustment"><br/> */}
            {/* </div> */}

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
      </section>



      <section>
        <Sell_Table/>
      </section>
        {/* <section class="py-5 text-center container">
          <SellTableStyle>
          </SellTableStyle>
          <div class="row py-lg-5">
            <button className="Questions">
              자주하는 질문
            </button>
            <button className="inquiry">
              1:1 문의 남기기
            </button>
          </div>
        </section> */}
      <Footer/>
    </div>
    </>
  );
};

export default Home;