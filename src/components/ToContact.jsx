import React from 'react';
import '../App.scss';
import { Link } from "react-router-dom";
import member from "../images/member.jpg"
import Button from "../atom/Button";

export default function ToContact() {
    return (
        <div className="contact">
            <div className="contact_column contact_description">
                <p>Lets's action shall we?</p>
                <Button link = "/contact" txt="お問い合わせはこちら"/>
            </div>
            <div className="contact_column">
                <img src={member} alt="集合写真"/>
            </div>
        </div>
    );
}