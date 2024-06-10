import React from 'react';
import "./MobileNav.css";
import pdf from "../pdf/MehulResume.pdf"

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container'>
                <img src='./assets/images/logo.webp'/>
                <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a href="#" className='menu-item'>Work Experience</a>
                    </li>
                    <li>
                        <a href="#" className='menu-item'>Contact me</a>
                    </li>
                    <button className='contact-btn'>
                    <a
						href={pdf}
						download="MehulResume.pdf"
					>
						Download Resume
					</a>
                    </button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav