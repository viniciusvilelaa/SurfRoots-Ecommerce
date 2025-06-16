import React, {useState} from 'react'
import { GiSurfBoard } from "react-icons/gi";
import { IoPricetagOutline } from "react-icons/io5";
import { FaTshirt } from "react-icons/fa";

function HeaderBottom() {
    
    return (
    <div className='navbar--bottom'>
        <ul className='navbar--bottom-container'>
            <li className='dropdown-item'>
                <GiSurfBoard className='dropdown--icon' />
                <p>Pranchas</p>
            </li>
            <li className='dropdown-item'>
                <FaTshirt className='dropdown--icon' />
                <p>Vestuário</p>
            </li>
            <li className='dropdown-item'>
                <IoPricetagOutline className='dropdown--icon' />
                <p>Ofertas</p>
            </li>
        </ul>
    </div>
  )
}

export default HeaderBottom