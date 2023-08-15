import { Component } from "react";
import "./Navbar.css"
import { MenuItem } from "./Menuitems";
import { Link } from "react-router-dom";
class Navbar extends Component{
    state = {clicked:false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked});
    }
    render(){
        return(
            <nav className="Navbaritem">
                <h1 className="Navbar-logo">PInc</h1>
                <div className="Menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={this.state.clicked ?"Navbar-menu active" : "Navbar-menu"}>
                    {MenuItem.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}><i className={item.icon}/>{item.title}</Link>
                            </li>
                        );
                    })}
                 <button>Sign up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;