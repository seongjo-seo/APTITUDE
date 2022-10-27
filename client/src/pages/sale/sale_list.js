import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Sale_detail from "./Sale_detail";

const Sale_list = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Header />
      <Nav />
      <div>
        <Link to={"Sale_detail"}>상세 보기 테스트 버튼</Link>
        <div> test </div>
      </div>
    </>
  );
};

export default Sale_list;
