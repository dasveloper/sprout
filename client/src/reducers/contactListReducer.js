// Search Reducer
const initialState = {
  contactListSubmitted: false
};
export function contactListReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT_LIST_USER':
      return {
        ...state,
        userList: state.userList.concat(action.newUser)
      };
      case 'CREATE_CONTACT_LIST_SUCCESS':
      return {
        ...state,
        contactListSubmitted: true,
        contactListId: action.data.message
      };
    default:
      return state;
  }
}
