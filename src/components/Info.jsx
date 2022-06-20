import React from 'react';
import '../css/App.scss';


export default function Info() {
    return (
        <div className="info"  id="info">
            <h2>お知らせ</h2>
            <ul className="news-list">
                <li className="item">
                    <a>
                        <p className="date">2022/6/19</p>
                        <p className="title">保田研究会のホームページを公開しました！</p>
                    </a>
                </li>
                <li className="item">
                    <a>
                        <p className="date">2022/6/20</p>
                        <p className="title">ハーバードオンラインスクールの星さんがいらっしゃいました</p>
                    </a>
                </li>
            </ul>
        </div>
    );
}