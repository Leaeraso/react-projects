export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
}
export const cartReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(
        (item) => item.id === payload.id
      )

      if (productInCartIndex === -1) {
        const newState = [...state, { ...payload, quantity: 1 }]
        updateLocalStorage(newState)
        return newState
      }

      const newState = structuredClone(state)
      newState[productInCartIndex].quantity += 1
      updateLocalStorage(newState)
      return newState
    }
    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item.id !== payload.id)
      updateLocalStorage(newState)
      return newState
    }
    case CART_ACTIONS_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
    default: {
      return state
    }
  }
}
