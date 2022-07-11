import React, {useState} from "react";
import '../CSS/Navbar.css';
const Navbar = () => {
  const [Burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }
 
  return(
    <div className="navbars">
      <nav className="Navbars-items">
        <div className="burgers-menu" onClick={updateMenu}>
          <div className={Burger_class} ></div>
          <div className={Burger_class} ></div>
          <div className={Burger_class} ></div>
        </div>
        <div className="logo-Items">
          REACT 
          <i class="fa-brands fa-react"></i>
        </div>
      </nav>
      <div className={menu_class}>
        <div className="toolbars-item">
        <li className='toolBars'> Home</li>
        <li className='toolBars'>Services</li>
        <li className='toolBars'>Product</li>
        <li className='toolBars'>Contact Us</li>
        <li className='toolBars'>About Us</li>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;