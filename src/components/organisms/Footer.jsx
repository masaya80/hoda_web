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
                <MenuItem link="#home" txt="contact" class="footer_item"/>
                <MenuItem link="#about" txt="about us" class="footer_item"/>
                <MenuItem link="#info" txt="information" class="footer_item"/>
                <MenuItem link="#hochan" txt="ho-chan" class="footer_item"/>
                <MenuItem link="#contact" txt="contact" class="footer_item"/>
            </div>
            <p className="privilage">©︎hodaLab.</p>
        </footer>
    )
}