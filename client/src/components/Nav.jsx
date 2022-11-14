import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "./Nav.css";

/** 내비게이션 */
const Nav = () =>{
	return(
		<>
			<nav class="shadow-sm py-2 border-bottom sticky">
				<div class="container d-flex flex-wrap">
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>

						<ul class="nav me-auto">
							<li class="nav-item"><Link class="nav-link link-dark px-2 active" to={"/"}>Home</Link></li>
							
							<ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
								<li class="nav-item dropdown">
									<a class="nav-link link-dark px-2 dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
										<span>모든상품</span>
										<i class="bi bi-chevron-down dropdown-indicator"></i>
									</a>
									<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
										<li><Link class="dropdown-item" to={"/SaleList"}>모든 상품 보기</Link></li>
										<li><Link class="dropdown-item" to={"/"}>브라이덜 샤워</Link></li>
										<li><Link class="dropdown-item" to={"/"}>출생</Link></li>
										<li><Link class="dropdown-item" to={"/"}>혼인</Link></li>
										<li><Link class="dropdown-item" to={"/"}>생일</Link></li>
										<li><Link class="dropdown-item" to={"/"}>임신</Link></li>
										<li><Link class="dropdown-item" to={"/"}>출산(베이비샤워)</Link></li>
										<li><Link class="dropdown-item" to={"/"}>돌잔치</Link></li>
										<li><Link class="dropdown-item" to={"/"}>약혼</Link></li>
										<li><Link class="dropdown-item" to={"/"}>환갑</Link></li>
										<li><Link class="dropdown-item" to={"/"}>칠순</Link></li>
									</ul>
								</li>
						</ul>
							<li class="nav-item"><Link class="nav-link link-dark px-2" to={"/DiscountProduct"}>할인상품</Link></li>
							{/* <li class="nav-item"><Link class="nav-link link-dark px-2" to={"/"}>판매자 등록 신청</Link></li> */}
							<li class="nav-item"><Link class="nav-link link-dark px-2" to={"/Information"}>공지사항</Link></li>
							{/* <li class="nav-item"><Link class="nav-link link-dark px-2" to={"/"}>고객문의</Link></li> */}
							<li class="nav-item"><Link class="nav-link link-dark px-2" to={"/"}>리뷰보기</Link></li>
						</ul>
						<ul class="nav">
              <li class="nav-item"><Link to="/member/Mypage" class="nav-link link-dark px-2">일반회원 마이페이지</Link></li>
              {/* <li class="nav-item"><Link to="/salesMember/SellerMypage" class="nav-link link-dark px-2">판매회원 마이페이지</Link></li> */}
							<li class="nav-item"><Link to="/Login" class="nav-link link-dark px-2">로그인</Link></li>
							<li class="nav-item"><Link to="/SignUp" class="nav-link link-dark px-2">회원가입</Link></li>
						</ul>
						
						{/* <form class="d-flex">
							<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
							<button class="btn btn-outline-success" type="submit">Search</button>
						</form> */}
					</div>
			</nav>
		</>
	)
};

export default Nav;