import { connect } from 'react-redux'
import conversationbar from '../component/conversation/ConversationBar'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(conversationbar)
