import "./RightPane.css";
import logo from "../../img/logo.png";

const RightPane = ({ onButtonClicked, headerText, buttonSymbol, buttonText, productCards }) => {

    let addProduct = () => {
        onButtonClicked();
    }

    let productCardsToBeRendered = productCards.map(product => {
        if (product.name === "Placeholder") {
            return (
                <li className="productsList__item">
                    <button onClick={addProduct} className="productsList__button">{buttonSymbol || "*"}</button>
                    <p className="productsList__text">{buttonText || "Lorem Ipsum"}</p>
                </li>
            );
        }
        return (
            <li className="productsList__item">
               <img className="productsList_img" src={product.img} alt={product.name}></img>
               <p className="productsList__imageText">{product.name}</p>
            </li>
        );
    });

    return (
        <section className="productsWrapper">
            <header className="header">
               <img src={logo} className="products__logo"></img>
            </header>
            <ul className="productsList">
                {productCardsToBeRendered}
            </ul>
        </section>
    );
}

export default RightPane;