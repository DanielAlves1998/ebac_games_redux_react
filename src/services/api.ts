import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000' //esse será o dominio da api
  }),
  //quando se constri um objeto, tem que colocar ({parenteses e as chaves})
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  }) //endpoints são as requisiçôes, o construtor de endPoinst é chamado de bilder
})

export const { useGetJogosQuery } = api

export default api
