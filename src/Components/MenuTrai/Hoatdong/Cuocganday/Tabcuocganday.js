import React, { Component } from 'react';
import Tablesbang from './Tablesbang';
import Diemnoibat from './Diemnoibat';
import Cuoccuatoi from './Cuoccuatoi';
import Bangxephang from './Bangxephang';
import './StyleTabcuocganday.css';


class Tabcuocganday extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs2 sty-leback">
                    <li className="nav-item nav02">
                        <a className="nav-link active" data-toggle="tab" href="#cuocganday"><b>CƯỢC GẦN ĐÂY</b></a>
                    </li>
                    <li className="nav-item nav02">
                        <a className="nav-link" data-toggle="tab" href="#diemnoibat"><b>ĐIỂM NỔI BẬT</b></a>
                    </li>
                    <li className="nav-item nav02">
                        <a className="nav-link" data-toggle="tab" href="#cuoccuatoi"><b>CƯỢC CỦA TÔI</b></a>
                    </li>
                    <li className="nav-item nav02">
                        <a className="nav-link themchut" data-toggle="tab" href="#bangxephang"><b>BẢNG XẾP HẠNG</b></a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="cuocganday" className="container tab-pane active">
                        <Tablesbang></Tablesbang>
                    </div>
                    <div id="diemnoibat" className="container tab-pane fade">
                        <Diemnoibat></Diemnoibat>
                    </div>
                    <div id="cuoccuatoi" className="container tab-pane fade">
                        <Cuoccuatoi></Cuoccuatoi>
                    </div>
                    <div id="bangxephang" className="container tab-pane fade">
                        <Bangxephang></Bangxephang>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabcuocganday;