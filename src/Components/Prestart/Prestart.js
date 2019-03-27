import React from 'react';
import PropTypes from 'prop-types';

const Prestart = ({ showPanoram, preStart, prestartBg, playBtn }) => (
    <div className={`prestart-wrapper-panorams ${preStart ? 'prestart_show' : 'prestart_hide'}`}>
        <button
            style={{ backgroundImage: `url(${prestartBg})` }}
            className="prestart-panorams_start"
            type="button"
            onClick={showPanoram} />
        <img
            className="prestart-panorams_icon"
            src={playBtn}
            alt="play-button"
            onClick={showPanoram} />
    </div>
);

Prestart.propTypes = {
    showPanoram: PropTypes.func.isRequired,
    preStart: PropTypes.bool.isRequired,
    prestartBg: PropTypes.string,
    playBtn: PropTypes.string,
};

export default Prestart;
