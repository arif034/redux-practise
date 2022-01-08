import { BUY_CAKE, SELL_CAKE } from "./CakeType.js";

const initialState = {
  noOfCakes: 10
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1
      };
    case SELL_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes + 1
      };
    default:
      return state;
  }
};

export default CakeReducer;
