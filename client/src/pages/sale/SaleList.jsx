import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Paging from "../../components/Paging";

import './SaleListCss/style.css';

const SaleList = () => {
  return (
    <>
      <Header />
      <Nav />
        <div>
          <Link to={"SaleDetail"}>상세 보기 버튼</Link>
        </div>


          <section className="container">
            <div class="categories-page spad">
              <div class="container">
                  <div class="categories-controls">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="categories-filter">
                                {/* 카테고리 임시 주석 */}
                                  {/* <div class="cf-left">
                                      <form action="#">
                                          <select class="sort">
                                              <option value="">Sort by</option>
                                              <option value="">Orders</option>
                                              <option value="">Newest</option>
                                              <option value="">Price</option>
                                          </select>
                                      </form>
                                  </div> */}
                                  <div class="cf-right">
                                      <span>20 Products</span>
                                      <a href="#">2</a>
                                      <a href="#" class="active">4</a>
                                      <a href="#">6</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-6 col-md-6">
                          <div class="single-product-item">
                              <figure>
                                  <img src="/img/DummyImageData/17.Poetry_&_Co_(2).png" alt=""/>
                                  <div class="p-status">new</div>
                                  <div class="hover-icon">
                                      <a href="/img/DummyImageData/17.Poetry_&_Co_(2).png" class="pop-up">
                                        <img src="/img/DummyImageData/17.Poetry_&_Co_(2).png" alt=""/></a>
                                  </div>
                              </figure>
                              <div class="product-text">
                                  <a href="#">
                                      <h6>Green Dress with details</h6>
                                  </a>
                                  <p>$22.90</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                          <div class="row">
                              <div class="col-lg-6 col-md-6">
                                  <div class="single-product-item">
                                      <figure>
                                          <img src="/img/DummyImageData/1.salt_&_pepper.png" alt=""/>
                                          <div class="p-status">new</div>
                                      </figure>
                                      <div class="product-text">
                                          <a href="#">
                                              <h6>Yellow Maxi Dress</h6>
                                          </a>
                                          <p>$25.90</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                  <div class="single-product-item">
                                      <figure>
                                          <img src="/img/DummyImageData/2.Anna's_Bakeshop_(2).png" alt=""/>
                                          <div class="p-status sale">sale</div>
                                          <div class="hover-icon">
                                              <a href="/img/DummyImageData/2.Anna's_Bakeshop_(2).png" class="pop-up"><img src="/img/DummyImageData/2.Anna's_Bakeshop_(2).png" alt=""/></a>
                                          </div>
                                      </figure>
                                      <div class="product-text">
                                          <a href="#">
                                              <h6>One piece bodysuit</h6>
                                          </a>
                                          <p>$19.90</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                  <div class="single-product-item">
                                      <figure>
                                          <img src="/img/DummyImageData/15.Olives_Farm_(2).png" alt=""/>
                                      </figure>
                                      <div class="product-text">
                                          <a href="#">
                                              <h6>Yellow Maxi Dress</h6>
                                          </a>
                                          <p>$25.90</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                  <div class="single-product-item">
                                      <figure>
                                          <img src="/img/DummyImageData/18.Ceramic_(3).png" alt=""/>
                                          {/* <div class="hover-icon">
                                              <a href="img/products/img-1.jpg" class="pop-up"><img
                                                      src="img/icons/zoom-plus.png" alt=""/></a>
                                          </div> */}
                                      </figure>
                                      <div class="product-text">
                                          <a href="#">
                                              <h6>Ceramic</h6>
                                          </a>
                                          <p>$19.90</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <div class="single-product-item">
                              <figure>
                                  <img src="/img/DummyImageData/18.Ceramic_(3).png" alt=""/>
                                  <div class="p-status">new</div>
                                  {/* <div class="hover-icon">
                                      <a href="img/products/img-5.jpg" class="pop-up"><img src="img/icons/zoom-plus.png"
                                              alt=""/></a>
                                  </div> */}
                              </figure>
                              <div class="product-text">
                                  <a href="#">
                                      <h6>Green Dress with details</h6>
                                  </a>
                                  <p>$22.90</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <div class="single-product-item">
                              <figure>
                                  <img src="/img/DummyImageData/18.Ceramic_(3).png" alt=""/>
                                  <div class="p-status popular">popular</div>
                                  {/* <div class="hover-icon">
                                      <a href="img/products/img-4.jpg" class="pop-up"><img src="img/icons/zoom-plus.png"
                                              alt=""/></a>
                                  </div> */}
                              </figure>
                              <div class="product-text">
                                  <a href="#">
                                      <h6>Blue Dress with details</h6>
                                  </a>
                                  <p>$35.50</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <div class="single-product-item">
                              <figure>
                                  <img src="/img/DummyImageData/18.Ceramic_(3).png" alt=""/>
                                  <div class="p-status popular">popular</div>
                                  {/* <div class="hover-icon">
                                      <a href="img/products/img-8.jpg" class="pop-up"><img src="img/icons/zoom-plus.png"
                                              alt=""/></a>
                                  </div> */}
                              </figure>
                              <div class="product-text">
                                  <a href="#">
                                      <h6>Blue Dress with details</h6>
                                  </a>
                                  <p>$35.50</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <div class="single-product-item">
                              <figure>
                                  <img src="/img/DummyImageData/18.Ceramic_(3).png" alt=""/>
                                  <div class="p-status popular">popular</div>
                                  {/* <div class="hover-icon">
                                      <a href="img/products/img-10.jpg" class="pop-up"><img src="img/icons/zoom-plus.png"
                                              alt=""/></a>
                                  </div> */}
                              </figure>
                              <div class="product-text">
                                  <a href="#">
                                      <h6>Blue Dress with details</h6>
                                  </a>
                                  <p>$35.50</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                          <div class="row">
                              <div class="col-lg-6 col-md-6">
                                  <div class="single-product-item">
                                      <figure>
                                          <img src="/img/DummyImageData/18.Ceramic_(3).png" alt=""/>
                                          <div class="p-status sale">sale</div>
                                      </figure>
                                      <div class="product-text">
                                          <a href="#">
                                              <h6>Yellow Maxi Dress</h6>
                                          </a>
                                          <p>$25.50</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                  <div class="single-product-item">
                                      <figure>
                                          <img src="/img/DummyImageData/18.Ceramic_(3).png" alt=""/>
                                          <div class="p-status">new</div>
                                          {/* <div class="hover-icon">
                                              <a href="img/products/img-12.jpg" class="pop-up"><img
                                                      src="img/icons/zoom-plus.png" alt=""/></a>
                                          </div> */}
                                      </figure>
                                      <div class="product-text">
                                          <a href="#">
                                              <h6>One piece bodysuit</h6>
                                          </a>
                                          <p>$19.90</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                  <div class="single-product-item">
                                      <figure>
                                          <img src="/img/DummyImageData/18.Ceramic_(3).png" alt=""/>
                                          <div class="p-status sale">sale</div>
                                      </figure>
                                      <div class="product-text">
                                          <a href="#">
                                              <h6>Yellow Maxi Dress</h6>
                                          </a>
                                          <p>$25.90</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                  <div class="single-product-item">
                                      <figure>
                                          <img src="/img/DummyImageData/18.Ceramic_(3).png" alt=""/>
                                          {/* <div class="hover-icon">
                                              <a href="img/products/img-15.jpg" class="pop-up"><img
                                                      src="img/icons/zoom-plus.png" alt=""/></a>
                                          </div> */}
                                      </figure>
                                      <div class="product-text">
                                          <a href="#">
                                              <h6>One piece bodysuit</h6>
                                          </a>
                                          <p>$19.90</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                          <div class="single-product-item">
                              <figure>
                                  <img src="/img/DummyImageData/18.Ceramic_(3).png" alt=""/>
                                  <div class="p-status">new</div>
                                  {/* <div class="hover-icon">
                                      <a href="img/products/img-13.jpg" class="pop-up"><img src="img/icons/zoom-plus.png"
                                              alt=""/></a>
                                  </div> */}
                              </figure>
                              <div class="product-text">
                                  <a href="#">
                                      <h6>Green Dress with details</h6>
                                  </a>
                                  <p>$22.90</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            <Paging/>
          </div>
        </section>
    
      <Footer />
    </>
  );
};

export default SaleList;

{/* <img src="/img/DummyImageData/21.tea_house.png" alt=""/> */}