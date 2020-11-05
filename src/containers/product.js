import { connect } from "react-redux";
import product from "../component/product"
import { addcart } from "../redux/reducer"

const mapStateToProps = state =>({
    carts: state.add.items
})

const mapActionsToProps = {
    addcart
};

export default connect(mapStateToProps,mapActionsToProps)(product)