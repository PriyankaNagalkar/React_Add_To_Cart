import { connect } from 'react-redux'
import Header from "../components/Header";

const mapDispatchToProps = dispatch => ({
})


const mapStateToProps = state => ({
   data: state.cardItems.count
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)


// export default Home; 