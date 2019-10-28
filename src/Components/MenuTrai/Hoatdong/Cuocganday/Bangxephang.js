import React, { Component } from 'react';
import Hangngay from './Hangngay';
import Hangtuan from './Hangtuan';
import Hangthang from './Hangthang';
// import Hiemco from './Hiemco';
// import Cao from './Cao';
import './Cuocganday.css';

class Bangxephang extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs3">
                    <li className="nav-item solanthang">
                        <a className="nav-link active" data-toggle="tab" href="#hangngay"><b>HÀNG NGÀY</b></a>
                    </li>
                    <li className="nav-item solanthang">
                        <a className="nav-link" data-toggle="tab" href="#hangtuan"><b>HÀNG TUẦN</b></a>
                    </li>
                    <li className="nav-item solanthang">
                        <a className="nav-link" data-toggle="tab" href="#hangthang"><b>HÀNG THÁNG</b></a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="hangngay" className="container tab-pane active">
                        <Hangngay></Hangngay>
                    </div>
                    <div id="hangtuan" className="container tab-pane fade">
                        <Hangtuan></Hangtuan>
                    </div>
                    <div id="hangthang" className="container tab-pane fade">
                        <Hangthang></Hangthang>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bangxephang;