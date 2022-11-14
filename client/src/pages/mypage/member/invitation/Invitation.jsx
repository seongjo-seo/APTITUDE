import React  from 'react';

import './Invitation.css';

const Invitation = () => {
  return (
    <>
      {/* <section className=''> */}
        <div>
          <div className='all-container background-color'></div>
          <div className='wedding-phrase'> 강동원 ❤ 방구미 <br/>결혼합니다</div>
          {/* 첫번째 원 데코레이션 */}
          <div className='one-ellipse-decorate'></div>
          

          {/* 텍스트 위치 */}
          <div className='second-text-position'>아름다운 날<br/>2022년 11월 30일 수요일 19시<br/><br/>두 사람이 사랑으로 만나<br/>진실과 이해로써 하나를 이루려 합니다.</div>
          
          {/* <div className='text-position'>
          </div> */}
          
          
          {/* 두번째 원 데코레이션 */}
          <div className='two-ellipse-decorate'></div>


          
          <div className='second-rectangular-container'></div>
          <div className="wedding-photo-image-container"><img src="" alt="..." /></div>
        </div>
      {/* </section> */}
    </>
  );
};

export default Invitation;