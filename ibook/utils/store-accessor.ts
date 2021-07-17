/**
 * aqui é o arquivo que vai registrar todos os módulos que vou utilizar
 * por enquanto tenho apenas um módulo books
 */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Books from '@/store/books'

/* eslint-disable import/no-mutable-exports */
let books: Books

// função que inicializa o módulo
const initializeStores = (store: Store<any>): void => {
  books = getModule(Books, store)
}

// exportar todos os módulos que foram inicializados, vao ser exportados para o index.ts dentro de store
// index.ts é o arquivo raiz do vuex
export { initializeStores, books }
