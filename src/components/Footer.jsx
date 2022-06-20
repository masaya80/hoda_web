import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuItem from "../atom/MenuItem";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer_lab">hoda.Lab</p>
            <div className="footer_menu">
                <AnchorLink href='#home' className="header_item">home</AnchorLink>
                <AnchorLink href='#about' className="header_item">about us</AnchorLink>
                <AnchorLink href='#info' className="header_item">information</AnchorLink>
                <AnchorLink href='#hochan' className="header_item">ho-chan</AnchorLink>
                <AnchorLink href='#contact' className="header_item">contact</AnchorLink>
                <MenuItem link="#home" txt="contact"/>
            </div>
            <p className="privilage">©︎hodaLab.</p>
        </footer>
    )
}