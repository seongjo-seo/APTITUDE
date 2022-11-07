import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import Sell_Table from "../components/Sell_Table";
import Three_Card from "../components/Three_Card";
import styled from 'styled-components';


const SellTableStyle = styled.div`
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
                <img src="/img/test_img.jpg" width="50%" height="80%" class="bd-placeholder-img" alt="no_img" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                  <rect width="100%" height="100%" fill="#777"/>

{/* 
                <div class="container">
                  <div class="carousel-caption text-start">

                    <h1>좌측 정렬만</h1>
                    <p>좌측 정렬만 쓰기</p>
                    <p><a class="btn btn-lg btn-primary" href="/">임시</a></p>
                  </div>
                </div>

 */}


              </div>
              <div class="carousel-item">
                <img src="/img/test_img.jpg"  width="50%" height="80%"  class="bd-placeholder-img" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="/img/test_img.jpg"  width="50%" height="80%"  class="bd-placeholder-img" alt="..."/>
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
      <section>
        <div class="container mb-4">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">추천 받을 곳</h2>
              <p class="lead">~연령대가 많이 뽑은 선물 + 임시 이미지 두개 배치 조정 필요함</p>
            </div>
            <div class="row align-items-start row-cols-1 row-cols-lg-2 g-4 py-5">
              <div class="col-md-5">
                <svg class="rounded bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 300x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">300x300</text></svg>

              </div>
              <div class="col-md-5">
                <svg class="rounded bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 300x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">300x300</text></svg>

              </div>
            </div>
          </div>

        

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">동심원이 추천하는 선물</h2>
              <p class="lead">여기에 giftpack api 적용</p>
            </div>
            <div class="col-md-5 order-md-1">
              <svg class="rounded bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="573" height="385" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
          </div>
        </div>
      </section>

      <Three_Card/>

      <Sell_Table/>
        <section class="py-5 text-center container">
          <SellTableStyle>
            <div>
              tes
            </div>
          </SellTableStyle>
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <p> 문의 사항 버튼 두개 제작될 곳</p>
            </div>
          </div>
        </section>
      <Footer/>
    </div>
    </>
  );
};

export default Home;