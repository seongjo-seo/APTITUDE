import React from 'react';
import MemberNav from '../../../../components/mypage/member/MemberNav';
import MemberHeader from '../../../../components/mypage/MemberHeader';

import './Schedule.css';

const Schedule = ()=> {
  return (
    <>
    <div>
      <MemberHeader />
      <MemberNav/>
        <div className='calendar-container'></div>
      <div>
      </div>
        <footer className="mypage-footer"><span className="mypage-footer-text">ⓒ 2022 (주)성조</span></footer>
      </div>
    </>
  );
}

export default Schedule;