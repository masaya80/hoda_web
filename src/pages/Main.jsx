import React from 'react';
import { Link } from "react-router-dom";
import '../App.scss';
import Header from "../components/Header";
import ToContact from "../components/ToContact";
import Footer from "../components/Footer";
import hochan from '../images/hochan.jpg'
import Button from "../atom/Button";


export default function Main() {
    return (
        <div className="App">
            <Header/>
            <main>
                <div className="top">
                    <div className="top_content">
                        <h1>ACTIONS Trumps <br/>
                            Everything</h1>
                        <p>行動しか勝たん</p>
                    </div>
                </div>
                <div className="about">
                    <h2>保田研究会って何してるの?</h2>
                    <p>保田研究会はなんでもする研究会です。</p>
                    <p>クッキーの販売戦略を練ったり、CUZENCHAという新しいプロダクトの戦略を練ったり....。基本的には自分達から何が必要か考え、自分達でどんどん進めていく必要があるのでその分守備範囲も広く大変ですが保田研究会でしかできない経験は間違いなくできます！</p>
                    <p>やりたいことがあればもしかしたらほーちゃん(保田教授)が調整してくれるかも...?</p>
                </div>
                <div className="hochan">
                    <div className="hochan_column">
                        <img src={hochan} alt=""/>
                    </div>
                    <div className="hochan_column">
                        <h2>研究・教育は超実践型</h2>
                        <p>保田 隆明</p>
                        <ul>
                            <li>あだ名：ほーちゃん</li>
                            <li>趣味：読書</li>
                            <li>好きなタイプ：テキストテキスト</li>
                            <li>好きな食べ物：カレーパン</li>
                            <li>チャレンジしたいこと：水上スキー</li>
                            <li>学生時代の夢：東洋の魔女</li>
                            <li>sfcは好き？：そこそこ</li>
                        </ul>
                        <Button link = "/hochan" txt="真面目なほーちゃんはこちら"/>
                    </div>
                </div>
                <ToContact/>
            </main>
            <Footer/>
        </div>
    );
}


