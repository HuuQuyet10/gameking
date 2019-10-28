import React, { Component } from 'react';
import Hoso from './Hoso';
import Thongbao from './Thongbao';
import Tinhcongbang from './Tinhcongbang';
import './Cuocganday.css';

class Taikhoan extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs2 sty-leback">
                    <li className="nav-item nav02 ung75">
                        <a className="nav-link active" data-toggle="tab" href="#hoso"><b>HỒ SƠ</b></a>
                    </li>
                    <li className="nav-item nav02 ung76">
                        <a className="nav-link" data-toggle="tab" href="#thongbao"><b>THÔNG BÁO</b></a>
                    </li>
                    <li className="nav-item nav02 ung77">
                        <a className="nav-link" data-toggle="tab" href="#tinhcongbang"><b>TÍNH CÔNG BẰNG</b></a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="hoso" className="container tab-pane active">
                        <Hoso className="dfd"></Hoso>
                    </div>
                    <div id="thongbao" className="container tab-pane fade">
                        <Thongbao></Thongbao>
                    </div>
                    <div id="tinhcongbang" className="container tab-pane fade">
                        <Tinhcongbang></Tinhcongbang>
                    </div>
                </div>
            </div>
        );
    }
}

export default Taikhoan;