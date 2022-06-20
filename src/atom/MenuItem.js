import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function MenuItem(props) {
    return (
        <AnchorLink href={props.link} className="header_item">{props.txt}</AnchorLink>
    )
}