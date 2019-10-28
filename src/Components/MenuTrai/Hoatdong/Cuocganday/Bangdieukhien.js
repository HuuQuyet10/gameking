import React, { Component } from 'react';
import sao from './Img/sao.png';
import namtaytron from './Img/namtaytron.png';
import './Cuocganday.css';

class Bangdieukhien extends Component {
    render() {
        return (
            <div>
                <div className="ughfnvk">
                    <img src={namtaytron} alt="namtaytron" className="ughfn3a" />
                </div>
                <div className="ghhhh3">
                    <p>Trở thành đối tác liên kết của BitKong và kiếm tiền sau mỗi lần giới thiệu. Khi người mà bạn giới thiệu chơi, bạn sẽ thấy thu nhập của mình tăng lên. Bạn càng giới thiệu cho nhiều người thì thu nhập của bạn càng cao. Bạn chỉ cần chia sẻ đường dẫn này!</p>
                </div>
                <div className="okiunh">
                    <a href="#">https://bitkong.com/vi?r=A5FgfqT2vvHj</a><i class="far fa-copy vewfwhe"></i>
                </div>
                <div className="hgjd">
                    <a href="#" class="btn" target="_black">
                        <i class="fab fa-facebook-f hguy"></i>
                    </a>
                    <a href="#" class="btn" target="_black">
                        <i class="fab fa-twitter hguy"></i>
                    </a>
                    <a href="#" class="btn" target="_black">
                        <i class="fab fa-telegram-plane hguy"></i>
                    </a>
                    <a href="#" class="btn" target="_black">
                        <i class="fab fa-line hguy"></i>
                    </a>
                </div>
                <hr className="reye"></hr>
                <div className="fugdfu">
                    <p><b>TIỀN HOA HỒNG SẴN CÓ</b></p>
                </div>
                <div className="ffg">
                    <div>
                        <div className="nhud">
                            <img src={sao} alt="sao" className="uhg" />
                            <p className="kongd"><b>0,00</b></p>
                        </div>
                        <hr className="rfgfg"></hr>
                        <div className="olkgu">
                            <p><b>★1 = ₿0,00000131</b></p>
                        </div>
                        <div className="">
                            <button type="button" class="btn uhfd" data-toggle="tooltip" data-placement="top" title="Mời bạn bè để kiếm xu" disabled><b>NHẬN</b></button>
                        </div>

                    </div>
                </div>
                <hr className="reye fydy"></hr>
                <div className="ughyd">
                    <p><b>SỐ LIỆU THỐNG KÊ</b></p>
                </div>
                <div className="yfvvb">
                    <p><b>TIỀN HOA HỒNG: <span className="uyyyyy">★0,00</span></b></p>
                </div>
                <div className="okkkk">
                    <p><b>KHÔNG CÓ DỮ LIỆU NÀO ĐƯỢC HIỂN THỊ</b></p>
                </div>
                <div className="yfvvb">
                    <p><b>SỐ LẦN GIỚI THIỆU: <span className="uyyyyy">0</span></b></p>
                </div>
                <div className="okkkk2">
                    <p><b>KHÔNG CÓ DỮ LIỆU NÀO ĐƯỢC HIỂN THỊ</b></p>
                </div>
            </div>
        );
    }
}

export default Bangdieukhien;