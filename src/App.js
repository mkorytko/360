import React, { Component, Fragment } from "react"
import Layouts from "./Layouts";

class App extends Component {
    state = {
        val: 0,
    }

    render() {
        return(
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}

export default App;