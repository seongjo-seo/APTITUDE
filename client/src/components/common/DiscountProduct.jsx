import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav';

const DiscountProduct = () =>{
  return (
    <>
    <Header/>
    <Nav/>
      <div className='container'>
        <img src={process.env.PUBLIC_URL + "/img/DiscountPage/DiscountTestImg.png"} alt="이미지가 없습니다." />
      </div>
    <Footer/>
    </>
  );
};

export default DiscountProduct;