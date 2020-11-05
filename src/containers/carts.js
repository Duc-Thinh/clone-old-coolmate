import { connect } from "react-redux";
import Cartss from "../component/carts"
import { deletecart } from "../redux/reducer"

const mapStateToProps = state =>({
    carts: state.add.items
})

const mapActionsToProps = {
    deletecart
};

export default connect(mapStateToProps,mapActionsToProps)(Cartss)
