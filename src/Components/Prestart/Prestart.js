import React from 'react';
import PropTypes from 'prop-types';
import playBtn from "../../assets/icons/playBtn.png";

const Prestart = ({ showPanoram, preStart }) => (
    <div className={`prestart-wrapper-panorams ${preStart ? 'prestart_show' : 'prestart_hide'}`}>
        <button
            className="prestart-panorams_start"
            type="button"
            onClick={showPanoram}>
            <img
                className="prestart-panorams_play"
                src={playBtn}
                alt="Play"/>
        </button>
    </div>
);

Prestart.propTypes = {
    showPanoram: PropTypes.func.isRequired,
    preStart: PropTypes.bool.isRequired,
};

export default Prestart;
