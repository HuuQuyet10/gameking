import React, { Component } from 'react';
import Solanthang from './Solanthang';
import Hiemco from './Hiemco';
import Cao from './Cao';
import './Cuocganday.css';

class Diemnoibat extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs3">
                    <li className="nav-item solanthang">
                        <a className="nav-link active" data-toggle="tab" href="#solanthang"><b>SỐ LẦN THẮNG</b></a>
                    </li>
                    <li className="nav-item solanthang">
                        <a className="nav-link" data-toggle="tab" href="#hiemco"><b>HIẾM CÓ</b></a>
                    </li>
                    <li className="nav-item solanthang">
                        <a className="nav-link" data-toggle="tab" href="#cao"><b>CAO</b></a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="solanthang" className="container tab-pane active">
                        <Solanthang></Solanthang>
                    </div>
                    <div id="hiemco" className="container tab-pane fade">
                        <Hiemco></Hiemco>
                    </div>
                    <div id="cao" className="container tab-pane fade">
                        <Cao></Cao>
                    </div>
                </div>
            </div>
        );
    }
}

export default Diemnoibat;