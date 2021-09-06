import classes from "./CartItem.module.css";
import { dispatch, useDispatch } from "react-redux";
import { cardActions } from "../../store/redux";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(cardActions.increase(props.item));
  };
  const decrease = () => {
    dispatch(cardActions.remove(props.item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrease}>-</button>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
