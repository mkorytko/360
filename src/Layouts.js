import React, { Component } from "react";

class Layouts extends Component {
    render() {
        return(
            <div className="wrapper">
                <div className="row no-gutters">
                    <div className="col">
                        <header>
                            Шапка
                        </header>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <main>
                                <div id="frameOne" />
                                <div id="frameTwo" />
                                <div id="frameThree" />
                            </main>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col">
                        <footer>
                            Подвал
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}
export default Layouts;