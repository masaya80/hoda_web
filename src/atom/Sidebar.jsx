import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../css/sidebar.scss"

export default props => {
    return (
        <Menu {...props} right　noTransition>
            <AnchorLink href='#home' className="header_item">home</AnchorLink>
            <AnchorLink href='#about' className="header_item">about us</AnchorLink>
            <AnchorLink href='#info' className="header_item">information</AnchorLink>
            <AnchorLink href='#hochan' className="header_item">ho-chan</AnchorLink>
            <AnchorLink href='#contact' className="header_item">contact</AnchorLink>
        </Menu>
    );
};