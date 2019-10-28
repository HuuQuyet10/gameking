import React, { Component } from 'react';
import Chiendich from './Chiendich';
import Danhsach from './Danhsach';
import Lichsu from './Lichsu';
import './Cuocganday.css'

class Tienthuong extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs2 sty-leback">
                    <li className="nav-item nav02 ung75">
                        <a className="nav-link active" data-toggle="tab" href="#chiendich"><b>CHIẾN DỊCH</b></a>
                    </li>
                    <li className="nav-item nav02 ung76">
                        <a className="nav-link" data-toggle="tab" href="#danhsach"><b>DANH SÁCH</b></a>
                    </li>
                    <li className="nav-item nav02 ung77">
                        <a className="nav-link" data-toggle="tab" href="#lichsu"><b>LỊCH SỬ</b></a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="chiendich" className="container tab-pane active">
                        <Chiendich></Chiendich>
                    </div>
                    <div id="danhsach" className="container tab-pane fade">
                        <Danhsach></Danhsach>
                    </div>
                    <div id="lichsu" className="container tab-pane fade">
                        <Lichsu></Lichsu>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tienthuong;