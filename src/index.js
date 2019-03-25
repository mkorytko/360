import React from 'react';
import { render } from 'react-dom';

import FrameOne from './Components/FrameOne';
import products1 from './bd/products1';
import panoram1 from './assets/images/part1.jpg';

import FrameTwo from './Components/FrameTwo';
import products2 from './bd/products2';
import panoram2 from './assets/images/part2.jpg';

import FrameThree from './Components/FrameThree';
import products3 from './bd/products3';
import panoram3 from './assets/images/part3.jpg';

{ /* contentPhoto={PANORAMA_MODULES_SERVICE.ASSETS_URI + "/images/part1.jpg"} */ }
render(<FrameOne
    contentPhoto={panoram1}
    coords={products1} />,
document.getElementById('frameOne'));
{ /* contentPhoto={PANORAMA_MODULES_SERVICE.ASSETS_URI + "/images/part2.jpg"} */ }
render(<FrameTwo
    contentPhoto={panoram2}
    coords={products2} />,
document.getElementById('frameTwo'));
{ /* contentPhoto={PANORAMA_MODULES_SERVICE.ASSETS_URI + "/images/part3.jpg"} */ }
render(<FrameThree
    contentPhoto={panoram3}
    coords={products3} />,
document.getElementById('frameThree'));
