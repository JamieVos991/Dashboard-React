import "./ProductCard.css";

const ProductCard = (props) => {

    const ProductCardClicked = () => {
        props.onCardClicked(props.id);
    }

    return (
        <li onClick={ProductCardClicked} className="productsList__item productsList__item--gray">
            <img className="productsList_img" src={props.productImg} alt={props.name}></img>
            <p className="productsList__imageText">{props.name}</p>
        </li>
    );
}

export default ProductCard;