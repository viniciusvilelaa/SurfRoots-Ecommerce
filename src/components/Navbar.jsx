import react, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cart_icon from '../Assets/cart_icon.png'
import '../Assets/css/Navbar.css'
import { ShopContext } from '../context/ShopContext';
const Header = () => {
    
    const {getTotalItemsCart} = useContext(ShopContext);
    
    return (
        <div className="header-container sticky top-0 z-50 bg-white shadow-md">
            <Link to='/'><h1 className={"logo"}>SURF ROOTS</h1></Link>

            <ul className="categories-center"> 
               <Link to='/mens' onClick={()=>{window.scrollTo(0,0)}}><li>MASCULINO</li></Link> 
               <Link to='/womens' onClick={()=>{window.scrollTo(0,0)}}><li>FEMININO</li></Link> 
               <Link to='/kids' onClick={()=>{window.scrollTo(0,0)}}><li>INFANTIL</li></Link> 
            </ul>
            
            <div className="header--right-login-cart">
                <Link to='/login'><button>Login</button></Link>

                <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
                <div className="nav-cart-count">{getTotalItemsCart()}</div> 
            </div>
        </div>
        
    )
}

export default Header;