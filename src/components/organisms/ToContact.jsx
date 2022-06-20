import React from 'react';
import '../css/App.scss';
import member from "../images/member.jpg"
import Button from "../atom/Button";

export default function ToContact() {
    return (
        <div className="contact"  id="contact">
            <div className="contact_column contact_description">
                <p>Lets's action shall we?</p>
                <Button link = "" txt="お問い合わせはこちら"/>
                <p>お問い合わせは <strong>hoda@sfc.keio.ac.jp</strong>にお願いします</p>
            </div>
            <div className="contact_column">
                <img src={member} alt="集合写真"/>
            </div>
        </div>
    );
}