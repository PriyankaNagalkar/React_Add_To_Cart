import { connect } from 'react-redux'
import Home from "../components/Home";
import { addToCart, removeToCart } from '../services/Actions/action'

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart())
})

const mapStateToProps = state => ({
    cardData:state.cardItems
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)


// export default Home; 