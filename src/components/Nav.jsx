// import React from 'react'
import { useState } from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import SideNav from './SideNav'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => {
        setMenuOpen(false);
    };
  return (
    <header className="padding-x py-8 fixed z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt='logo' width={130} height={29}/>
            </a>
            <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="max-lg:block hidden">
                <img src={hamburger} alt="Hamburger" width={25} height={25} onClick={() => setMenuOpen(!menuOpen)}/>
            </div>
            <SideNav isOpen={menuOpen} onClose={closeMenu} />
        </nav>
    </header>
  )
}

export default Nav