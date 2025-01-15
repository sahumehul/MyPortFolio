import React, { useRef } from 'react';
import "./WorkExp.css"
import { WORK_EXPERIENCE } from '../../utils/data';
import Experience from './ExperienceCard/Experience';
import Slider from 'react-slick';

const WorkExp = () => {
    const sliderRef = useRef();
    const settings = {
        dots :false,
        speed : 500,
        infinite: true,
        slidesToShow : 2,
        slidesToScroll: 1,
        arrows: false,
        responsive :[
            {
                breakpoint : 769,
                settings : {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const slideRight =()=>{
        sliderRef.current.slickNext()
    }
    const slideLeft =()=>{
        sliderRef.current.slickPrev()
    }
  return (
    <section className='experience-container' id='workexp'>
        <h5>
            Project & Internship
        </h5>
        <div className='experience-content'>
        <div className='arrow-right' onClick={slideRight}>
            <span className='material-symbols-outlined'>chevron_right</span>
        </div>
        <div className='arrow-left' onClick={slideLeft}>
            <span className='material-symbols-outlined'>chevron_left</span>
        </div>
        <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item)=>(
                <Experience key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default WorkExp