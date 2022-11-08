import "./Popup.css";
import React from "react";


class Popup extends React.Component {

    constructor(props){
        super(props);
        this.state = {input: ""}
    }

    componentDidMount(){
        this.setState({ input: this.props.cardClicked.name })
    }

    input = (event) =>{
        this.setState({input: event.target.value});
    }

    addProduct = () =>{
        if(this.state.input !== ""){
            this.props.addButtonClicked(this.state.input);
        }
    }

    editProduct = () => {
        this.props.editButtonClicked(this.state.input);
    }
    
    render(){
        let button = <div onClick={this.addProduct} className="pokeball_button"></div>;
        if(this.props.editMode === true){
            button = <div onClick={this.editProduct} className="pokeball_button"></div>;
        }
        return (
            <>
                <article className="pokeball">
                    <div className="pokeball_up">

                    </div>
                    <div className="pokeball_middle">
                        {button}

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
