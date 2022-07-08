import React, { Component } from 'react'
import { MenuItems } from './MenuItems';
import '../CSS/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
class Sidebar extends Component {
    state = {
        clicked: false
    }
    handleClick=()=> {
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
        <nav className='NavbarItems'>
            <h1 className='nav-logo'> 
                React <i class="fa-brands fa-react"></i>
            </h1>
            <div className='menu-icons'onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fa-solid fa-x' : 'fa-solid fa-burger' }/>
            </div>
            <ul className={this.state.clicked ? 'nav-Menu active' : 'nav-Menu'}>
                {MenuItems.map((item, index)=>{
                    return(
                        <li  key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}</a>
                        </li>
                    )
                })}
               
            </ul>
        </nav>
    )
  }
}
export default Sidebar;