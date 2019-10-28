import React, { Component } from 'react';
import './Cuocganday.css';

class Doitac_chiendich extends Component {
    render() {
        return (
            <div>
                <button type="button" class="btn btn-secondary okdhad" data-toggle="modal" data-target="#myModal">
                    + THÊM CHIẾN DỊCH
                </button>
                <div class="modal olkm" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content okuh">
                            <div class="modal-header">
                                <h4 class="modal-title kongh">CHIẾN DỊCH MỚI</h4>

                            </div>
                            <div class="modal-body">
                                <input type="text" class="form-control unput" placeholder="Tên chiến dịch"></input>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn hfhss1" data-dismiss="modal"><b>LƯU</b></button>
                                <button type="button" class="btn hfhss2" data-dismiss="modal"><b>HỦY</b></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Doitac_chiendich;