import React from 'react'
import instagram_icon from '../../Assets/instagram_icon.png'
import pintester_icon from '../../Assets/pintester_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'
import '../footer/footer.css'
import Newsletter from '../Newsletter'

export const Footer = () => {
  return (
    
    <div className='footer-container'>
        
        <div className="footer-logo">
            
            <p>Surf Roots</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt="" />
            </div>
            <div className='footer-icons-container'>
                <img src={pintester_icon} alt="" />
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}
