import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Modal/Modal';

class FrameOne extends Component {
    static propTypes = {
        contentPhoto: PropTypes.string,
        modalBG: PropTypes.string,
        prestartBg: PropTypes.string,
        coords: PropTypes.array,
    }

    state = {
        goods: null,
        showModal: false,
    }

    pannell = React.createRef();

    componentDidMount() {
        this.createPanScene();
    }

    createPanScene = () => {
        pannellum.viewer(this.pannell.current, {
            type: 'equirectangular',
            panorama: this.props.contentPhoto,
            autoLoad: false,
            preview: this.props.prestartBg,
            showControls: false,
            pitch: -4,
            yaw: 0,
            hfov: 100,
            hotSpots: this.createHotSpots(),
        });
    }

    hideToolTip = (hotSpotDiv, { width, height }, spot) => {
        const span = document.createElement('span');
        span.classList.add('pannellum-custom_spot');
        span.style.width = `${width}px`;
        span.style.height = `${height}px`;
        hotSpotDiv.appendChild(span);
        hotSpotDiv.addEventListener('click', () => {
            this.setState({ goods: spot });
            this.setShowModal();
        });
    }

    createHotSpots = () => {
        const hotspots = this.props.coords.map((coord) => ({
            pitch: coord.shift.pitch,
            yaw: coord.shift.yaw,
            type: 'info',
            cssClass: 'custom_hotspot',
            createTooltipFunc: (e) => this.hideToolTip(e, coord.size, coord),
        }));
        return hotspots;
    }

    setShowModal = () => this.setState((state) => ({ showModal: !state.showModal }))

    render() {
        const { showModal, goods } = this.state;
        const { modalBG } = this.props;
        return (
            <div className="pannellum-wrapper">
                <div className="pannellum-box">
                    <div
                        ref={this.pannell}
                        className="pannellum-container" />
                </div>
                <Modal
                    modalBG={modalBG}
                    goods={goods}
                    showModal={showModal}
                    closeModal={this.setShowModal} />
            </div>
        );
    }
}
export default FrameOne;
