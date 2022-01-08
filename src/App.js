import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CakeContainer from "./component/CakeContainer.js";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}
