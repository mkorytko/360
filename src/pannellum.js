import React from 'react';
import { render } from 'react-dom';
import './vendor/pannellum';

import FrameOne from './Components/Pannellum/FrameOne';
import products1 from './bd/productsPan1';

import FrameTwo from './Components/Pannellum/FrameTwo';
import products2 from './bd/productsPan2';

import FrameThree from './Components/Pannellum/FrameThree';
import products3 from './bd/productsPan3';

function makeUrl(url) {
    if (process.env.NODE_ENV === 'development') {
        return require(`./assets/${url}`);
    }
    return `${PANORAMA_MODULES_SERVICE.ASSETS_URI}/${url}`;
}

// const props1 = {
//     coords: products1,
//     contentPhoto: makeUrl('images/part1.jpg'),
//     modalBG: makeUrl('icons/modalBG.svg'),
//     prestartBg: makeUrl('images/panBgPart1.jpg'),
// };

// const props2 = {
//     coords: products2,
//     contentPhoto: makeUrl('images/part2.jpg'),
//     modalBG: makeUrl('icons/modalBG.svg'),
//     prestartBg: makeUrl('images/panBgPart2.jpg'),
// };

const props3 = {
    coords: products3,
    contentPhoto: makeUrl('images/part3.jpg'),
    modalBG: makeUrl('icons/modalBG.svg'),
    prestartBg: makeUrl('images/panBgPart3.jpg'),
};

// render(<FrameOne {...props1} />, document.getElementById('framePannellumOne'));

// render(<FrameTwo {...props2} />, document.getElementById('framePannellumTwo'));

render(<FrameThree {...props3} />, document.getElementById('framePannellumThree'));