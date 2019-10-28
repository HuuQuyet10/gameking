import React, { Component } from 'react';
import voinuoc from './Img/voinuoc.png';
import sao from './Img/sao.png';

class Danhsach extends Component {
    render() {
        return (
            <div>
                <div className="ukgofnfhe">
                    <div className="">
                        <img src={voinuoc} alt="voinuoc" className="unbhf43 ung89" />

                    </div>
                    <div className="">
                        <ul>
                            <li className="hehe ungu74 ughd"><span>Vòi - Tiêu chuẩn</span></li>
                            <li className="hehe">Đang tiến triển</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="gfgdf">
                            <img src={sao} alt="sao" className="ughte" />
                            <p><b className="ugng8">1,00</b></p>
                        </div>
                        <button type="button" class="btn btn-secondary u7423 okihk hgy" data-toggle="tooltip" data-placement="top" title="Gom được ít nhất ★2.500,00 để nhận" disabled><b>NHẬN</b></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Danhsach;