import React, { Component } from 'react';
import list1 from './Img/list1.png';
import qua1 from './Img/qua1.png';
import tay1 from './Img/tay1.png';
import user1 from './Img/user1.png';
import Tabcuocganday from './Tabcuocganday';
import Tienthuong from './Tienthuong';
import Doitaclienket from './Doitaclienket';
import Taikhoan from './Taikhoan';
import './Cuocganday.css';

class Cuocganday extends Component {
    render() {
        return (
            <div className="">
                <ul className="nav nav-tabs tab-to">
                    <li className="nav-item tabstyle">
                        <a className="nav-link active" data-toggle="tab" href="#hoatdong">
                            <img src={list1} alt="list1" className="style-anh" /><br></br>
                            <b>HOẠT ĐỘNG</b></a>
                    </li>
                    <li className="nav-item tabstyle">
                        <a className="nav-link" data-toggle="tab" href="#tienthuong">
                            <img src={qua1} alt="qua1" className="style-anh" /><br></br>
                            <b>TIỀN THƯỞNG</b></a>
                    </li>
                    <li className="nav-item tabstyle them">
                        <a className="nav-link" data-toggle="tab" href="#doitaclienket">
                            <img src={tay1} alt="tay1" className="style-anh" /><br></br>
                            <b>ĐỐI TÁC LIÊN KẾT</b></a>
                    </li>
                    <li className="nav-item tabstyle gdvgdfg">
                        <a className="nav-link" data-toggle="tab" href="#taikhoan">
                            <img src={user1} alt="user1" className="style-anh" /><br></br>
                            <b>TÀI KHOẢN</b></a>
                    </li>
                </ul>
                <div className="tab-content back-02">
                    <div id="hoatdong" className="container tab-pane active">
                        <Tabcuocganday></Tabcuocganday>
                    </div>
                    <div id="tienthuong" className="container tab-pane fade">
                        <Tienthuong></Tienthuong>
                    </div>
                    <div id="doitaclienket" className="container tab-pane fade">
                        <Doitaclienket></Doitaclienket>
                    </div>
                    <div id="taikhoan" className="container tab-pane fade">
                        <Taikhoan></Taikhoan>
                    </div>
                </div>
            </div >
        );
    }
}

export default Cuocganday;