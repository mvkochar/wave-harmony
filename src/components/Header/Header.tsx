import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'><img src="/images/logo.svg" alt="logo" /></div>
            <nav>
                <ul className="header-nav d-f">
                    <li className="header-nav-item"><a href="">Catalog</a></li>
                    <li className="header-nav-item"><a href="">About</a></li>
                    <li className="header-nav-item"><a href="">Sizes</a></li>
                    <li className="header-nav-item"><a href="">Reviews</a></li>
                    <li className="header-nav-item"><a href="">Shipping and payment</a></li>
                    <li className="header-nav-item"><a href="">Create your swimsuit</a></li>
                    <li className="header-nav-item certificates"><a href="">Certificates</a></li>
                    <li className="header-nav-item"><a href="">Blog</a></li>
                    <li className="header-nav-item"><a href="">Contacts</a></li>
                    <li className="header-nav-item sale"><a href="">Sale up to -40%</a></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Header