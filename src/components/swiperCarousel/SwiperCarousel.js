import React from 'react';
import Card from '../card/Card';
import './SwiperCarousel.css';

/* --- Importing Swiper Core And Required Modules --- */

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

/* --- Importing Swiper Styles --- */

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* --- Application --- */

export default function SwiperCarousel(props){
    return(
        
        <div className='swiperCarousel'>
            <h2 id={props.id}>{props.title}</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={64}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Card title={props.cardTitle[0]} paragraph={props.cardParagraph[0]} image={props.cardimage[0]} alt={props.cardAlt[0]} /></SwiperSlide>
                <SwiperSlide><Card title={props.cardTitle[1]} paragraph={props.cardParagraph[1]} image={props.cardimage[1]} alt={props.cardAlt[1]} /></SwiperSlide>
                <SwiperSlide><Card title={props.cardTitle[2]} paragraph={props.cardParagraph[2]} image={props.cardimage[2]} alt={props.cardAlt[2]} /></SwiperSlide>
                <SwiperSlide><Card title={props.cardTitle[0]} paragraph={props.cardParagraph[0]} image={props.cardimage[0]} alt={props.cardAlt[0]} /></SwiperSlide>
                <SwiperSlide><Card title={props.cardTitle[1]} paragraph={props.cardParagraph[1]} image={props.cardimage[1]} alt={props.cardAlt[1]} /></SwiperSlide>
                <SwiperSlide><Card title={props.cardTitle[2]} paragraph={props.cardParagraph[2]} image={props.cardimage[2]} alt={props.cardAlt[2]} /></SwiperSlide>
                <SwiperSlide><Card title={props.cardTitle[0]} paragraph={props.cardParagraph[0]} image={props.cardimage[0]} alt={props.cardAlt[0]} /></SwiperSlide>
                <SwiperSlide><Card title={props.cardTitle[1]} paragraph={props.cardParagraph[1]} image={props.cardimage[1]} alt={props.cardAlt[1]} /></SwiperSlide>
                <SwiperSlide><Card title={props.cardTitle[2]} paragraph={props.cardParagraph[2]} image={props.cardimage[2]} alt={props.cardAlt[2]} /></SwiperSlide>
            </Swiper>
        </div>
    );
}