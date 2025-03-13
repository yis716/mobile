import React from 'react';
import '../App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";


function getImgUrl(url, name, ext) {
  return new URL(`${url}/${name}.${ext}` , import.meta.url).href
}

function Main() {

  SwiperCore.use([Pagination, Autoplay]);

  return (
    <>
      <div className='visual'>
        <Swiper slidesPerView={1} spaceBetween={0} loop={true} 
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
            modules={[Autoplay]}
          pagination={{ clickable: true }} 
          // navigation={{ clickable: true }}
          className="mySwiper1" >
          <SwiperSlide>
            <img src={getImgUrl('/images', 'visual1', 'jpg')} alt="비주얼이미지" />
            <div>
              <p><span>GS</span><span>리테일</span>의 새로운도약,</p>
              <p>변함없는 모습으로 고객과 함께 하겠습니다</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={getImgUrl('/images', 'visual2', 'jpg')} alt="비주얼이미지" />
            <div className='swiperTxt'>
              <p>고객과 함께 내일을 꿈꾸며</p>
              <p>새로운 삶의 가치를 창조하는 GS리테일입니다</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={getImgUrl('/images', 'visual3', 'jpg')} alt="비주얼이미지" />
            <div className='swiperTxt'>
              <p>Grow Sustainably, GS</p>
              <p>친환경 혁신으로 지속 가능한 성장을 추구합니다</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className='comPany sec'>
        <h3 className='hidden'>회사소개</h3>
        <div className='comHead'>
          <p>Company</p>
          <p>
            고객의 모든 경험을 연결하고 데이터로 공감하며<br/>
            상품과 서비스로 신뢰 받는 플랫폼
          </p>
        </div>
        <div className='comBot'>
          <ul>
            <li className='bottom1'>
              <dl>
                <dt>
                  GS리테일 고유의 가치관<br/>
                  <span>GS Value</span>
                </dt>
                <dd>
                  <img src={getImgUrl('/images', 'icon1', 'png')} alt="아이콘이미지" />
                </dd>
                <dd>
                  &lsquo;4F&rsquo;를 지키며 GS리테일의<br/>
                  새로운 도약, 변함없는 모습으로<br/>
                  고객과 함께 하겠습니다.
                </dd>
              </dl>
            </li>
            <li className='bottom2'>
              <dl>
                <dt>
                  GS리테일의 일하는 방식<br/>
                  <span>GS Way</span>
                </dt>
                <dd>
                  <img src={getImgUrl('/images', 'icon2', 'png')} alt="아이콘이미지" />
                </dd>
                <dd>
                  GS리테일만의 8가지 일하는 방식으로<br/>
                  항상 고객과 함께하며, 삶의 가치를<br/>
                  향상시키는 회사가 되도록 노력하겠습니다.
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </section>
      <section className='esg'>
        <h3 className='hidden'>지속가능경영</h3>
        <div className='esgHead sec'>
          <p>Green Life Together!</p>
          <p>더 나은 일상을 위해 가야할 길, 지속 가능한 경영</p>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Main;