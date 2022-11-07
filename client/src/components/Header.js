import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

// Header 부분
const Header = () => {
  return (
    <>
      <header class="py-4 border-bottom">
        <div class="container d-flex flex-wrap justify-content-center">
          <Link
            to={"/"}
            class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <div class="navbar-brand fs-2 fw-bold " href="/">
              동심원
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
