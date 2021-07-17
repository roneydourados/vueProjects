/**
 * arquivo raiz do vuex
 * */
import { Store } from 'vuex'
import { initializeStores } from '@/utils/store-accessor' // faz a importação de todos os módulos inicializados neste arquivo

// diz para a aplicação nuxt carregar os modulos já inicializados
const initializer = (store: Store<any>) => initializeStores(store)

// exporta os mesmos
export const plugins = [initializer]

// exporta os modulos para utilização dentro dos componentes
export * from '@/utils/store-accessor'
