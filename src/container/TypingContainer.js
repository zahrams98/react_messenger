import { connect } from 'react-redux'
import Typing from '../component/conversation/Typing'

const mapStateToProps = (state) => ({
  id: state.id
})
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Typing)
