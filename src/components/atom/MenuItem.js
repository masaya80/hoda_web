import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function MenuItem(props) {
    return (
        <AnchorLink href={props.link} className={props.class} tabindex="0" style={{'display': 'block'}}>{props.txt}</AnchorLink>
    )
}