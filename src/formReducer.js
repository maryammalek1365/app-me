export const initialState = {
  title: "",
  description: "",
  price: 0,
  category: "",
  tags: [],
  quantity: 0
}
export const formReducer = (state, action) => {
  switch (action.type) {
    case "change_input":
      return { ...state, [action.data.name]: action.data.value }
    case "add_tag":
      return { ...state, state.tags: [...tags, action.data] }
    case "remove_tag":
      return { ...state, tags: state.tags.filter((tag) => tag !== action.data) }
    case "increase_tag":
      return { ...state, quantity: quantity + 1 }
    case "decrease_tag":
      return { ...state, quantity: quantity - 1 }
    default: return state
  }
}