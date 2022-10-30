// CSS
import "./Dashboard.css";

// Import data 
import ProductsObject from "../../Data/Products";

// Helper 
import ChooseImage from "../../Helpers/ChooseImage";

// Leftpane
import LeftPane from "../LeftPane/LeftPane";

// Rightpane
import RightPane from "../RightPane/RightPane";

// Import React
import React from "react";

// Popup
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
        let navigationListItems =
            [
                {
                    name: "Home",
                    message: 0,
                },

                {
                    name: "Games",
                    message: 3,
                },

                {
                    name: "Pokemons",
                    message: 0,
                },

                {
                    name: "FAQ",
                    message: 1,
                },

                {
                    name: "Contact",
                    message: 2,
                },
            ];

        if (this.state.open === true) {
            return (
                <article className="dashboard">
                    <LeftPane navigationListItems={navigationListItems} buttonText="Go premium!" />
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