import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Paging from "../../components/Paging";

import './SaleListCss/style.css';
import './SaleListCss/util.css';
import './SaleListCss/main.css';

const SaleList = () => {
  return (
    <>
      <Header />
      <Nav />

          <section className="container">
            <div class="categories-page spad">
              <div class="container">

              <div class="flex-w flex-sb-m p-b-52">
                    <div class="flex-w flex-l-m filter-tope-group m-tb-10">
                      <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                        All Products
                      </button>

                      <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                        Women
                      </button>

                      <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
                        Men
                      </button>

                      <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
                        Bag
                      </button>

                      <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
                        Shoes
                      </button>

                      <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
                        Watches
                      </button>
                    </div>

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
                    
                    <div class="dis-none panel-search w-full p-t-10 p-b-15">
                      <div class="bor8 dis-flex p-l-15">
                        <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                          <i class="zmdi zmdi-search"></i>
                        </button>

                        <input class="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search"/>
                      </div>	
                    </div>

                    <div class="dis-none panel-filter w-full p-t-10">
                      <div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                        <div class="filter-col1 p-r-15 p-b-27">
                          <div class="mtext-102 cl2 p-b-15">
                            Sort By
                          </div>

                          <ul>
                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04">
                                Default
                              </a>
                            </li>

                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04">
                                Popularity
                              </a>
                            </li>

                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04">
                                Average rating
                              </a>
                            </li>

                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04 filter-link-active">
                                Newness
                              </a>
                            </li>

                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04">
                                Price: Low to High
                              </a>
                            </li>

                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04">
                                Price: High to Low
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div class="filter-col2 p-r-15 p-b-27">
                          <div class="mtext-102 cl2 p-b-15">
                            Price
                          </div>

                          <ul>
                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04 filter-link-active">
                                All
                              </a>
                            </li>

                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04">
                                $0.00 - $50.00
                              </a>
                            </li>

                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04">
                                $50.00 - $100.00
                              </a>
                            </li>

                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04">
                                $100.00 - $150.00
                              </a>
                            </li>

                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04">
                                $150.00 - $200.00
                              </a>
                            </li>

                            <li class="p-b-6">
                              <a href="#" class="filter-link stext-106 trans-04">
                                $200.00+
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div class="filter-col3 p-r-15 p-b-27">
                          <div class="mtext-102 cl2 p-b-15">
                            Color
                          </div>

                          <ul>
                            <li class="p-b-6">
                              <span class="fs-15 lh-12 m-r-6">
                                <i class="zmdi zmdi-circle"></i>
                              </span>

                              <a href="#" class="filter-link stext-106 trans-04">
                                Black
                              </a>
                            </li>

                            <li class="p-b-6">
                              <span class="fs-15 lh-12 m-r-6">
                                <i class="zmdi zmdi-circle"></i>
                              </span>

                              <a href="#" class="filter-link stext-106 trans-04 filter-link-active">
                                Blue
                              </a>
                            </li>

                            <li class="p-b-6">
                              <span class="fs-15 lh-12 m-r-6">
                                <i class="zmdi zmdi-circle"></i>
                              </span>

                              <a href="#" class="filter-link stext-106 trans-04">
                                Grey
                              </a>
                            </li>

                            <li class="p-b-6">
                              <span class="fs-15 lh-12 m-r-6" >
                                <i class="zmdi zmdi-circle"></i>
                              </span>

                              <a href="#" class="filter-link stext-106 trans-04">
                                Green
                              </a>
                            </li>

                            <li class="p-b-6">
                              <span class="fs-15 lh-12 m-r-6">
                                <i class="zmdi zmdi-circle"></i>
                              </span>

                              <a href="#" class="filter-link stext-106 trans-04">
                                Red
                              </a>
                            </li>

                            <li class="p-b-6">
                              <span class="fs-15 lh-12 m-r-6" >
                                <i class="zmdi zmdi-circle-o"></i>
                              </span>

                              <a href="#" class="filter-link stext-106 trans-04">
                                White
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div class="filter-col4 p-b-27">
                          <div class="mtext-102 cl2 p-b-15">
                            Tags
                          </div>

                          <div class="flex-w p-t-4 m-r--5">
                            <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                              Fashion
                            </a>

                            <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                              Lifestyle
                            </a>

                            <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                              Denim
                            </a>

                            <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                              Streetstyle
                            </a>

                            <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                              Crafts
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="categories-controls">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="categories-filter">

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
                                <Link to={"SaleDetail"}>
                                  <div class="single-product-item">
                                      <figure>
                                          <img src="/img/DummyImageData/1.salt_&_pepper.png" alt=""/>
                                          <div class="p-status">new</div>
                                      </figure>
                                      <div class="product-text">
                                          {/* <a href="#"> */}
                                          <Link to={"SaleDetail"}>핑크 솔트</Link>
                                              {/* <h6>핑크 솔트</h6> */}
                                          {/* </a> */}
                                          <p>$25.90</p>
                                      </div>
                                  </div>
                                </Link>
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
                                          <img src="/img/DummyImageData/22.Work_(2).png" alt=""/>
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
                                  <img src="/img/DummyImageData/25.BOUQUET.png" alt=""/>
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
                                  <img src="/img/DummyImageData/23.New_york_skate.png" alt=""/>
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
                                  <img src="/img/DummyImageData/13.Camping_Adventure_(2).png" alt=""/>
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
                                          <img src="/img/DummyImageData/14.Derek_Coffee.png" alt=""/>
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
                                          <img src="/img/DummyImageData/16.goddess_(2).png" alt=""/>
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
                                          <img src="/img/DummyImageData/35.santa's_house.png" alt=""/>
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
                                          <img src="/img/DummyImageData/33.Warner_co_(3).png" alt=""/>
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
                                  <img src="/img/DummyImageData/26.Olivia_(2).png" alt=""/>
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