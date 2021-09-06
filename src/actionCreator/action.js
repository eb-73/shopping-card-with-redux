import { cardButtonActions } from "../store/redux";
import { cardActions } from "../store/redux";

export const fetchCardAction = () => {
  return async (dispatch) => {
    const fetchCard = async () => {
      const response = await fetch(
        "https://react-practice-6a8fa-default-rtdb.firebaseio.com/card.json"
      );
      if (!response.ok) {
        throw new Error("error in response");
      }
      const data = await response.json();
      dispatch(cardActions.replaceCard(data || []));
    };
    try {
      await fetchCard();
    } catch (err) {
      dispatch(
        cardButtonActions.displayNotification({
          status: "error",
          title: err.message,
          message: "error occurred in progress",
        })
      );
    }
  };
};
export const sendCardAction = (card) => {
  return async (dispatch) => {
    dispatch(
      cardButtonActions.displayNotification({
        status: "sending",
        title: "Sending...",
        message: "Sending card data!",
      })
    );
    const sendCard = async () => {
      const response = await fetch(
        "https://react-practice-6a8fa-default-rtdb.firebaseio.com/card.json",
        {
          method: "PUT",
          body: JSON.stringify(card),
        }
      );
      if (!response.ok) {
        throw new Error("error in response");
      }
    };
    try {
      await sendCard();

      dispatch(
        cardButtonActions.displayNotification({
          status: "success",
          title: "Success!",
          message: "Sent card data succesfully!",
        })
      );
    } catch (err) {
      dispatch(
        cardButtonActions.displayNotification({
          status: "error",
          title: err.message,
          message: "Sending card data failed!",
        })
      );
    }
  };
};
