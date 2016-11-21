const tag = (state, action) => {
  switch (action.type) {
    case 'ADD_TAG':
      return {
        text: action.text,
      }

      return {
        ...state,
      }
    default:
      return state
  }
}

const tags = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAG':
      return [
        ...state,
        tag(undefined, action)
      ]
    case 'DELETE_TAG':
		const text = action.text;
		return state.filter(tag => tag.text !== text);

	case "SAVE_TAGS": 
        return action.payload 
  
  case "RESET_TAGS": 
        return action.payload 
    default:
      return state
  }
}

export default tags
