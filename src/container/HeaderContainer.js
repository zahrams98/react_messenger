import Header from '../component/conversation/Header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  email: state.email,
  id: state.id
})

export default connect(mapStateToProps)(Header)
