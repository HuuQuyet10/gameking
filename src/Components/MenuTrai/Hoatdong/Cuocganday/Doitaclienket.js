import React, { Component } from 'react';
import Bangdieukhien from './Bangdieukhien';
import Doitac_chiendich from './Doitac_chiendich';
import Lichsu02 from './Lichsu02';
import './Cuocganday.css';


class Doitaclienket extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs2 sty-leback">
                    <li className="nav-item nav02 ung75">
                        <a className="nav-link active" data-toggle="tab" href="#bangdieukhien"><b>BẢNG ĐIỀU KHIỂN</b></a>
                    </li>
                    <li className="nav-item nav02 ung76">
                        <a className="nav-link" data-toggle="tab" href="#chiendich2"><b>CHIẾN DỊCH</b></a>
                    </li>
                    <li className="nav-item nav02 ung77">
                        <a className="nav-link" data-toggle="tab" href="#lichsu2"><b>LỊCH SỬ</b></a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="bangdieukhien" className="container tab-pane active">
                        <Bangdieukhien></Bangdieukhien>
                    </div>
                    <div id="chiendich2" className="container tab-pane fade">
                        <Doitac_chiendich></Doitac_chiendich>
                    </div>
                    <div id="lichsu2" className="container tab-pane fade">
                        <Lichsu02></Lichsu02>
                    </div>
                </div>
            </div>
        );
    }
}

export default Doitaclienket;