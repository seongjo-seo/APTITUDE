import React  from 'react';

import './Invitation.css';

const Invitation = () => {
  return (
    <>
      {/* <section className=''> */}
        <div>
          {/* background-color */}
          <div className='all-container'></div>
          <div className='wedding-phrase'> 방구미 ❤ 강동원 <br/>결혼합니다!</div>
          {/* 첫번째 원 데코레이션 */}
          <div className='one-ellipse-decorate'></div>
          

          {/* 텍스트 위치 */}
          <div className='second-text-position'>아름다운 날<br/>2022년 11월 30일 수요일 19시<br/><br/>두 사람이 사랑으로 만나<br/>진실과 이해로써 하나를 이루려 합니다.</div>
          
          {/* <div className='text-position'>
          </div> */}
          
          
          {/* 두번째 원 데코레이션 */}
          <div className='two-ellipse-decorate'></div>


          
          <div className='second-rectangular-container'></div>
          {/* <div className="wedding-photo-image-container"> */}
          <img className='wedding-photo-image-container' src="/img/InvitationPage/wedding-Invitation.jpg" alt="..." />
          {/* </div> */}
          
          <div className='Third-Rectangular-Container-Position'>
            <div>
              <div>혼주에게 연락하기</div>
              <div>신랑 text 들어갈 곳</div>
              <div>신부 text 들어갈 곳</div>
            </div>
          </div>
          
          {/* 지도 위 텍스트 */}
          <div className='Third-text'>&lt;예식장 위치&gt;</div>

          {/* 지도 위치 */}
          <div className='location-on-the-map'>test</div>

          {/* 지도 아래에 들어갈 텍스트 위치 */}
          <div className='map-location'>(임시)소피텔 앰배서더 서울 호텔 4층 그랜드볼룸 방돔<br/>(서울 송파구 잠실로 209) 잠실역 도보 10분 거리</div>

        </div>
      {/* </section> */}
    </>
  );
};

export default Invitation;