import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { AiOutlineShoppingCart } from 'react-icons/ai'
// 임시 템플
import './SaleDetail.css';

// AiOutlineShoppingCart
/** 판매 상세페이지 */
const SaleDetail = () => {
  return (
    <>
      <Header/>
      <Nav/>
      
      {/* 상세 설명 시작 */}
      <section class="py-5">

        <div class="container px-4 px-lg-5 my-5">
          {/* pb-5  col-lg-7 */}
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
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            {/* <div className="col-md-6">test
            </div> */}

          </div>
          
          <div className="col-md-6">
              {/* 박스 조정하는 곳 카운터 넣어줄 곳 */}
              <div class="d-flex">
                <input
                  class="form-control text-center me-5"
                  value="1"/>
                <button
                  class="btn btn-outline-dark flex-shrink-0"
                  type="button"><AiOutlineShoppingCart className="Cart-custom"/>Add to cart
                </button>
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

      <section className="py-5">
      <div class="row px-xl-5">
            <div class="col">
                <div class="nav nav-tabs justify-content-center border-secondary mb-4">
                    <a class="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                    <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                    <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="tab-pane-1">
                        <h4 class="mb-3">Product Description</h4>
                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                        <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                    </div>
                    <div class="tab-pane fade" id="tab-pane-2">
                        <h4 class="mb-3">Additional Information</h4>
                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item px-0">
                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                    </li>
                                    <li class="list-group-item px-0">
                                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                    </li>
                                    <li class="list-group-item px-0">
                                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                    </li>
                                    <li class="list-group-item px-0">
                                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                    </li>
                                  </ul> 
                            </div>
                            <div class="col-md-6">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item px-0">
                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                    </li>
                                    <li class="list-group-item px-0">
                                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                    </li>
                                    <li class="list-group-item px-0">
                                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                    </li>
                                    <li class="list-group-item px-0">
                                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                    </li>
                                  </ul> 
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tab-pane-3">
                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                                <div class="media mb-4">
                                  {/* style="width: 45px;" */}
                                    <img src="img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1"/>
                                    <div class="media-body">
                                        <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                        <div class="text-primary mb-2">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h4 class="mb-4">Leave a review</h4>
                                <small>Your email address will not be published. Required fields are marked *</small>
                                <div class="d-flex my-3">
                                    <p class="mb-0 mr-2">Your Rating * :</p>
                                    <div class="text-primary">
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label for="message">Your Review *</label>
                                        <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Your Name *</label>
                                        <input type="text" class="form-control" id="name"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Your Email *</label>
                                        <input type="email" class="form-control" id="email"/>
                                    </div>
                                    <div class="form-group mb-0">
                                        <input type="submit" value="Leave Your Review" class="btn btn-primary px-3"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        상품
      </section>
      <Footer/>
    </>
  );
};

export default SaleDetail;
