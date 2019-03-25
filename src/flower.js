import React from 'react';
import { render } from 'react-dom';

import FrameFour from './Components/Flowers';
import flowerCoord from './bd/flowers';
import flower from './assets/images/flower.jpg';

// // contentPhoto={PANORAMA_MODULES_SERVICE.ASSETS_URI + "/images/flower.jpg"}
render(<FrameFour
    contentPhoto={flower}
    coords={flowerCoord} />,
document.getElementById('frameFour'));
