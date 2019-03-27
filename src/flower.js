import React from 'react';
import { render } from 'react-dom';
import FrameFour from './Components/Marzipano/Flowers';
import flowerCoords from './bd/flowers';

function makeUrl(url) {
    if (process.env.NODE_ENV === 'development') {
        return require(`./assets/${url}`);
    }
    return `${PANORAMA_MODULES_SERVICE.ASSETS_URI}/${url}`;
}

const props = {
    coords: flowerCoords,
    contentPhoto: makeUrl('images/flower.jpg'),
    modalBG: makeUrl('icons/modalBG.svg'),
    playBtn: makeUrl('icons/playBtn.png'),
    prestartBg: makeUrl('images/bgPart4.jpg'),
};

render(<FrameFour {...props} />, document.getElementById('frameFour'));
