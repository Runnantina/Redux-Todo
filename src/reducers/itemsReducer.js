import { REMOVE_ITEM, ADD_ITEM } from '../actions/types'

const initialItems = [
  "Wake up",
  "Do yoga via YouTube...",
  "Build the internet",
  "React-Redux................",
  "Plan my own birthday party.... {:face_with_rolling_eyes:}",
];

export default ( state = initialItems, action ) => {
  // switch argument defines WHAT is being tested
  switch (action.type) {
    case REMOVE_ITEM: {
      return state.filter((item, index) => index !== action.payload)
    }
    case ADD_ITEM: {
      return [...state, action.payload]
    }
    default:
      return state;
  }
}
