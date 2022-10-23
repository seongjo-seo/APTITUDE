import { useParams } from "react-router-dom";

const Sale_list = () =>{
  const {id} = useParams();
  console.log(id);

  return(
    <div>
      <div> test </div>
    </div>
  )
};

export default Sale_list;