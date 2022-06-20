import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import "../css/sidebar.scss"
import Sidebar from "../atom/Sidebar.jsx";
// import {Helmet} from "react-helmet"


export default function Header() {
    return (
        <>
            <header className="App-header">
                <p className="header_lab">hoda.Lab</p>
                <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
            </header>
        </>
)
}
