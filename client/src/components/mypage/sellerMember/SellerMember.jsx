import { Link } from "react-router-dom";

/** 내비게이션 */
const SellerMember = () =>{
	return(
		<>
			<nav>Gift-management-text
        <div className="Dashboard">Dashboard</div>
          <ul className="default-ranking">
            <ul>
              <hr className="schedule-line"/>
              <li className="schedule-information">일정 정보</li>
              <ul>
                <li ><Link className="Registration-Schedule" to={"/"}>등록 일정 보기</Link></li>
                <li><Link className="Manage-your-schedule">일정 관리하기</Link></li>
              </ul>
            </ul>
            <ul>
              <hr className="management-line"/>
              <li className="Gift-management-text">Gift 관리</li>
              <ul>
                <li><Link className="Gift-Cart" to={"/"}>Gift 장바구니</Link></li>
                <li ><Link className="Gift-delivery-tracking" to={"/"}>Gift 배송조회</Link></li>
                <li><Link className="Gift-review-management">Gift 리뷰관리</Link></li>
                <li><Link className="Gift-write-message">Gift 메세지 작성</Link></li>
              </ul>
            </ul>
          </ul>
			</nav>
		</>
	)
};
export default SellerMember;