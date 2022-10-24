import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/sign/Login";
import SignUp from "./pages/sign/SignUp";
import FindId from "./pages/sign/FindId";

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
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
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
