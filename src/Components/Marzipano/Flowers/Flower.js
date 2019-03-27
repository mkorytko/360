import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Marzipano from 'marzipano';
import FlowerModal from '../../FlowerModal';
import Prestart from '../../Prestart';

const limiter = Marzipano.RectilinearView.limit.traditional(
    2048,
    100 * Math.PI / 180,
);

const initialView = {
    yaw: 0,
    pitch: 0,
    fov: 90 * Math.PI / 180,
};

const viewerOpts = {
    controls: { mouseViewMode: 'drag' },
};

const geometry = new Marzipano.EquirectGeometry([{ width: '1024px' }]);
const view = new Marzipano.RectilinearView(initialView, limiter);

let scene;

class Flower extends Component {
    static propTypes = {
        contentPhoto: PropTypes.string,
        modalBG: PropTypes.string,
        playBtn: PropTypes.string,
        prestartBg: PropTypes.string,
        coords: PropTypes.array,
    }

    state = {
        goods: {},
        showModal: false,
        preStart: true,
    }

    containerMarz = React.createRef();

    createPanScene = () => {
        const container = this.containerMarz.current;
        const viewer = new Marzipano.Viewer(container, viewerOpts);
        const source = Marzipano.ImageUrlSource.fromString(this.props.contentPhoto);
        scene = viewer.createScene({
            source,
            view,
            geometry,
            pinFirstLevel: true,
        });
        scene.switchTo({ transitionDelay: 300 });
        this.renderHotspots(0);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.preStart !== this.state.preStart) {
            this.createPanScene();
        }
    }

    cropSpot = ({
        x, y, w, h,
    }) => {
        const img = document.getElementById('source');
        const el = document.getElementById('canvas');
        const ctx = el.getContext('2d');
        ctx.drawImage(img, x, y, w, h, 5, 5, 80, 90);
    }

    renderHotspots = () => {
        this.props.coords.forEach((spot) => {
            const container = document.createElement('div');
            container.classList.add('hotspot');
            if (spot.stock > 0) {
                container.classList.add('in-sale');
            } else {
                container.classList.add('sales');
                container.innerHTML = '<span>:`(</span>';
            }
            container.style.width = `${spot.size.width}px`;
            container.style.height = `${spot.size.height}px`;
            container.style.lineHeight = `${spot.size.height - 4}px`;
            container.addEventListener('click', () => {
                if (spot.stock) {
                    this.setState({ goods: spot });
                    this.setShowModal();
                }
            });
            scene
                .hotspotContainer()
                .createHotspot(container, spot.shift, { perspective: { radius: 500 } });
        });
    };

    showPanoram = () => this.setState({ preStart: false });

    setShowModal = () => {
        this.setState(
            (state) => ({ showModal: !state.showModal }),
            () => {
                this.cropSpot(this.state.goods.cropView);
            },
        );
    }

    render() {
        const { showModal, goods, preStart } = this.state;
        const { modalBG, playBtn, prestartBg } = this.props;
        return (
            <React.Fragment>
                <div className="marzipano-wrapper">
                    <div className="marzipano-box">
                        <div className="marzipano-box">
                            <Prestart
                                prestartBg={prestartBg}
                                playBtn={playBtn}
                                preStart={preStart}
                                showPanoram={this.showPanoram} />
                            <div
                                ref={this.containerMarz}
                                className={`marzipano ${preStart ? 'marzipano-hide_mode' : 'marzipano-show_mode'}`} />
                        </div>
                    </div>
                </div>
                <FlowerModal
                    modalBG={modalBG}
                    goods={goods}
                    showModal={showModal}
                    closeModal={this.setShowModal} />
                <img
                    id="source"
                    style={{ display: 'none' }}
                    src={this.props.contentPhoto}
                    alt="flower" />
            </React.Fragment>
        );
    }
}

export default Flower;
