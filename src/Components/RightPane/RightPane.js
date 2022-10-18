import "./RightPane.css";

const RightPane = (props) => {
    return (
        <section className="productsWrapper">
            <header className="header">
                <h1 className="header__h1">Mijn producten</h1>
            </header>
            <ul className="productsList">
                <li className="productsList__item">
                    <button className="productsList__button">+</button>
                </li>
                <li className="productsList__item">
                    <button className="productsList__button">+</button>
                </li>
                <li className="productsList__item">
                    <button className="productsList__button">+</button>
                </li>
                <li className="productsList__item">
                    <button className="productsList__button">+</button>
                </li>
            </ul>

        </section>
    );
}

export default RightPane;