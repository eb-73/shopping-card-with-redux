import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../../store/redux";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const addToCard = () => {
    dispatch(cardActions.add(props.item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed()}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCard}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
