import React, { Component } from "react";
import "./style.css";

class Pannellum extends Component {

    pannell = React.createRef();

    componentDidMount() {
        pannellum.viewer(this.pannell.current, {
            "type": "equirectangular",
            "panorama": this.props.contentPhoto,
            "autoLoad": true,
            "pitch": 0,
            "yaw": 0,
            "hfov": 100,
            // hotSpots: this.createHotSpots(),
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 0,
                    type: "scene",
                    createTooltipFunc: (e) => this.hideToolTip(e,),
                }
            ]
        });
    }

    hideToolTip = (hotSpotDiv, {w, h}) => {
        console.log(hotSpotDiv, w, h);
        const span = document.createElement("span");
        span.classList.add("ssss");
        hotSpotDiv.appendChild(span)
    }

    createHotSpots = () => {
        const hotspots = this.props.coords.map((coord) => ({
            "pitch": coord.shift.pitch,
            "yaw": coord.shift.yaw,
            "type": "scene",
            createTooltipFunc: (e) => this.hideToolTip(e, coord,),
        }));
        return hotspots;
    }

    render() {
        return (
            <div
                ref={this.pannell}
                id="pannellum-wrapper">
            </div>
        );
    }
}
export default Pannellum;