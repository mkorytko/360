import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Modal/Modal';
import Prestart from '../../Prestart';

class Pannellum extends Component {
    static propTypes = {
        contentPhoto: PropTypes.string,
        coords: PropTypes.array,
    }

    state = {
        goods: null,
        showModal: false,
        preStart: true,
    }

    pannell = React.createRef();

    componentDidMount() {
        pannellum.viewer(this.pannell.current, {
            type: 'equirectangular',
            panorama: this.props.contentPhoto,
            autoLoad: true,
            pitch: 0,
            yaw: 0,
            hfov: 100,
            hotSpots: this.createHotSpots(),
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.preStart !== this.state.preStart) {
            this.createPanScene();
        }
    }

    hideToolTip = (hotSpotDiv, { width, height }, spot) => {
        const span = document.createElement('span');
        span.classList.add('pannellum-custom_spot');
        span.style.width = `${width}px`;
        span.style.height = `${height}px`;
        hotSpotDiv.appendChild(span);
        hotSpotDiv.addEventListener('click', () => {
            // console.log(e, width);
            this.setState({ goods: spot });
            this.setShowModal();
        });
    }

    createHotSpots = () => {
        const hotspots = this.props.coords.map((coord) => ({
            pitch: coord.shift.pitch,
            yaw: coord.shift.yaw,
            type: 'scene',
            cssClass: 'custom_hotspot',
            createTooltipFunc: (e) => this.hideToolTip(e, coord.size, coord),
        }));
        return hotspots;
    }

    setShowModal = () => this.setState((state) => ({ showModal: !state.showModal }))

    showPanoram = () => this.setState({ preStart: false });

    render() {
        const { showModal, goods, preStart } = this.state;
        const { playBtn, modalBG, prestartBg } = this.props;
        return (
            <Fragment>
                <Prestart
                    prestartBg={prestartBg}
                    playBtn={playBtn}
                    preStart={preStart}
                    showPanoram={this.showPanoram} />
                <div
                    ref={this.pannell}
                    id="pannellum-wrapper" />
                <Modal
                    modalBG={modalBG}
                    goods={goods}
                    showModal={showModal}
                    closeModal={this.setShowModal} />
            </Fragment>
        );
    }
}
export default Pannellum;
