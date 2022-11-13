import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Header.css";

// Header 부분
const Header = () => {
  return (
    <>
      <header class="border-bottom">
        <div class="container">
          <Link to={"/"}>
            <div className="row justify-content-start">
              <img
                className="header-img"
                src="/img/mainLogo.png"
                alt="이미지가 없습니다."
              />
            </div>
            {/* <div class="navbar-brand fs-2 fw-bold "></div> */}
          </Link>
        </div>
      </header>
    </>
  );
};
//  d-flex flex-wrap justify-content-center
export default Header;
