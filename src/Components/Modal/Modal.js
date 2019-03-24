import React from "react";
import modalBG from "../../assets/icons/modalBG.svg";


export default function Modal(
    {
        showModal, closeModal, goods, countOrder,
        submitOrder, countMinus, countPlus,
    }
) {
    return (
        <div
            className={`modal-window ${showModal ? "modal-show" : "modal-hide"}`}>
            {
                showModal && (
                    <div className="modal-wrapper">
                            <div className="modal-window-header">
                                <h4>Информация о товаре</h4>
                                <i
                                    onClick={closeModal}
                                    className="modal-header-btn_cancel" />
                            </div>
                            <div className="modal-window-body">
                                <img
                                    className="modal-window-image"
                                    src={goods.src}
                                    alt="Product"/>
                                <div className="modal-window-card">
                                    <section className="modal-body-goods_header">
                                        <h4>{goods.name}</h4>
                                        <ul>
                                            <li className="modal-body-goods_card">
                                                <span className="card-name_input">
                                                    Название:
                                                </span>
                                                <span className="card-name_item">
                                                    {goods.subName}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="card-name_input">
                                                    Категория:
                                                </span>
                                                <span className="card-name_item">
                                                    {goods.category}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="card-name_input">
                                                    Страна-производитель:
                                                </span>
                                                <span className="card-name_item">
                                                    {goods.country}
                                                </span>
                                            </li>
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
                                </div>
                            </div>
                            <img
                                className="modal-background"
                                src={modalBG} alt="modal-background"/>
                    </div>)
            }
        </div>
    );
}
