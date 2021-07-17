/**
 * aqui é o arquivo de plugin que va instaciar o service do axios que esta dentro de utils
 * nuxt-instanse.ts. Mais detalhes tem um comentário dentro deste arquivo para lembrar
 *
 * Outro detalhe importante é ir no nuxt.config.js e registrar este arquivo na sessão de plugins
 * exemplo: plugins: ['@/plugins/accessor']
 */
import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/nuxt-instance'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
