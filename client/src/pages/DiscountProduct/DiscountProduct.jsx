import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Paging from "../../components/Paging";


const DiscountProduct = () =>{
  return (
    <>
    <Header/>
    <Nav/>
          {/* 연관 상품 */}
      <section class="container py-5 p-5">
        <h2 class="fw-bolder mb-4">할인 상품</h2>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

          {/* 상품 1번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/SalePage/SaleTwo/Anna's_1.png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">비건 쿠키</h5>
                  <span class="text-muted text-decoration-line-through">
                    69,250원</span>  34,650원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 1번 끝 */}

          {/* 상품 2번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/SalePage/SaleThree/Studio_Fragrance_1.png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">사랑을 전하는 향수</h5>
                  <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  <span class="text-muted text-decoration-line-through">27,700원</span>  24,850원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 2번 끝 */}

          {/* 상품 3번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/SalePage/SaleFour/NOTE_WING_1.png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">인생은 회전목마 처럼</h5>
                  <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  <span class="text-muted text-decoration-line-through">16,000원</span>  10,900원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 3번 끝 */}

          {/* 상품 4번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/SalePage/SaleFive/Cake_1.png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">당충전 케이크</h5>
                  <span class="text-muted text-decoration-line-through">34,900원</span>  23,600원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 4번 끝 */}

          {/* 상품 5번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/DummyImageData/8.Liceria_&_Co.png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">리세리아 초코 볼</h5>
                  <span class="text-muted text-decoration-line-through">
                    26,900원</span>  19,000원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 5번 끝 */}

          {/* 상품 6번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/DummyImageData/12.leaf_plant.png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">파릇파릇 화분</h5>
                  <span class="text-muted text-decoration-line-through">
                    32,130원</span>  18,990원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 6번 끝 */}

          {/* 상품 7번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/DummyImageData/9.Dream_Store_(3).png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">하루 다이어리</h5>
                  <span class="text-muted text-decoration-line-through">
                    11,000원</span>  8,000원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 7번 끝 */}

          {/* 상품 8번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/DummyImageData/10.Headset_Robot_(3).png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">로봇 헤드셋</h5>
                  <span class="text-muted text-decoration-line-through">
                    245,750원</span>  149,990원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 8번 끝 */}

          {/* 상품 9번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/DummyImageData/18.Ceramic_(3).png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">세라믹 그릇 세트</h5>
                  <span class="text-muted text-decoration-line-through">
                    160,800원</span>  99,000원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 9번 끝 */}

          {/* 상품 10번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/DummyImageData/24.Mo-hat.png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">힙한 모자</h5>
                  <span class="text-muted text-decoration-line-through">
                    34,600원</span>  19,000원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 10번 끝 */}

          {/* 상품 11번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/DummyImageData/34.Liceria_&_Co_(2).png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">친환경 에코백</h5>
                  <span class="text-muted text-decoration-line-through">
                    17,970원</span>  9,000원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 11번 끝 */}

          {/* 상품 12번 시작 */}
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute">할인</div>
              <img class="card-img-top" src="/img/DummyImageData/21.tea_house.png" alt="..." />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">찻집 세트</h5>
                  <span class="text-muted text-decoration-line-through">
                    89,430원</span>  45,000원
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">상품 보러가기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 12번 끝 */}
        </div>

      <Paging/>

      </section>


      
    <Footer/>
    </>
  );
};

export default DiscountProduct;