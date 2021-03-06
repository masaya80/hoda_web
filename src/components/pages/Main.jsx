import React from 'react';
import '../css/App.scss';
import Header from "../organisms/Header";
import ToContact from "../organisms/ToContact";
import Footer from "../organisms/Footer";
import Info from "../organisms/Info";
import hochan from '../images/hochan.jpg'


export default function Main() {
    return (
        <div className="App">
            <Header/>
            <main>
                <div className="top" id="home">
                    <div className="top_content">
                        <h1>研究・教育は超実践型</h1>
                    </div>
                </div>
                <div className="about" id="about">
                    <h2>保田研究会って何してるの?</h2>
                    <p>保田研究会はなんでもする研究会です。</p>
                    <p>クッキーの販売戦略を練ったり、CUZENCHAという新しいプロダクトの戦略を練ったり....。基本的には自分達から何が必要か考え、自分達でどんどん進めていく必要があるのでその分守備範囲も広く大変ですが保田研究会でしかできない経験は間違いなくできます！</p>
                    <p>やりたいことがあればもしかしたらほーちゃん(保田教授)がサポートしてくれるかも...?</p>
                </div>
                <Info/>
                <div className="hochan" id="hochan">
                    <div className="hochan_column">
                        <img src={hochan} alt=""/>
                    </div>
                    <div className="hochan_column">
                        <h2>研究・教育は超実践型</h2>
                        <p>保田 隆明</p>
                        <ul>
                            <li>あだ名：ほーちゃん</li>
                            <li>開講授業：ファイナンス論</li>
                        </ul>
                        <a href="https://wkwk.tv/hoda/">
                            <button className="btn slide skew">More→</button>
                        </a>
                    </div>
                </div>
                <ToContact/>
            </main>
            <Footer/>
        </div>
    );
}


