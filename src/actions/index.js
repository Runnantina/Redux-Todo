import * as Types from './types'

export const removeItemFromList = (index) => (
  { type: Types.REMOVE_ITEM, payload: index }
)

export const addItemToList = (item) => (
  {type: Types.ADD_ITEM, payload: item }
)