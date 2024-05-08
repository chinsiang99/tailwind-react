// import React from 'react'
import { useEffect } from 'react';
import { navLinks } from '../constants'

const SideNav = ({ isOpen, onClose }) => {
    return (
        <div className={`side-nav ${isOpen ? 'block' : 'hidden'}`}>
            <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800 focus:outline-none">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <ul className="flex flex-col items-center mt-4">
                {navLinks.map((item) => (
                    <li key={item.label} className="my-2">
                        <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray" onClick={() => onClose()}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideNav