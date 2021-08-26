import React from 'react'
import './Header.css'
import bgImg from './imgs/bg1.jpg'

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitle sm">React & Node</span>
                <span className="headerTitle lg" data-char="Blog">Blog</span>
            </div>
            <img className="headerImg" src={bgImg} alt="background image" />
        </div>
    )
}

export default Header
