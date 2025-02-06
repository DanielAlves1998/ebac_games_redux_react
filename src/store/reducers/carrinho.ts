import { Game } from './../../App'
import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction'
import { createSlice } from '@reduxjs/toolkit'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

//aque é o meu REDUCER o reducer é uma função que recebe um estado inicial e uma ection, nesse caso são os STATE e ACTION
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions //aqui é uma exportação de tudo que está e, cima
export default carrinhoSlice.reducer //e as exportaçoês com DEFAULT elas são chamadas de padrão
