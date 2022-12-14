import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import Nav from '../../Nav';

import './layout.css';
import './layout-rtl.css';
import './layout-rtl.min.css';

const Information = () =>{
  return (
    <>
    <Header/>
    <Nav/>
      
      <section className='container'>
        <div class="content-lg container">
          <div class="row margin-b-40">
              <div class="col-sm-6">
                  <h2 className='position-absolute start-50 translate-middle'>공지 사항</h2>
              </div>
          </div>

          <div class="row margin-b-50">
              <div class="col-sm-4 sm-margin-b-50">
                  <div class="margin-b-20">
                      <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                          <img class="img-responsive" src="/img/LogoData/14.Derek_Coffee.png" alt="Our Exceptional Solutions Image"/>
                      </div>
                  </div>
                  <h3><a href="#">DEREK COFFEE</a></h3>
                  <p>커피 판매량 시간당 1000건 이상!</p>
                  <a class="link" href="#">보러가기</a>
              </div>
              <div class="col-sm-4 sm-margin-b-50">
                  <div class="margin-b-20">
                      <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                          <img class="img-responsive" src="/img/LogoData/4.NOTE_WING.png" alt="Our Exceptional Solutions Image"/>
                      </div>
                  </div>
                  <h4><a href="#">NOTE WING</a></h4>
                  <p>BTS 노래 Butter 오르골 신제품 판매합니다!</p>
                  <a class="link" href="#">보러가기</a>
              </div>
              <div class="col-sm-4 sm-margin-b-50">
                  <div class="margin-b-20">
                      <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                          <img class="img-responsive" src="/img/LogoData/12.leaf_plant.png" alt="Our Exceptional Solutions Image"/>
                      </div>
                  </div>
                  <h4><a href="#">LEAF PLANT</a></h4>
                  <p>겨울에도 만개하는 꽃나무 신상 업데이트!</p>
                  <a class="link" href="#">보러가기</a>
              </div>
          </div>

          <div class="row">
              <div class="col-sm-4 sm-margin-b-50">
                  <div class="margin-b-20">
                      <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                          <img class="img-responsive" src="/img/LogoData/16.goddess.png" alt="Our Exceptional Solutions Image"/>
                      </div>
                  </div>
                  <h4><a href="#">GODDESS</a></h4>
                  <p>백화점 판매 상품이 아닐 시 100%환불</p>
                  <a class="link" href="#">보러가기</a>
              </div>
              <div class="col-sm-4 sm-margin-b-50">
                  <div class="margin-b-20">
                      <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                          <img class="img-responsive" src="/img/LogoData/19.Delicious.png" alt="Our Exceptional Solutions Image"/>
                      </div>
                  </div>
                  <h4><a href="#">KITCHEN DELICIOUS</a></h4>
                  <p>주부님들이 좋아하는 주방 용품집</p>
                  <a class="link" href="#">보러가기</a>
              </div>
              <div class="col-sm-4 sm-margin-b-50">
                  <div class="margin-b-20">
                      <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                          <img class="img-responsive" src="/img/LogoData/26.Olivia.png" alt="Our Exceptional Solutions Image"/>
                      </div>
                  </div>
                  <h4><a href="#">OLIVIA SKINCARE</a></h4>
                  <p>아토피 피부 1등 상품!</p>
                  <a class="link" href="#">보러가기</a>
              </div>
          </div>
        </div>
      </section>
    <Footer/>
    </>
  );
};

export default Information;