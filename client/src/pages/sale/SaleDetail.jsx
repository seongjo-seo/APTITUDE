import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

/** 판매 상세페이지 */
const SaleDetail = () => {
  return (
    <>
      <Header/>
      <Nav/>
      
      {/* 상세 설명 시작 */}
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6">
              <img
                class="card-img-top mb-5 mb-md-0"
                src="/img/SalePage/SaleOne/Salt_1.png"
                alt="..."/>
            </div>
            <div class="col-md-6">
              <h1 class="text-lg-start fw-bolder">핑크 솔트</h1>
              <div class="text-lg-start mb-4">20,000원</div>
              {/* 별 들어가는 곳 */}
              <div class="text-lg-start fs-5 mb-5">
                <span>$40.00</span>
              </div>
              <p class="text-lg-start lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              {/* 박스 조정하는 곳 카운터 넣어줄 곳 */}
              <div class="d-flex">
                <input
                  class="form-control text-center me-5"
                  value="1"/>
                <button
                  class="btn btn-outline-dark flex-shrink-0"
                  type="button"><i class="bi-cart-fill me-1"></i>Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 상세 설명 끝 */}
      

      {/* 연관 상품 */}
      <section class="py-5 p-5 bg-light">
        <h2 class="fw-bolder mb-4">연관 상품</h2>
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
                  <a class="btn btn-outline-dark mt-auto" href="#">장바구니 추가하기</a>
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
                  <a class="btn btn-outline-dark mt-auto" href="#">장바구니 추가하기</a>
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
                  <a class="btn btn-outline-dark mt-auto" href="#">장바구니 추가하기</a>
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
                  <a class="btn btn-outline-dark mt-auto" href="#">장바구니 추가하기</a>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 4번 끝 */}


        {/* 상품 종료 */}
        {/* <div class="col mb-5">
          <div class="card h-100">
            <img class="card-img-top" src="" alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">Popular Item</h5>
                <div class="d-flex justify-content-center small text-warning mb-2">
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                </div>$40.00
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </section>

      <section>
        상품
      </section>
      <Footer/>
    </>
  );
};

export default SaleDetail;
