import { buyCake, sellCake } from "../redux";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      <h2>Cakes count : {props.noOfCakes}</h2>
      <button onClick={props.buyCake}>Buy</button>
      <br />
      <br />
      <button onClick={props.sellCake}>Sell</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
