//AQUI É A MINHA CONFIGURAÇÃO DA STORE

import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

//esse REDUCER dentro do STORE é o meu rootReducer, esse é o centralizador de todos os reducer que vou criar
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) //aqui tem que ter um miduer, ele vai trabalhar entre o dispectuer e da stor. o concat é cara juntar nesse caso a api e o middleware
})

export type rootReducer = ReturnType<typeof store.getState>
