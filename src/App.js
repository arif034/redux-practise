import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CakeContainer from "./component/CakeContainer.js";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <CakeContainer />
      </div>
    </Provider>
  );
}
