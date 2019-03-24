import React, { Component } from "react";
import Marzipano from "marzipano";
import Modal from "../FlowerModal";

const limiter = Marzipano.RectilinearView.limit.traditional(
    2048,
    100 * Math.PI / 180,
);

var initialView = {
    yaw:  0,
    pitch: 0,
    fov: 180 * Math.PI / 180,
  };

const viewerOpts = {
    controls: { mouseViewMode: 'drag' }
};

const geometry = new Marzipano.EquirectGeometry([{ width: "1024px" }]);
const view = new Marzipano.RectilinearView(initialView, limiter);

let scene;

class Flower extends Component {
    state = {
        spot: null,
        goodsModal: false,
        goods: [],
        countOrder: 0,
        showModal: false,
    }

    containerMarz = React.createRef();

    componentDidMount(){
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

    popupStyle = (el, {width, height}) => {
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
    }

    renderPopupContent = (content) => (
        `<div class="popup-content">
            <img src="${content.src}" alt="flower" />
            <button style="cursor: pointer">Купить</button>
        </div>`
    )

    cropSpot = ({x, y, w, h}) => {
        const img = document.querySelector("#source");
        const el = document.getElementById("canvas");
        const ctx = el.getContext("2d");
        ctx.drawImage(img, x, y, w, h, 5, 5, 80, 90);
    }

    renderHotspots = () => {
        this.props.coords.forEach(spot => {
            const container = document.createElement("div");
            container.classList.add("hotspot");
            if (spot.stock > 0) {
                container.classList.add("in-sale");
            } else {
                container.classList.add("sales");
                container.innerHTML = `<span>:\`(</span>`;
            }
            container.style.width=`${spot.size.width}px`;
            container.style.height=`${spot.size.height}px`;
            container.style.lineHeight=`${spot.size.height - 4}px`;
            container.addEventListener("click", () => {
                // console.log(spot.id, spot.name);
                if (spot.stock) {
                    this.setState({ goods: spot });
                    this.setShowModal();
                }
            });
            scene
                .hotspotContainer()
                .createHotspot(container, spot.shift, { perspective: { radius: 500 } });
        })
    };

    setShowModal = () => {
        this.setState(
            (state) => ({ showModal: !state.showModal, countOrder: 0 }),
            () => {
                this.cropSpot(this.state.goods.cropView);
            }
        );
    }

    setMap = (e) => {
        const x = e.target.clientWidth - (e.target.clientWidth - e.pageX);
        const y = e.pageY - e.target.offsetTop;
        console.log(x, y);
    }

    render() {
        const {showModal, goods, item, countOrder} = this.state;
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
                        countOrder={countOrder}
                        goods={goods}
                        showModal={showModal}
                        closeModal={this.setShowModal} />
                    <div className="mapIMG">
                        <img
                            onClick={this.setMap}
                            style={{width: "100%", display: "none"}}
                            src={this.props.contentPhoto}
                            alt="flower"/>
                    </div>
                    <img id="source" style={{display: "none"}} src={this.props.contentPhoto} alt="flower"/>
            </React.Fragment>
        );
    }
}

export default Flower;