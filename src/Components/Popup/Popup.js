// CSS
import "./Popup.css";

// Import React
import React from "react";


class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: "" }
    }

    input = (event) => {
        this.setState({ input: event.target.value });
    }

    updateProducts = () => {
        if (this.state.input !== "") {
            this.props.addButtonClicked(this.state.input);
        }
    }

    render() {
        return (
            <>
                <article className="pokeball">
                    <div className="pokeball_up">

                    </div>
                    <div onClick={this.updateProducts} className="pokeball_middle">
                        <div className="pokeball_button">
                            <div className="pokeball_button_inner">

                            </div>
                        </div>

                        <div className="pokeball_middle_up">

                        </div>
                    </div>
                    <div className="pokeball_down">

                    </div>
                </article>
                <input onChange={this.input} type="text" value={this.state.input} className="popup_input" id="name"></input>
            </>

        );
    }
}

export default Popup;
