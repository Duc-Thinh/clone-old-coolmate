import { connect } from "react-redux";
import Cartss from "../component/carts"

const mapStateToProps = state =>({
    carts: state.add.items
})

export default connect(mapStateToProps)(Cartss)
