import React, { Component } from "react";
import Marzipano from "marzipano";
import Modal from "../Modal/Modal";
const limiter = Marzipano.RectilinearView.limit.traditional(
    2048,
    100 * Math.PI / 180,
);

var initialView = {
    yaw: 0,
    pitch: 0,
    fov: 90 * Math.PI/180
  };

const viewerOpts = {
    controls: { mouseViewMode: 'drag' }
};

const geometry = new Marzipano.EquirectGeometry([{ width: "1024px" }]);
const view = new Marzipano.RectilinearView(initialView, limiter);

let scene;

class Marz extends Component {
    state = {
        spot: null,
        goodsModal: false,
        content: [],
        goods: null,
        countOrder: 0,
        showModal: false,
    }

    containerMarz = React.createRef();

    componentDidMount() {
        const container = this.containerMarz.current;
        const viewer = new Marzipano.Viewer(container, viewerOpts);
        const source = Marzipano.ImageUrlSource.fromString(this.props.contentPhoto);
        scene = viewer.createScene({
            source: source,
            view: view,
            geometry: geometry,
            pinFirstLevel: true
        });
        scene.switchTo({ transitionDelay: 300 });
        this.renderHotspots(0);
        document.addEventListener("keydown", this.cancelSubmit);
    }

    componentWillUnmount() {
        document.addEventListener("keydown", this.cancelSubmit);
    }

    cancelSubmit = (e) => {
        const { showModal } = this.state;
        if (showModal && e.key === "Escape") {
            this.setShowModal();
        }
    }

    renderHotspots = () => {
        this.props.coords.forEach(spot => {
            const container = document.createElement("div");
            container.classList.add("hotspot");
            container.classList.add("in-sale");
            container.style.width=`${spot.size.width}px`;
            container.style.height=`${spot.size.height}px`;
            container.style.lineHeight=`${spot.size.height - 4}px`;
            container.addEventListener("click", () => {
                // console.log(spot.id, spot.name);
                this.setState({ goods: spot });
                this.setShowModal();
            });
            scene
                .hotspotContainer()
                .createHotspot(container, spot.shift, { perspective: { radius: 500 } });
        })
    };

    setShowModal = () => this.setState((state) => ({ showModal: !state.showModal, countOrder: 0 }))

    countMinus = () => {
        this.setState((state) => ({ countOrder: state.countOrder > 0 ? state.countOrder - 1 : 0 }));
    }

    countPlus = () => {
        const { goods } = this.state;
        this.setState((state) => ({ countOrder: state.countOrder < goods.stock ? state.countOrder + 1 : goods.stock }));
    }

    submitOrder = () => {
        const { goods, countOrder } = this.state;
        const result = {
            item: goods,
            count: countOrder,
        };
        console.log(result);
        this.setState({
            countOrder: 0,
            showModal: false,
        })
    }

    render() {
        const { showModal, goods, countOrder } = this.state;
        return(
            <React.Fragment>
                <div className="marzipano-wrapper">
                    <div className="marzipano-box">
                        <div
                            ref={this.containerMarz}
                            className="marzipano" />
                    </div>
                </div>
                <Modal
                    countMinus={this.countMinus}
                    countPlus={this.countPlus}
                    checkBuyingCount={this.checkBuyingCount}
                    submitOrder={this.submitOrder}
                    countOrder={countOrder}
                    goods={goods}
                    showModal={showModal}
                    closeModal={this.setShowModal} />
            </React.Fragment>
        );
    }
}

export default Marz;