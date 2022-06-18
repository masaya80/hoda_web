import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="App-header">
            <p className="header_lab">hoda.Lab</p>
            <div className="header_menu">
                {/*<Link to="/" className="header_item header_home">home</Link>*/}
                {/*<Link to="/about" className="header_item header_about">about us</Link>*/}
                {/*<Link to="/hochan" className="header_item header_hochan">ho-chan</Link>*/}
                {/*<Link to="/contact" className="header_item header_contact">contact</Link>*/}
                <AnchorLink href='#home' className="header_item">home</AnchorLink>
                <AnchorLink href='#about' className="header_item">about us</AnchorLink>
                <AnchorLink href='#info' className="header_item">information</AnchorLink>
                <AnchorLink href='#hochan' className="header_item">ho-chan</AnchorLink>
                <AnchorLink href='#contact' className="header_item">contact</AnchorLink>

            </div>
        </header>
    )
}

