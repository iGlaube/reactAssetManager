import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{

    render(){
        return(
            <div>
                <nav className="purple darken-2">
                 <div className="nav-wrapper">
                    <a href="/" className="brand center">Newry Mourne and Down District Council</a>
                    <a  data-activates="main-menu" className="button-collapse show-on-large">
                        <i className="fa fa-bars"></i></a>

                    <ul className="right hide-on-small-only">
                        <li> <Link to="/"> <i className="fa fa-sitemap"></i> Home </Link> </li>
                    </ul>
                    <ul className="side-nav" id="main-menu">
                        <li> <Link to="/"> <i className="fa fa-sitemap"></i>Printers</Link> </li>
                        <li> <Link to="/printer/add"> <i className="fa fa-sitemap"></i> Add Printer </Link> </li>
                        <li> <Link to="/about"> <i className="fa fa-question-circle"></i> About </Link> </li>
                    </ul>
                 </div>
                </nav>
            </div>

        );
    }
}

export default NavBar;