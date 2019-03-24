import React from "react";
import {render} from "react-dom";

import FrameOne from "./Components/FrameOne";
import products1 from "./bd/products1";

import FrameTwo from "./Components/FrameTwo";
import products2 from "./bd/products2";

import FrameThree from "./Components/FrameThree";
import products3 from "./bd/products3";

render(<FrameOne
    contentPhoto={PANORAMA_MODULES_SERVICE.ASSETS_URI + "/images/part1.jpg"}
    coords={products1} />,
    document.querySelector("#frameOne"));
    render(<FrameTwo
    contentPhoto={PANORAMA_MODULES_SERVICE.ASSETS_URI + "/images/part2.jpg"}
    coords={products2} />,
    document.querySelector("#frameTwo"));
render(<FrameThree
    contentPhoto={PANORAMA_MODULES_SERVICE.ASSETS_URI + "/images/part3.jpg"}
    coords={products3} />,
    document.querySelector("#frameThree"));
