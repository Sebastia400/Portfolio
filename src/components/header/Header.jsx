import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeadersSocials from './HeadersSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sebastia Gomez Dolç</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA/>
        <HeadersSocials/>
        
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header