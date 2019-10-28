import React, { Component } from 'react';
import matkhi from './Img/matkhi.png';
import './Cuocganday.css';

class Hoso extends Component {
    render() {
        return (
            <div>
                <div class="row dhfshd">
                    <div className="col-md-6">
                        <p className="fh734"><b>0</b></p>
                        <p><b>LẦN ĐẶT CƯỢC</b></p>
                    </div>
                    <hr></hr>
                    <div className="col-md-6 fhdfh">
                        <p className="fh734"><b>0</b></p>
                        <p><b>ĐIỂM</b></p>
                    </div>
                </div>
                <div className="fdfdf">
                    <img src={matkhi} alt="matkhi" className="dhshf" />
                </div>
                <div className="ewgwgf">
                    <p className="fhs"><b>Người mạo hiểm</b></p>
                </div>
                <div className="dsfgsd">
                    <i class="fas fa-user hhdf"></i>
                    <p className="hhdf dfhg"><b>Honghdhf2</b></p>
                </div>
                <div className="dsfgsd sdg">
                    <i class="fas fa-envelope hhdf"></i>
                    <p className="hhdf dfhg"><b>dhhfdh328@gmail.com</b></p>
                </div>
                <div className="hfdh">
                    <button type="button" class="btn btn-secondary dshd">ĐĂNG XUẤT</button>
                </div>
            </div>
        );
    }
}

export default Hoso;