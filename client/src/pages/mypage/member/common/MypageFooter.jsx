import React from 'react';

import "../static/core.css"

const MypageFooter = ()=>{

  return (
    <>
      {/* <!-- Footer --> */}
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright 2022 동심원</span>
              {/* <span>Copyright &copy; 2022 동심원</span> */}
          </div>
        </div>
      </footer>
      {/* <!-- End of Footer --> */}
    </>
  );
}

export default MypageFooter;