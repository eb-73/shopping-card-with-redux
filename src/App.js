import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCardAction, fetchCardAction } from "./actionCreator/action";
import { useSelector, useDispatch } from "react-redux";
let display = true;
function App() {
  const flag = useSelector((state) => state.cardButton.displayCard);
  const card = useSelector((state) => state.card);
  const notification = useSelector((state) => state.cardButton.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCardAction());
  }, []);
  useEffect(() => {
    if (display) {
      display = false;
      return;
    }
    dispatch(sendCardAction(card));
  }, [card, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {flag && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
