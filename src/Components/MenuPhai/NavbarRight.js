import React, { Component } from 'react';
import xuvang from './Image/xuvang.png';
import matkhi from './Image/matkhi.png';
import background3 from './Image/background3.png';
import btc from './Image/btc.PNG';
import btcc from './Image/btcc.PNG';
import btcl from './Image/btcl.PNG';
import dash from './Image/dash.PNG';
import doge from './Image/doge.PNG';
import eth from './Image/eth.PNG';
import ltc from './Image/ltc.PNG';
import xrp from './Image/xrp.PNG';
import logo from './Image/logo.png';
import csd18 from './Image/csd18.PNG';
import './NavbarRight.css';

class NavbarRight extends Component {
    render() {
        return (
            <div>
                <div className="vhdfhvd74">
                    <div className="fdbdfbdf43">
                        <div className="fggf">
                            <img src={xuvang} alt="xuvang" className="hdvhdf" />
                            <p className="hdfhd"><b>₿0,00000000</b></p>
                            <button type="button" class="btn btn-light gdfgdf"><b>NẠP TIỀN</b></button>
                        </div>
                        <div className="fhhdf">
                            <div class="dropdown fdhhv">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    CHỌN CHẾ ĐỘ
                            </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item oke01 ok00" href="#">BTC- CHẾ ĐỘ TRẢ PHÍ</a>
                                    <a class="dropdown-item oke02 ok00" href="#">VÒI - CHẾ ĐỘ TIỀN THƯỞNG</a>
                                    <a class="dropdown-item oke03 ok00" href="#">GIẢI TRÍ - CHẾ ĐỘ MIỄN PHÍ</a>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <img src={matkhi} alt="matkhi" className="dfdfvv" />
                        </div>
                    </div>
                    <div className="fvfdvgd">
                        <img src={background3} alt="background3" className="dsgfsfd" />
                    </div>
                    <div className="gsdgcsgdcs">
                        <div className="ghrehghe">
                            <p>Chúng tôi thay đổi quan niệm về cá cược trực tuyến bằng cách áp dụng những cách tiếp cận mang tính đột phá về tính công bằng của cá cược, công nghệ và dịch vụ hỗ trợ khách hàng. BitKong giới thiệu các sòng bạc trực tuyến thế hệ mới, nơi người chơi có thể tin chắc rằng kết quả không bị thao túng. Với ý tưởng về cá cược công bằng thông qua mật mã, BitKong đã khiến cho hoạt động cá cược trực tuyến trở nên đáng tin cậy. Quá trình xác thực tại BitKong cho phép người dùng xác thực tính toàn vẹn của mỗi lần đặt cược</p>
                        </div>
                    </div>
                    <div className="fdfbdf">
                        <img src={btc} alt="btc" className="" />
                        <img src={btcc} alt="btcc" className="" />
                        <img src={btcl} alt="btcl" className="" />
                        <img src={dash} alt="dash" className="" />
                        <img src={doge} alt="doge" className="" />
                        <img src={eth} alt="eth" className="" />
                        <img src={ltc} alt="ltc" className="" />
                        <img src={xrp} alt="xrp" className="" />
                    </div>
                    <hr className="hdfhgd"></hr>
                    <div className="">
                        <img src={logo} alt="logo" className="hfhdhf" />
                        <div className="dfgdfg">
                            <a href="#" className="hdfhfd"><b>Pháp lý</b></a>
                        </div>
                        <div className="dfgdfg">
                            <a href="#"><b>Trợ giúp</b></a>
                        </div>
                        <div class="dropdown09">
                            <button class="btn dropdown-toggle ssdhsd" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tiếng Việt
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item dbfb" href="#">Tiếng Anh</a>
                                <a class="dropdown-item" href="#">Tiếng Trung</a>
                            </div>
                        </div>
                    </div>
                    <hr className="hdfhgd"></hr>
                    <div className="">
                        <img src={csd18} alt="csd18" className="dvfbfg" />
                        <div className="dv4sdvsd">
                            <p>Cá cược có thể gây nghiện nên vui lòng chơi có trách nhiệm.</p>
                        </div>
                        <div className="fdbdfbd4433">
                            <p>© 2019 BitKong.</p>
                        </div>
                        <div className="dfvdfvd4">
                            <a href="#" class="btn btn-primary dhhdf54" role="button" aria-pressed="true">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="btn btn-primary dhhdf54" role="button" aria-pressed="true">

                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="btn btn-primary dhhdf54" role="button" aria-pressed="true">
                                <i class="fab fa-telegram-plane"></i>
                            </a>
                            <a href="#" class="btn btn-primary dhhdf54" role="button" aria-pressed="true">
                                <i class="fab fa-bitcoin"></i>
                            </a>
                            <a href="#" class="btn btn-primary dhhdf54" role="button" aria-pressed="true">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarRight;
