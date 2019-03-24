import React from "react";
import {render} from "react-dom";

import FrameOne from "./components/FrameOne";
import products1 from "./bd/products1";
import panoram1 from "./assets/images/part1.jpg";

import FrameTwo from "./components/FrameTwo";
import products2 from "./bd/products2";
import panoram2 from "./assets/images/part2.jpg";

import FrameThree from "./components/FrameThree";
import products3 from "./bd/products3";
import panoram3 from "./assets/images/part3.jpg";

render(<FrameOne
    contentPhoto={panoram1}
    coords={products1} />,
    document.querySelector("#frameOne"));
render(<FrameTwo
    contentPhoto={panoram2}
    coords={products2} />,
    document.querySelector("#frameTwo"));
render(<FrameThree
    contentPhoto={panoram3}
    coords={products3} />,
    document.querySelector("#frameThree"));
