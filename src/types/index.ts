import { OpenAPIHono } from '@hono/zod-openapi'

export interface FetchParams {
  path: string
  params?: Record<string, string | number | boolean>
  method?: 'GET' | 'POST'
  body?: unknown
}

export interface FetchResponse<T> {
  data: T
  ok: boolean
  status: number
}

export interface SearchArgs {
  query: string
  limit?: number
}

export interface PandoraErrorResponse {
  error?: string
  message?: string
}

export enum ApiContext {
  ANDROID = 'android',
  WEB = 'web6dot0'
}

export interface Routes {
  controller: OpenAPIHono
  initRoutes: () => void
}

export interface Obj {
  [key: string]: any
}

export interface IUseCase<T extends Obj | string = any, Tres = any> {
  execute: (params: T) => Promise<Tres>
}
