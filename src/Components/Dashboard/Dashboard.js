import "./Dashboard.css";
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import Tyranitar from "../../img/tyranitar.png";
import Cloyster from "../../img/cloyster.png";
import React from "react";
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
        let productCards = [
            {
                name: "Placeholder"
            },
            {
                name: "Tyranitar",
                img: Tyranitar
            },
            {
                name: "Cloyster",
                img: Cloyster
            },
        ];
        this.setState({ productCards: productCards })
    }

    addButtonClicked = (inputFromPopup) => {
        let toBeAddedImage;
        switch(inputFromPopup){
            case("Tyranitar"):
                toBeAddedImage = Tyranitar;
                break;
            case("Cloyster"):
                toBeAddedImage = Cloyster;
                break;
        }
        let toBeAdded = [
            {
                name: inputFromPopup,
                img: toBeAddedImage
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