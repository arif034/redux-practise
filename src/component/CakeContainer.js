import { buyCake } from "../redux";
import { connect } from "react-redux";
function CakeContainer() {
  return (
    <div>
      <h2>Cakes count : </h2>
      <button>Buy</button>
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
