/** page를 이동시켜주는 링크 Link */
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const Footer = () =>{
	return(
		<>
			<footer>
				<div class="container">
					<div class="row row-cols-5 py-5 border-top">
							<div class="col">
								<h3>동심원</h3>
								<p>당신의 소중한 사람들에게 감사함을 전합니다.</p>
								<p>소중한 인연이 만족하는 선물을 전합니다.</p>
								<p class="text-muted">&copy; 2022 성조</p>
							</div>
							<div class="col"></div>
					
							<div class="col">
								<ul class="nav flex-column">
										<li class="nav-item mb-2"><Link to={"/"} class="nav-link p-0 text-muted">모든상품</Link></li>
										<li class="nav-item mb-2"><Link to={"/"} class="nav-link p-0 text-muted">할인상품</Link></li>
										<li class="nav-item mb-2"><Link to={"/"} class="nav-link p-0 text-muted">판매자 등록 신청</Link></li>
										<li class="nav-item mb-2"><Link to={"/"} class="nav-link p-0 text-muted">공지사항</Link></li>
										<li class="nav-item mb-2"><Link to={"/"} class="nav-link p-0 text-muted">고객문의</Link></li>
								</ul>
							</div>
					
							<div class="col">
								<h5>전화문의</h5>
								<ul class="nav flex-column">
										<li class="nav-item mb-2">82-000-0000</li>
										<li class="nav-item mb-2">전화문의는 평일 9시부터 6시까지만 가능합니다.</li>
								</ul>
							</div>
					
							<div class="col">
								<h5>(주)성조</h5>
								<ul class="nav flex-column">
										<li class="nav-item mb-2">위치</li>
										<li class="nav-item mb-2">000-0000-0000</li>
										<li class="nav-item mb-2"><Link to={"/"} class="nav-link p-0 text-muted">seongjo@dongsimwon.kr</Link></li>
								</ul>
							</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;