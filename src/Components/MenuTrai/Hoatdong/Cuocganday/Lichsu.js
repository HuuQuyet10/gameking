import React, { Component } from 'react';
import echden from './Img/echden.png';
import './Cuocganday.css';

class Lichsu extends Component {
    render() {
        return (
            <div>
                <div className="fghu">
                    <img src={echden} alt="echden" className="ughfns" />
                    <p><b>KHÔNG TÌM THẤY KẾT QUẢ NÀO</b></p>
                </div>
            </div>
        );
    }
}

export default Lichsu;