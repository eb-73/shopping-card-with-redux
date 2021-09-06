import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cardButtonActions } from "../../store/redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const product = useSelector((state) => state.card);
  const numberOfProduct = product.reduce((acc, current) => {
    return acc + +current.quantity;
  }, 0);
  const dispatch = useDispatch();
  const displayCard = () => {
    dispatch(cardButtonActions.displayCard());
  };
  return (
    <button className={classes.button} onClick={displayCard}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfProduct}</span>
    </button>
  );
};

export default CartButton;
