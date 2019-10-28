import React, { Component } from 'react';
import buoc1 from './Img/buoc1.png';
import buoc2 from './Img/buoc2.png';
import buoc3 from './Img/buoc3.png';
import buoc4 from './Img/buoc4.png';
import buoc5 from './Img/buoc5.png';
import './Cuocganday.css';

class Cuoccuatoi extends Component {
    render() {
        return (
            <div>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">NGÀY</th>
                            <th scope="col">ĐẶT CƯỢC</th>
                            <th scope="col">LỢI NHUẬN</th>
                            <th scope="col">BƯỚC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="4">
                                <p>
                                    <a class="btn btn-bk cuatao02" data-toggle="collapse" href="#collapseExample001" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <div className="sty-icon01 chiaphan01 chiaphan001 them-ngay">
                                            <p>Hôm qua</p>
                                        </div>
                                        <div className="sty-icon01 chiaphan02 chiaphan002">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan03 chiaphan003">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan04 chiaphan004">
                                            <img src={buoc1} alt="buoc1" />
                                            <div className="sty-0p">
                                                <p>1</p>
                                            </div>

                                        </div>
                                    </a>
                                </p>
                                <div class="collapse" id="collapseExample001">
                                    <div className="container">
                                        <div class="row">
                                            <div class="col-md-6 style-col-dau">
                                                <div className="doi-uvuong001 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong002 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong003 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong004 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong005 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong006 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong007 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong008 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong009 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <button type="button" class="btn btn-secondary xacthuc">XÁC THỰC</button>
                                                <div className="i-fo-02">
                                                    <a href="#"><i class="fab fa-facebook i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter-square i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-telegram i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-line i-con-f"></i></a>
                                                </div>

                                            </div>
                                            <div class="col-md-6">
                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-info-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>THÔNG TIN</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <div className="dong1">
                                                            <p className="sty-dat">Đặt cược</p>
                                                            <p className="sty-sodat">Ł0,00000020</p>
                                                        </div>
                                                        <div className="dong3">
                                                            <p className="sty-dat">Lợi nhuận</p>
                                                            <p className="sty-sodat">Ł0,00000019</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Điểm</p>
                                                            <p className="sty-sodat">0</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Mức độ khó</p>
                                                            <p className="sty-sodat">Khó</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Bước</p>
                                                            <p className="sty-sodat">1</p>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-check-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>TÍNH CÔNG BẰNG</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ</p>
                                                        <p className="style-upload">f7e6e4c6d82b1d094de4d33ce</p>
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ (Đã băm)</p>
                                                        <p className="style-upload">031f455bf1f0b9aa619b7fec02</p>
                                                        <p className="style-upload oh-them">Vào lúc này</p>
                                                        <p className="style-upload">2</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <td colSpan="4">
                                <p>
                                    <a class="btn btn-bk cuatao02" data-toggle="collapse" href="#collapseExample002" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <div className="sty-icon01 chiaphan01 chiaphan001 them-ngay">
                                            <p>Hôm qua</p>
                                        </div>
                                        <div className="sty-icon01 chiaphan02 chiaphan002">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan03 chiaphan003">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan04 chiaphan004">
                                            <img src={buoc1} alt="buoc1" />
                                            <div className="sty-0p">
                                                <p>1</p>
                                            </div>

                                        </div>
                                    </a>
                                </p>
                                <div class="collapse" id="collapseExample002">
                                    <div className="container">
                                        <div class="row">
                                            <div class="col-md-6 style-col-dau">
                                                <div className="doi-uvuong001 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong002 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong003 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong004 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong005 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong006 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong007 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong008 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong009 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <button type="button" class="btn btn-secondary xacthuc">XÁC THỰC</button>
                                                <div className="i-fo-02">
                                                    <a href="#"><i class="fab fa-facebook i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter-square i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-telegram i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-line i-con-f"></i></a>
                                                </div>

                                            </div>
                                            <div class="col-md-6">
                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-info-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>THÔNG TIN</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <div className="dong1">
                                                            <p className="sty-dat">Đặt cược</p>
                                                            <p className="sty-sodat">Ł0,00000020</p>
                                                        </div>
                                                        <div className="dong3">
                                                            <p className="sty-dat">Lợi nhuận</p>
                                                            <p className="sty-sodat">Ł0,00000019</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Điểm</p>
                                                            <p className="sty-sodat">0</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Mức độ khó</p>
                                                            <p className="sty-sodat">Khó</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Bước</p>
                                                            <p className="sty-sodat">1</p>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-check-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>TÍNH CÔNG BẰNG</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ</p>
                                                        <p className="style-upload">f7e6e4c6d82b1d094de4d33ce</p>
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ (Đã băm)</p>
                                                        <p className="style-upload">031f455bf1f0b9aa619b7fec02</p>
                                                        <p className="style-upload oh-them">Vào lúc này</p>
                                                        <p className="style-upload">2</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <td colSpan="4">
                                <p>
                                    <a class="btn btn-bk cuatao02" data-toggle="collapse" href="#collapseExample003" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <div className="sty-icon01 chiaphan01 chiaphan001 them-ngay">
                                            <p>Hôm qua</p>
                                        </div>
                                        <div className="sty-icon01 chiaphan02 chiaphan002">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan03 chiaphan003">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan04 chiaphan004">
                                            <img src={buoc1} alt="buoc1" />
                                            <div className="sty-0p">
                                                <p>1</p>
                                            </div>

                                        </div>
                                    </a>
                                </p>
                                <div class="collapse" id="collapseExample003">
                                    <div className="container">
                                        <div class="row">
                                            <div class="col-md-6 style-col-dau">
                                                <div className="doi-uvuong001 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong002 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong003 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong004 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong005 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong006 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong007 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong008 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong009 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <button type="button" class="btn btn-secondary xacthuc">XÁC THỰC</button>
                                                <div className="i-fo-02">
                                                    <a href="#"><i class="fab fa-facebook i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter-square i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-telegram i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-line i-con-f"></i></a>
                                                </div>

                                            </div>
                                            <div class="col-md-6">
                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-info-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>THÔNG TIN</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <div className="dong1">
                                                            <p className="sty-dat">Đặt cược</p>
                                                            <p className="sty-sodat">Ł0,00000020</p>
                                                        </div>
                                                        <div className="dong3">
                                                            <p className="sty-dat">Lợi nhuận</p>
                                                            <p className="sty-sodat">Ł0,00000019</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Điểm</p>
                                                            <p className="sty-sodat">0</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Mức độ khó</p>
                                                            <p className="sty-sodat">Khó</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Bước</p>
                                                            <p className="sty-sodat">1</p>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-check-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>TÍNH CÔNG BẰNG</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ</p>
                                                        <p className="style-upload">f7e6e4c6d82b1d094de4d33ce</p>
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ (Đã băm)</p>
                                                        <p className="style-upload">031f455bf1f0b9aa619b7fec02</p>
                                                        <p className="style-upload oh-them">Vào lúc này</p>
                                                        <p className="style-upload">2</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <td colSpan="4">
                                <p>
                                    <a class="btn btn-bk cuatao02" data-toggle="collapse" href="#collapseExample004" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <div className="sty-icon01 chiaphan01 chiaphan001 them-ngay">
                                            <p>Hôm qua</p>
                                        </div>
                                        <div className="sty-icon01 chiaphan02 chiaphan002">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan03 chiaphan003">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan04 chiaphan004">
                                            <img src={buoc1} alt="buoc1" />
                                            <div className="sty-0p">
                                                <p>1</p>
                                            </div>

                                        </div>
                                    </a>
                                </p>
                                <div class="collapse" id="collapseExample004">
                                    <div className="container">
                                        <div class="row">
                                            <div class="col-md-6 style-col-dau">
                                                <div className="doi-uvuong001 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong002 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong003 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong004 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong005 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong006 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong007 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong008 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong009 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <button type="button" class="btn btn-secondary xacthuc">XÁC THỰC</button>
                                                <div className="i-fo-02">
                                                    <a href="#"><i class="fab fa-facebook i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter-square i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-telegram i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-line i-con-f"></i></a>
                                                </div>

                                            </div>
                                            <div class="col-md-6">
                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-info-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>THÔNG TIN</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <div className="dong1">
                                                            <p className="sty-dat">Đặt cược</p>
                                                            <p className="sty-sodat">Ł0,00000020</p>
                                                        </div>
                                                        <div className="dong3">
                                                            <p className="sty-dat">Lợi nhuận</p>
                                                            <p className="sty-sodat">Ł0,00000019</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Điểm</p>
                                                            <p className="sty-sodat">0</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Mức độ khó</p>
                                                            <p className="sty-sodat">Khó</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Bước</p>
                                                            <p className="sty-sodat">1</p>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-check-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>TÍNH CÔNG BẰNG</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ</p>
                                                        <p className="style-upload">f7e6e4c6d82b1d094de4d33ce</p>
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ (Đã băm)</p>
                                                        <p className="style-upload">031f455bf1f0b9aa619b7fec02</p>
                                                        <p className="style-upload oh-them">Vào lúc này</p>
                                                        <p className="style-upload">2</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <td colSpan="4">
                                <p>
                                    <a class="btn btn-bk cuatao02" data-toggle="collapse" href="#collapseExample005" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <div className="sty-icon01 chiaphan01 chiaphan001 them-ngay">
                                            <p>Hôm qua</p>
                                        </div>
                                        <div className="sty-icon01 chiaphan02 chiaphan002">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan03 chiaphan003">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan04 chiaphan004">
                                            <img src={buoc1} alt="buoc1" />
                                            <div className="sty-0p">
                                                <p>1</p>
                                            </div>

                                        </div>
                                    </a>
                                </p>
                                <div class="collapse" id="collapseExample005">
                                    <div className="container">
                                        <div class="row">
                                            <div class="col-md-6 style-col-dau">
                                                <div className="doi-uvuong001 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong002 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong003 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong004 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong005 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong006 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong007 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong008 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong009 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <button type="button" class="btn btn-secondary xacthuc">XÁC THỰC</button>
                                                <div className="i-fo-02">
                                                    <a href="#"><i class="fab fa-facebook i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter-square i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-telegram i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-line i-con-f"></i></a>
                                                </div>

                                            </div>
                                            <div class="col-md-6">
                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-info-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>THÔNG TIN</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <div className="dong1">
                                                            <p className="sty-dat">Đặt cược</p>
                                                            <p className="sty-sodat">Ł0,00000020</p>
                                                        </div>
                                                        <div className="dong3">
                                                            <p className="sty-dat">Lợi nhuận</p>
                                                            <p className="sty-sodat">Ł0,00000019</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Điểm</p>
                                                            <p className="sty-sodat">0</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Mức độ khó</p>
                                                            <p className="sty-sodat">Khó</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Bước</p>
                                                            <p className="sty-sodat">1</p>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-check-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>TÍNH CÔNG BẰNG</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ</p>
                                                        <p className="style-upload">f7e6e4c6d82b1d094de4d33ce</p>
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ (Đã băm)</p>
                                                        <p className="style-upload">031f455bf1f0b9aa619b7fec02</p>
                                                        <p className="style-upload oh-them">Vào lúc này</p>
                                                        <p className="style-upload">2</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <td colSpan="4">
                                <p>
                                    <a class="btn btn-bk cuatao02" data-toggle="collapse" href="#collapseExample006" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <div className="sty-icon01 chiaphan01 chiaphan001 them-ngay">
                                            <p>Hôm qua</p>
                                        </div>
                                        <div className="sty-icon01 chiaphan02 chiaphan002">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan03 chiaphan003">
                                            <span>Ł0,00000020</span>
                                        </div>
                                        <div className="sty-icon01 chiaphan04 chiaphan004">
                                            <img src={buoc1} alt="buoc1" />
                                            <div className="sty-0p">
                                                <p>1</p>
                                            </div>

                                        </div>
                                    </a>
                                </p>
                                <div class="collapse" id="collapseExample006">
                                    <div className="container">
                                        <div class="row">
                                            <div class="col-md-6 style-col-dau">
                                                <div className="doi-uvuong001 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong002 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong003 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong004 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong005 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong006 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong007 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong008 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <div className="doi-uvuong009 border-uvong">
                                                    <div className="uvuong01 uvong-001"></div>
                                                    <div className="uvuong02 uvong-001"></div>
                                                </div>
                                                <button type="button" class="btn btn-secondary xacthuc">XÁC THỰC</button>
                                                <div className="i-fo-02">
                                                    <a href="#"><i class="fab fa-facebook i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter-square i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-telegram i-con-f"></i></a>
                                                    <a href="#"><i class="fab fa-line i-con-f"></i></a>
                                                </div>

                                            </div>
                                            <div class="col-md-6">
                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-info-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>THÔNG TIN</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <div className="dong1">
                                                            <p className="sty-dat">Đặt cược</p>
                                                            <p className="sty-sodat">Ł0,00000020</p>
                                                        </div>
                                                        <div className="dong3">
                                                            <p className="sty-dat">Lợi nhuận</p>
                                                            <p className="sty-sodat">Ł0,00000019</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Điểm</p>
                                                            <p className="sty-sodat">0</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Mức độ khó</p>
                                                            <p className="sty-sodat">Khó</p>
                                                        </div>
                                                        <div className="dong1">
                                                            <p className="sty-dat">Bước</p>
                                                            <p className="sty-sodat">1</p>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="">
                                                    <div className="style-fass">
                                                        <i class="fas fa-check-circle"></i>
                                                    </div>
                                                    <div className="sty-infor">
                                                        <p>TÍNH CÔNG BẰNG</p>
                                                    </div>
                                                    <div className="styl-9">
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ</p>
                                                        <p className="style-upload">f7e6e4c6d82b1d094de4d33ce</p>
                                                        <p className="style-upload oh-them">Tải tệp lên ở máy chủ (Đã băm)</p>
                                                        <p className="style-upload">031f455bf1f0b9aa619b7fec02</p>
                                                        <p className="style-upload oh-them">Vào lúc này</p>
                                                        <p className="style-upload">2</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Cuoccuatoi;