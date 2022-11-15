import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/sign/Login";
import SignUp from "./pages/sign/SignUp";
import FindId from "./pages/sign/find/FindId";
import SaleDetail from "./pages/sale/SaleDetail";
import SaleList from "./pages/sale/SaleList";
import DiscountProduct from "./pages/DiscountProduct/DiscountProduct";
import Information from "./components/common/Information";
import SellerMypage from "./pages/mypage/salesMember/SellerMypage";
import Mypage from "./pages/mypage/member/Mypage";
import Invitation from "./pages/mypage/member/invitation/Invitation.jsx";
import Schedule from "./pages/mypage/member/schedule/Schedule";

/**
 *  상태는 BrowserRouter 경로는 Link
 *  없으면 기본 있으면 :id의 형태로 값을 넣을 수 있다. -> 코드 변경에 있어서 권한을 분리할 때 필요할 부분들이 보인다.
 *
 * */

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<Home />} />
          {/* 로그인 */}
          <Route path="/Login" element={<Login />} />
          {/* 회원가입 */}
          <Route path="/SignUp" element={<SignUp />} />
          {/* 판매 페이지 */}
          <Route path="/SaleList" element={<SaleList />} />
          {/* 판매 상세 페이지 */}
          <Route path="/SaleList/SaleDetail" element={<SaleDetail />} />
          {/* 할인 상품 페이지 */}
          <Route path="/DiscountProduct" element={<DiscountProduct />} />
          <Route path="/Information" element={<Information />} />
          {/* 일반 회원 마이페이지 */}
          <Route path="/member/Mypage" element={<Mypage />} />
          {/* 판매자 마이페이지 */}
          <Route path="/salesMember/SellerMypage" element={<SellerMypage />} />
          {/* 청첩장 */}
          <Route path="/Invitation" element={<Invitation />} />
          {/* 마이페이지 일정관리 */}
          <Route path="/Mypage/schedule" element={<Schedule/>}/>
        </Routes>
        <Routes>
          {/* 아이디 찾기 후순위 */}
          <Route path="/Login/FindId" element={<FindId />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
