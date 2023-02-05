import produce from 'immer'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'

export interface Movie {
  id: number
  title: string
  price: number
  image: string
}

export interface CartItem extends Movie {
  quantity: number
}

interface ChangeCartItemQuantityProps {
  itemId: number
  type: 'increase' | 'decrease'
}

interface CartContextType {
  cartItems: CartItem[]
  cartItemsTotal: number
  cartQuantity: number
  addMovieToCart: (movie: CartItem) => void
  changeCartItemQuantity: (value: ChangeCartItemQuantityProps) => void
  cleanCart: () => void
  movieExistsInCart: (itemId: number) => number
  quantityMovieInStorage: (itemId: number) => number
  removeCartItem: (itemId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const MOVIE_ITEMS_STORAGE_KEY = 'WeMovies:cartItems'

const fetchLocalStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return []

  const storedCartItems = localStorage.getItem(MOVIE_ITEMS_STORAGE_KEY)
  if (storedCartItems) return JSON.parse(storedCartItems)

  return []
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  const cartItemsTotal = useMemo(
    () =>
      cartItems.reduce(
        (totalPrice, movie) => (totalPrice += movie.price * movie.quantity),
        0,
      ),
    [cartItems],
  )

  const movieExistsInCart = useCallback(
    (movieId: number) => cartItems.findIndex(({ id }) => id === movieId),
    [cartItems],
  )

  const addMovieToCart = useCallback(
    (movie: CartItem) => {
      const movieAlreadyExistsInCart = movieExistsInCart(movie.id)

      const newCart = produce(cartItems, (draft) => {
        if (movieAlreadyExistsInCart < 0) {
          draft.push(movie)
        } else {
          draft[movieAlreadyExistsInCart].quantity += movie.quantity
        }
      })

      setCartItems(newCart)
    },
    [cartItems, movieExistsInCart],
  )

  const changeCartItemQuantity = useCallback(
    ({ itemId, type }: ChangeCartItemQuantityProps) => {
      const newCart = produce(cartItems, (draft) => {
        const movieAlreadyExistsInCart = movieExistsInCart(itemId)

        if (movieAlreadyExistsInCart >= 0) {
          const { quantity } = draft[movieAlreadyExistsInCart]
          draft[movieAlreadyExistsInCart].quantity =
            type === 'increase' ? quantity + 1 : quantity - 1
        }
      })

      setCartItems(newCart)
    },
    [cartItems, movieExistsInCart],
  )

  const removeCartItem = (itemId: number) => {
    const newCart = produce(cartItems, (draft) => {
      const movieAlreadyExistsInCart = movieExistsInCart(itemId)

      if (movieAlreadyExistsInCart >= 0) {
        draft.splice(movieAlreadyExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  const cleanCart = () => setCartItems([])

  const quantityMovieInStorage = (movieId: number) => {
    if (!cartItems || cartItems.length <= 0) return 0

    const movieAlreadyExistsInCart = movieExistsInCart(movieId)

    if (movieAlreadyExistsInCart < 0) return 0

    return cartItems[movieAlreadyExistsInCart]?.quantity
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    localStorage.setItem(MOVIE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    setCartItems(fetchLocalStorage())
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsTotal,
        cartQuantity,
        addMovieToCart,
        changeCartItemQuantity,
        cleanCart,
        movieExistsInCart,
        quantityMovieInStorage,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContextSelector(CartContext, (context) => context)
  return context
}
