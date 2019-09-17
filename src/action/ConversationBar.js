export const getUserName = (email, id) => ({
  type: 'SAVE-SELECTED-NAME',
  email: email,
  conversationId: id
})

export const listedConversation = (response) => ({
  type: 'LISTED-CONVERSATION',
  payload: response
})

export const suggested = (response) => ({
  type: 'SUGGESTED-USERS',
  payload: response
})

export const getPms = (response) => ({
  type: 'GET-PMS',
  payload: response
})
