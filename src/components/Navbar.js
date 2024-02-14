import { Component } from "react";
import "./NavbarStyles.css";
import "./Navbar.js";
import {Link} from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faHouse, faTimes} from "@fortawesome/free-solid-svg-icons";
import { MenuItems } from "./MenuItems";

class Navbar extends Component{
    state = {clicked:false};
    handleclick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav class = "NavbarItems">
                <h1 className="navbar-logo">Journey to the West</h1>
                <div className="menu-icons" onClick={this.handleclick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
                    {MenuItems.map((item, index)=>{
                    return(
                    <li key={index}>
                        <a href="/" className={item.cName}>
                        <i className={item.icon} />{item.title}
                        </a>
                    </li>
                    )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}
export default Navbar;