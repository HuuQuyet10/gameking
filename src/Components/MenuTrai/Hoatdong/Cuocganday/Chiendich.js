import React, { Component } from 'react';
import jackboc from './Img/jackboc.png';
import sao from './Img/sao.png';
import voinuoc from './Img/voinuoc.png';
import matquy from './Img/matquy.png';
import echxanh from './Img/echxanh.png';
import dolarbum from './Img/dolarbum.png';
import './Cuocganday.css';

class Chiendich extends Component {
    render() {
        return (
            <div>
                <div className="ongu">
                    <img src={jackboc} alt="jackboc" className="hfugng" />
                    <br></br>
                    <img src={sao} alt="sao" className="unbhf8" />
                    <p className="onko"><b>1</b></p>
                    <p className="onko"><b>0</b></p>
                    <p className="ok90"><b>.</b></p>
                    <p className="onko"><b>4</b></p>
                    <p className="onko"><b>7</b></p>
                    <p className="onko"><b>9</b></p>
                    <p className="ok90"><b>.</b></p>
                    <p className="onko"><b>0</b></p>
                    <p className="onko"><b>3</b></p>
                    <p className="onko"><b>4</b></p>
                    <p className="ok90"><b>,</b></p>
                    <p className="onko"><b>8</b></p>
                    <p className="onko"><b>2</b></p>

                    <div className="unghsye">
                        <span>★1 = ₿0,00000135</span>
                    </div>
                    <div className="fhg">
                        <a href="#" class="btn btn-info unkso" role="button">
                            <i class="far fa-question-circle husd"></i>
                            THÔNG TIN CHI TIẾT
                        </a>
                    </div>
                    <div className="kukgonfhe">

                    </div>
                    <div className="ukgofnfhe">
                        <div className="">
                            <img src={voinuoc} alt="voinuoc" className="unbhf43" />

                        </div>
                        <div className="">
                            <ul>
                                <li className="hehe ungu74"><span>VÒI</span></li>
                                <li className="hehe">
                                    <img src={voinuoc} alt="voinuoc" className="fugd" />
                                    <img src={matquy} alt="matquy" className="fugd" />
                                    <img src={echxanh} alt="echxanh" className="fugd" />
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <button type="button" class="btn btn-secondary u7423"><b>SỬ DỤNG</b></button>
                        </div>
                    </div>
                    <div className="ukgofnfhe u789">
                        <div className="">
                            <img src={dolarbum} alt="dolarbum" className="unbhf43" />

                        </div>
                        <div className="">
                            <ul>
                                <li className="hehe ungu74"><span>LÀM ĐẦY LẠI</span></li>
                                <li className="hehe">
                                    <img src={voinuoc} alt="voinuoc" className="fugd" />
                                    <img src={matquy} alt="matquy" className="fugd" />
                                    <img src={echxanh} alt="echxanh" className="fugd" />
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <button type="button" class="btn btn-secondary u7423"><b>SỬ DỤNG</b></button>
                        </div>
                    </div>
                    {/* e54sd */}
                </div>
            </div>
        );
    }
}

export default Chiendich;