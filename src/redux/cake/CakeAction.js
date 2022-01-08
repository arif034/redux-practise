import { BUY_CAKE, SELL_CAKE } from "./CakeType.js";
export const buyCake = () => {
  return {
    type: BUY_CAKE
  };
};

export const sellCake = () => {
  return {
    type: SELL_CAKE
  };
};
