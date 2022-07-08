import React, { Component } from 'react'
import { MenuItems } from './MenuItems';
import '../CSS/Sidebar2.css';

class Sidebar2 extends Component {
    state = {
        clicked: false
    }
    handleClick=()=> {
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
        <nav className='NavbarItems2'>
            <h1 className='nav-logo2'> 
                React <i class="fa-brands fa-react"></i>
            </h1>
            <div className='menu-icons2'onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fa-solid fa-x' : 'fa-solid fa-burger' }/>
            </div>
            <ul className={this.state.clicked ? 'nav-Menu active2' : 'nav-Menu2'}>
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
export default Sidebar2;