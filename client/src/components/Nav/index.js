import React from 'react'
// import PropTypes from 'prop-types'
// import "./style.css";
// import ContactModal from "../ContactModal"
import { Navbar, NavItem } from "react-materialize"
import { Link } from "react-router-dom"
// import logo from "../../images/logo.png"

function Nav(props) {

    return (
        <Navbar className="navbar" fixed={true} brand={<i className="fas fa-mobile-alt"></i>} right>
            <NavItem><Link className="portfolio-link" to="/"><div className="navbar-item">Products</div></Link></NavItem>
            <NavItem className="right-nav-item"><Link className="portfolio-link" to="/cart"><div className="navbar-item">Cart</div></Link></NavItem>
        </Navbar>
    )
}

export default Nav

