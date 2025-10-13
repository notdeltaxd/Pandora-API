import z from 'zod'
import { SearchModel } from '../../models/index.js' //
import { IUseCase, SearchArgs } from '../../../../types/index.js'
import { useFetch } from '../../../../common/helpers/index.js'
import { endpoints } from '../../../../common/constants/index.js'
import { HTTPException } from 'hono/http-exception'
import { createSearchAllPayload } from '../../helpers/index.js'

export class SearchAllUseCase implements IUseCase<string, z.infer<typeof SearchModel>> {
  async execute(query: string): Promise<z.infer<typeof SearchModel>> {
    try {
      const res = await useFetch<any>({
        path: endpoints.search,
        method: 'POST',
        body: {
          query,
          types: ['TR', 'AL', 'AR', 'PL'],
          listener: null,
          start: 0,
          count: 100,
          annotate: true,
          annotationRecipe: 'CLASS_OF_2019'
        }
      })

      const data = res.data
      if (!data) {
        throw new HTTPException(404, {
          message: `no results found for ${query}`
        })
      }

      return createSearchAllPayload(data)
    } catch (error) {
      throw error
    }
  }
}
