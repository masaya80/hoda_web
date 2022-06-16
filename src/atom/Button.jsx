import React from 'react';
import {Link} from "react-router-dom";

export default function Button(props) {
    return (
        <Link to={props.link} className="btn slide skew">{props.txt}</Link>
    )
}