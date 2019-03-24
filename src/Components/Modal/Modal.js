import React from "react";

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
                                <h4 className="text-center">Добавление в корзину</h4>
                            </div>
                            <div className="modal-window-body">
                                <img
                                    className="modal-window-image"
                                    src={goods.src}
                                    alt="Product"/>
                                <div className="modal-window-card">
                                    <section className="modal-body-goods_header">
                                        <h4>{goods.name}</h4>
                                        <p>
                                            ({goods.subName})
                                        </p>
                                        <p>
                                            {goods.brand}
                                            {" "}
                                            /
                                            {" "}
                                            {goods.country}
                                        </p>
                                    </section>
                                    <div className="modal-body-goods_body">
                                        <p>
                                            {goods.cost.toFixed(2)}
                                            {" "}
                                            &#8381;
                                            {" ("}
                                            {goods.costFloat}
                                            {") "}
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className="modal-body-goods_footer">
                                        <div className="d-inline-block">
                                            В наличии:
                                            {" "}
                                            {goods.stock}
                                            шт.
                                            <div className="count-group_btn">
                                                <button
                                                    onClick={countMinus}
                                                    type="button"
                                                    className="count-goods-minus d-inline-block">
                                                    -
                                                </button>
                                                <span className="count-result d-inline-block">
                                                    {countOrder}
                                                </span>
                                                <button
                                                    onClick={countPlus}
                                                    type="button"
                                                    className="count-goods-plus d-inline-block">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-window-footer">
                                <div className="modal-footer-buy_info">
                                    <p>На сумму:
                                        {" "}
                                        {parseFloat((countOrder * goods.cost).toFixed(2))}
                                        {" "}
                                        &#8381;
                                    </p>
                                </div>
                                <div className="modal-footer-btn_group">
                                    <button
                                        disabled={countOrder === 0 ? true : false}
                                        onClick={submitOrder}
                                        className="modal-footer-btn_submit"
                                        type="button">
                                        В корзину
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="modal-footer-btn_cancel"
                                        type="button">
                                        Отмена (Esc)
                                    </button>
                                </div>
                            </div>
                    </div>)
            }
        </div>
    );
}
