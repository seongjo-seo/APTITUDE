import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/sign/Login";
import SignUp from "./pages/sign/SignUp";
import FindId from "./pages/sign/FindId";
import Sale_detail from "./pages/sale/Sale_detail";
import Sale_list from "./pages/sale/Sale_list";

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
          <Route path="/Sale_list" element={<Sale_list />} />
          {/* 판매 상세 페이지 */}
          <Route path="/Sale_list/Sale_detail" element={<Sale_detail />} />
        </Routes>
        <Routes>
          {/* 아이디 찾기 */}
          <Route path="/Login/FindId" element={<FindId />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
