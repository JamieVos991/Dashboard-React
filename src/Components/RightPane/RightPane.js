import "./RightPane.css";
import logo from "../../img/logo.png";
import ProductCard from "../ProductCard/ProductCard";

const RightPane = ({ onButtonClicked, buttonSymbol, buttonText, productCards}) => {

    let addProduct = () => {
        onButtonClicked();
    }

    let onCardClicked = (idFromCard) => {
        
    }

    let productCardsToBeRendered = productCards.map(product => {
        if (product.name === "Placeholder") {
            return (
                <li key={product.id} className="productsList__item">
                    <button onClick={addProduct} className="productsList__button">{buttonSymbol || "*"}</button>
                    <p className="productsList__text">{buttonText || "Lorem Ipsum"}</p>
                </li>
            );
        }
        return (
           <ProductCard onCardClicked={onCardClicked} key={product.id} name={product.name} id={product.id} productImg={product.img}/>
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