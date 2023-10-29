import React from 'react'
import {Swiper,SwiperSlide,useSwiper } from 'swiper/react';
import './residencies.css'
import 'swiper/css'
import data from '../../Detail/Detail.json'
import { slidesSetting } from '../Residencies/slidesSetting.js';
export const Residencies = () => {
  return (
    <section className='residencies-wrap'> 
        <div className="paddings innerWidth residencies-container">
            <div className="flexColStart residencies-head">
                <span className='orangeText'>Best choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

            <Swiper {...slidesSetting}>
                <SlidesButton />
                {
                    data.map((card, i) => (
                      <SwiperSlide key={i}>
                        <div className="residencies-card flexColStart">
                              <img src={card.image}  />

                              <span className="residencies-price secondaryText">
                                <span  style={{color:'orange'}}>&#3647;</span>
                                <span>{card.price}</span>
                              </span>

                              <span className='primaryText'>{card.name}</span>
                              <span className='secondaryText'>{card.detail}</span>
                        </div>
                      </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies;
  
const SlidesButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter residence-button">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    );
}
