import React, { useState } from 'react';
import "./Navbar.css"
import MobileNav from '../MabileNav/MobileNav';
import pdf from "../pdf/MehulResume.pdf"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu =()=>{
        setOpenMenu(!openMenu)
    }
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src='./assets/images/logo.webp' alt='logo'/>
                <ul>
                    <li>
                        <a href="#home" className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a href="#skills" className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a href="#workexp" className='menu-item'>Work Experience</a>
                    </li>
                    <li>
                        <a href="#contactme" className='menu-item'>Contact me</a>
                    </li>
                    <button className='contact-btn' onClick={toggleMenu}>
                    <a
						href={pdf}
						download="MehulResume.pdf"
					>
						Download Resume
					</a>
                    </button>
                </ul>
                <button className='menu-btn' onClick={toggleMenu}>
                    <span class="material-symbols-outlined"
                    style={{fontSize:"1.8rem"}}>
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar