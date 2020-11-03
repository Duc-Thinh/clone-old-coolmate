import { connect } from "react-redux";
import createCart from "../component/createCart"
import { addcart } from "../redux/reducer"

const mapStateToProps = state =>({
    carts: state.add.items
})


const mapActionsToProps = {
    addcart
};

export default connect(mapStateToProps,mapActionsToProps)(createCart)
