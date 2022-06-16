import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer_lab">hoda.Lab</p>
            <div className="footer_menu">
                <Link to="/" className="footer_item footer_home">home</Link>
                <Link to="/about" className="footer_item footer_about">about us</Link>
                <Link to="/hochan" className="footer_item footer_hochan">ho-chan</Link>
                <Link to="/contact" className="footer_item footer_contact">contact</Link>
            </div>
            <p className="privilage">©︎hodaLab.</p>
        </footer>
    )
}