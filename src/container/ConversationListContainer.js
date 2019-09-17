import ConversationList from '../component/conversation/ConversationList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  conversationList: state.conversationList
})
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ConversationList)
