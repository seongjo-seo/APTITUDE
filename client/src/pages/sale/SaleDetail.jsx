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
      {/* information start */}
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
              <div class="small mb-1">SKU: BST-498</div>
              <h1 class="display-5 fw-bolder">Shop item template</h1>
              <div class="fs-5 mb-5">
                <span class="text-decoration-line-through">$45.00</span>
                <span>$40.00</span>
              </div>
              <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div class="d-flex">
                <input
                  class="form-control text-center me-3" id="inputQuantity" type="num"
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
      {/* information end */}
      
      {/* 연관 상품 */}
      <section class="py-5 bg-light">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div class="container px-4 px-lg-5 mt-5">
            <h2 class="fw-bolder mb-4">Related products</h2>
            <div class="col mb-5">
              <div class="card h-100">
                <img class="card-img-top" src="/img/SalePage/SaleTwo/Anna's_1.png" alt="..." />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>$40.00 - $80.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
          <div class="card h-100">
            {/* 바로 아래 div 태그에 있던 값임 style="top: 0.5rem; right: 0.5rem"  Studio Fragrance*/}
            <div class="badge bg-dark text-white position-absolute">Sale</div>
            <img class="card-img-top" src="/img/SalePage/SaleTwo/Studio_Fragrance_1.png" alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">Special Item</h5>
                <div class="d-flex justify-content-center small text-warning mb-2">
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                </div>
                <span class="text-muted text-decoration-line-through">$20.00</span>
                $18.00
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col mb-5">
          <div class="card h-100">
            <div class="badge bg-dark text-white position-absolute">Sale</div>
            <img class="card-img-top" src="" alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">Special Item</h5>
                <div class="d-flex justify-content-center small text-warning mb-2">
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                </div>
                <span class="text-muted text-decoration-line-through">$20.00</span>
                $18.00
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
              </div>
            </div>
          </div>
        </div>


        <div class="col mb-5">
          <div class="card h-100">
            <div class="badge bg-dark text-white position-absolute">Sale</div>
            <img class="card-img-top" src="" alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">Sale Item</h5>
                <span class="text-muted text-decoration-line-through">
                  $50.00
                </span>
                $25.00
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
              </div>
            </div>
          </div>
        </div>


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
      <Footer/>
    </>
  );
};

export default SaleDetail;
