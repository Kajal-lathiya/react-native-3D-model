import { ADD_JOURNEY } from '../actions'

const initialState = {
  list: [],
}

const journeyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOURNEY:
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    default:
      return state
  }
}

export default journeyReducer
