import React, { Component } from 'react';
import khieng from './Img/khieng.png';

import './Cuocganday.css';
class Tinhcongbang extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={khieng} alt="khieng" className="sgvgs" />
                    <p className="hhsfsdf"><b>Chơi tại BitKong rất an toàn. Bạn sẽ không phải nghi ngờ tính công bằng của các lần đặt cược bởi vì chúng tôi dùng mật mã để đảm bảo rằng mọi lần đặt cược đều được xác thực là công bằng và có thể kiểm tra được.</b></p>
                </div>
                <div className="dsdfs">
                    <p className="adsa"><b>Tải tệp lên ở máy khách</b></p>
                    <div className="sdvsdv">
                        <button type="button" class="btn btn-secondary ddfbd434f"><i class="fas fa-sync"></i></button>
                        <p className="hfhdfddfdgdf"><b>d3739caa15dfeb5f479333e279b8daef</b></p>
                    </div>
                </div>
                <hr className="fhsdh"></hr>
                <div className="dsstew1">
                    <p className="sdgsgd2"><b>Tải tệp lên ở máy chủ (Đã băm)</b></p>
                    <p className="sdgssdcsgd3"><b>0737c818159c68437cb2829d833019809147b61cbc9dbcac296a7c02f651f633</b></p>
                </div>
                <div className="dsstew2">
                    <p className="sdgsgd2"><b>Lần này</b></p><br></br>
                    <p className="sdgssdcsgd3 svsdvsd"><b>0</b></p>
                </div>
            </div>
        );
    }
}

export default Tinhcongbang;