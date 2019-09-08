const initial = {
  email: '',
  id: '',
  messagesList: [],
  conversationList: [],
}
const conversationbar = (state = initial, action) => {
  switch (action.type) {
    case 'SAVE-SELECTED-NAME':
      return {
        ...state,
        email: action.email,
        id: action.conversationId
      }
    case 'LISTED-CONVERSATION' :
      return {
        ...state,
        conversationList: action.payload
      }
    case 'GET-PMS' :
      return {
        ...state,
        messagesList: action.payload
      }

    default:
      return state
  }
}

export default conversationbar
