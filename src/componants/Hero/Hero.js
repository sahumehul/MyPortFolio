import React from 'react';
import "./Hero.css"

const Hero = () => {
    return (
        <section className='hero-container' id='home'>
            <div className='hero-content'>
                <h2>
                    Building Digital Experiences that Inspires
                </h2>
                <p>
                    Passionate MERN Stack Developer || Transforming ideas into Seamless and Visually Stunning Web Solutions
                </p>
            </div>

            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img src='./assets/images/react.jpg' alt=''></img>
                    </div>
                    <img src='./assets/images/profile.jpg' alt=''></img>
                </div>

                <div className='tech-icon'>
                    <div>
                        <img src='./assets/images/html.png' alt=''></img>
                    </div>
                    <div>
                        <img src='./assets/images/css.png' alt=''></img>
                    </div>
                    <div>
                        <img src='./assets/images/javascript.png' alt=''></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero