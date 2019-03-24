import React from "react";
import modalBG from "../../assets/icons/modalBG.svg";

export default function Modal(
    {
        showModal, closeModal, goods, countOrder,
    }
) {
    return (
        <div
            className={`modal-window ${showModal ? "modal-show" : "modal-hide"}`}>
            <div className="modal-wrapper">
                    <div className="modal-window-header">
                        <h4>Информация о товаре</h4>
                        <i
                            onClick={closeModal}
                            className="modal-header-btn_cancel" />
                    </div>
                    <div className="modal-window-body">
                        <canvas
                            className="modal-window-image_canvas"
                            id="canvas"
                            width="100px"
                            height="110px" />
                        {showModal && (
                            <div className="modal-window-card">
                                <section className="modal-body-goods_header">
                                    <h4>{goods.name}</h4>
                                    <ul>
                                        {goods.sizeItem && (
                                            <li>
                                                <span className="card-name_input">
                                                    Объём/Вес:
                                                </span>
                                                <span className="card-name_item">
                                                    {goods.sizeItem}
                                                </span>
                                            </li>
                                        )}
                                        <li>
                                            <span className="card-name_input">
                                                Наличие:
                                            </span>
                                            <span className="card-name_item">
                                                {goods.stock}{goods.measure}.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="card-name_input">
                                                Цена:
                                            </span>
                                            <span className="card-name_item">
                                                {goods.cost.toFixed(2)}
                                                {" "}
                                                &#8381;
                                                {" ("}
                                                {goods.costFloat}
                                                {goods.measure}
                                                {") "}
                                            </span>
                                        </li>
                                    </ul>
                                </section>
                            </div>)
                        }
                    </div>
                    <img
                        className="modal-background"
                        src={modalBG} alt="modal-background"/>
            </div>
        </div>
    );
}
