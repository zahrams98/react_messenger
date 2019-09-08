import { connect } from 'react-redux'
import Bubble from '../component/conversation/Bubble'

const mapStateToProps = (state) => ({
  messagesList: state.messagesList
})

export default connect(mapStateToProps)(Bubble)
