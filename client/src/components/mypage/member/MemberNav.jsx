import { Link } from "react-router-dom";
import "./MemberNav.css";

/** 내비게이션 */
const MemberNav = () =>{
	return(
		<>
    {/* Gift-management-text */}
			<nav >
        <div className="side-logo">

        </div>
        <div className="Dashboard">Dashboard</div>
        {/* className="default-ranking" */}
          <ul>
            <ul>
              <hr className="schedule-line"/>
              <p className="schedule-information">일정 정보</p>
              <ul>
                <p className="delete-text-line"><Link className="Registration-Schedule" to={"/"}>등록 일정 보기</Link></p>
                <p className="delete-text-line"><Link className="Manage-your-schedule">일정 관리하기</Link></p>
              </ul>
            </ul>
            <ul>
              <hr className="management-line"/>
              <p className="delete-text-line Gift-management-text">Gift 관리</p>
              <ul>
                <p className="delete-text-line"><Link className="Gift-Cart" to={"/"}>Gift 장바구니</Link></p>
                <p className="delete-text-line"><Link className="Gift-delivery-tracking" to={"/"}>Gift 배송조회</Link></p>
                <p className="delete-text-line"><Link className="Gift-review-management">Gift 리뷰관리</Link></p>
                <p className="delete-text-line"><Link className="Gift-write-message">Gift 메세지 작성</Link></p>
              </ul>
            </ul>
          </ul>
			</nav>
		</>
	)
};
export default MemberNav;