import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export function useCart() {
  const cart = useContext(CartContext)

  return cart
}
