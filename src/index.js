import React from 'react';
import { render } from 'react-dom';

import FrameOne from './Components/FrameOne';
import products1 from './bd/products1';

import FrameTwo from './Components/FrameTwo';
import products2 from './bd/products2';

import FrameThree from './Components/FrameThree';
import products3 from './bd/products3';

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
const props2 = {
    coords: products2,
    contentPhoto: makeUrl('images/part2.jpg'),
    modalBG: makeUrl('icons/modalBG.svg'),
    playBtn: makeUrl('icons/playBtn.png'),
    prestartBg: makeUrl('images/bgPart2.jpg'),
};
const props3 = {
    coords: products3,
    contentPhoto: makeUrl('images/part3.jpg'),
    modalBG: makeUrl('icons/modalBG.svg'),
    playBtn: makeUrl('icons/playBtn.png'),
    prestartBg: makeUrl('images/bgPart3.jpg'),
};

render(<FrameOne {...props1} />, document.getElementById('frameOne'));

render(<FrameTwo {...props2} />, document.getElementById('frameTwo'));

render(<FrameThree {...props3} />, document.getElementById('frameThree'));
