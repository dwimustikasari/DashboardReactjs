import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import '../CSS/BurgerBar.css'

class BurgerBar extends Component {
    state ={
        clicked : false
    }
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        return(
            <nav className='Navbar-Items'>
                <h1 className='navbar-logo'>REACT 
                    <i class="fa-brands fa-react"></i>
                </h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa-regular fa-circle-xmark' : 'fa-regular fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className={item.clasName} href={item.url}>{item.title}</a>
                                </li>
                            )
                        })}
                      
                    </ul>


            </nav>
        )
    }
}
export default BurgerBar;