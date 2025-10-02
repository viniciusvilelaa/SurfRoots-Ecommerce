import react from 'react';
import { Link } from 'react-router-dom';
import cart_icon from '../Assets/cart_icon.png'
import '../Assets/css/Navbar.css'
const Header = () => {
    return (
        <div className="header-container sticky top-0 z-50 bg-white shadow-md">
            <Link to='/'><h1 className={"logo"}>SURF ROOTS</h1></Link>

            <ul className="categories-center"> 
               <Link to='/mens'><li>MASCULINO</li></Link> 
               <Link to='/womens'><li>FEMININO</li></Link> 
               <Link to='/kids'><li>INFANTIL</li></Link> 
            </ul>
            
            <div className="header--right-login-cart">
                <Link to='/login'><button>Login</button></Link>

                <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
                <div className="nav-cart-count">0</div> 
            </div>
        </div>
        
    )
}

export default Header;