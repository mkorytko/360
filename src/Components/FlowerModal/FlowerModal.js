import React from 'react';
import PropTypes from 'prop-types';
import Canvas from './Canvas';

const FlowerModal = ({ showModal, closeModal, goods, modalBG }) => (
    <div
        className={`modal-window ${showModal ? 'modal-show' : 'modal-hide'}`}>
        <div className="modal-wrapper">
            <i
                onClick={closeModal}
                className="modal-header-btn_cancel">
                +
            </i>
            <div className="modal-window-header">
                <h4 className="modal-window-header_info">Информация о товаре</h4>
            </div>
            <div className="modal-window-body">
                <Canvas />
                {showModal && (
                    <div className="modal-window-card">
                        <section className="modal-body-goods_header">
                            <h4 className="modal-body-goods_name">{goods.name}</h4>
                            <ul className="modal-body-goods_list">
                                {goods.sizeItem && (
                                    <li className="modal-body-goods_list-item">
                                        <span className="card-name_input">
                                            Объём/Вес:
                                        </span>
                                        <span className="card-name_item">
                                            {goods.sizeItem}
                                        </span>
                                    </li>
                                )}
                                <li className="modal-body-goods_list-item">
                                    <span className="card-name_input">
                                        Наличие:
                                    </span>
                                    <span className="card-name_item">
                                        {goods.stock}
                                        {goods.measure}
                                        .
                                    </span>
                                </li>
                                <li className="modal-body-goods_list-item">
                                    <span className="card-name_input">
                                        Цена:
                                    </span>
                                    <span className="card-name_item">
                                        {`${goods.cost.toFixed(2)} `}
                                        &#8381;
                                        {` (${goods.costFloat}${goods.measure})`}
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                )}
            </div>
            <img
                className="modal-window-background_style"
                src={modalBG}
                alt="modal-background" />
        </div>
    </div>
);

FlowerModal.propTypes = {
    showModal: PropTypes.bool,
    closeModal: PropTypes.func,
    goods: PropTypes.object,
};

export default FlowerModal;
