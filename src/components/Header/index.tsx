import { rootReducer } from '../../store' //a importação redux tem que ser a primeira

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'

const Header = () => {
  const itens = useSelector((state: rootReducer) => state.carrinho.itens) //quando tem uma tipagem de erow function precisamos colocar parenteses

  //quando tem uma tipagem de erow function precisamos colocar parenteses
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
