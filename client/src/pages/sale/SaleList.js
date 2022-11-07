import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import SaleDetail from "./SaleDetail";

const SaleList = () => {
  return (
    <>
      <Header />
      <Nav />
      <div>
        <Link to={"SaleDetail"}>상세 보기 버튼</Link>
      </div>

      <Footer />
    </>
  );
};

export default SaleList;
