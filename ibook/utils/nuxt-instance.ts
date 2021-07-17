/**
 * este arquivo é como se fosse um api.tz do axios
 * serve para pegar a instância do axios que é instalado junto com nuxt
 */
import { NuxtAxiosInstance } from '@nuxtjs/axios'

/* eslint-disable import/no-mutable-exports */
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

export { $axios }
