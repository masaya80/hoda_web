import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../../css/sidebar.scss"
import MenuItem from "./MenuItem";

export default props => {
    return (
        <Menu {...props} right　noTransition>
            <MenuItem link="#home" txt="contact" class="bm-item"/>
            <MenuItem link="#about" txt="about us" class="bm-item"/>
            <MenuItem link="#info" txt="information" class="bm-item"/>
            <MenuItem link="#hochan" txt="ho-chan" class="bm-item"/>
            <MenuItem link="#contact" txt="contact" class="bm-item"/>
        </Menu>
    );
};