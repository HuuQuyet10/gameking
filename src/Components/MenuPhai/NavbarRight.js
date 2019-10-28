import React, { Component } from 'react';
import xuvang from './Image/xuvang.png';
import matkhi from './Image/matkhi.png';
import background3 from './Image/background3.png';
import './NavbarRight.css';

class NavbarRight extends Component {
    render() {
        return (
            <div>
                <div className="vhdfhvd74">
                    <div className="">
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
                        <ul className="dshvsd">

                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarRight;
