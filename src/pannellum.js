import React from 'react';
import { render } from 'react-dom';
import './vendor/pannellum';

import FrameOne from './Components/Pannellum/FrameOne';
import products1 from './Components/Pannellum/products1';

function makeUrl(url) {
    if (process.env.NODE_ENV === 'development') {
        return require(`./assets/${url}`);
    }
    return `${PANORAMA_MODULES_SERVICE.ASSETS_URI}/${url}`;
}

const props1 = {
    coords: products1,
    contentPhoto: makeUrl('images/part1.jpg'),
    modalBG: makeUrl('icons/modalBG.svg'),
    playBtn: makeUrl('icons/playBtn.png'),
    prestartBg: makeUrl('images/bgPart1.jpg'),
};

render(<FrameOne {...props1} />, document.getElementById('framePannellumOne'));