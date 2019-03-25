import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Marzipano from 'marzipano';
import Modal from '../Modal/Modal';
import Prestart from '../Prestart';

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

class Marz extends Component {
    static propTypes = {
        contentPhoto: PropTypes.string,
        coords: PropTypes.array,
    }

    state = {
        goods: null,
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

    renderHotspots = () => {
        this.props.coords.forEach((spot) => {
            const container = document.createElement('div');
            container.classList.add('hotspot');
            container.classList.add('in-sale');
            container.style.width = `${spot.size.width}px`;
            container.style.height = `${spot.size.height}px`;
            container.style.lineHeight = `${spot.size.height - 4}px`;
            container.addEventListener('click', () => {
                this.setState({ goods: spot });
                this.setShowModal();
            });
            scene
                .hotspotContainer()
                .createHotspot(container, spot.shift, { perspective: { radius: 500 } });
        });
    };

    setShowModal = () => this.setState((state) => ({ showModal: !state.showModal }))

    showPanoram = () => this.setState({ preStart: false });

    render() {
        const { showModal, goods, preStart } = this.state;
        return (
            <React.Fragment>
                <div className="marzipano-wrapper">
                    <div className="marzipano-box">
                        <Prestart
                            preStart={preStart}
                            showPanoram={this.showPanoram} />
                        <div
                            ref={this.containerMarz}
                            className={`marzipano ${preStart ? 'marzipano-hide_mode' : 'marzipano-show_mode'}`} />
                    </div>
                </div>
                <Modal
                    goods={goods}
                    showModal={showModal}
                    closeModal={this.setShowModal} />
            </React.Fragment>
        );
    }
}

export default Marz;
