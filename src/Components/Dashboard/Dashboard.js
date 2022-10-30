// CSS
import "./Dashboard.css";

// Import React
import React from "react";

// Data 
import ProductsObject from "../../Data/Products";
import NavigationDataObject from "../../Data/NavigationData";

// Helper 
import ChooseImage from "../../Helpers/ChooseImage";

// Components
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import Popup from "../Popup/Popup";


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productCards: [],
            open: true
        };
    }

    componentDidMount() {
        this.setState({ productCards: ProductsObject.Products })
    }

    addButtonClicked = (inputFromPopup) => {
        let imageFromHelper = ChooseImage(inputFromPopup);
        let toBeAdded = [
            {
                id: this.state.productCards.length + 1,
                name: inputFromPopup,
                img: imageFromHelper
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        })
    }

    onButtonClicked = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        if (this.state.open === true) {
            return (
                <article className="dashboard">
                    <LeftPane navigationListItems={NavigationDataObject.NavigationData} buttonText="Go premium!" />
                    <RightPane onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="Mijn Pokemons" buttonSymbol="+" buttonText="Voeg hier je pokemon toe" />
                </article>

            );
        }
        return (
            <Popup addButtonClicked={this.addButtonClicked}/>
        )
    }
}

export default Dashboard;