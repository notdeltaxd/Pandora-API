import z from 'zod'
import { SearchSongModel } from '../../models/index.js'
import { IUseCase, SearchArgs } from '../../../../types/index.js'
import { useFetch } from '../../../../common/helpers/index.js'
import { endpoints } from '../../../../common/constants/index.js'
import { HTTPException } from 'hono/http-exception'
import { createSearchSongPayload } from '../../helpers/index.js'

export class SearchSongsUseCase implements IUseCase<SearchArgs, z.infer<typeof SearchSongModel>> {
  constructor() {}

  async execute({ query, limit = 10 }: SearchArgs): Promise<z.infer<typeof SearchSongModel>> {
    try {
      const res = await useFetch<any>({
        path: endpoints.search,
        method: 'POST',
        body: { query, types: ['TR'], listener: null, count: limit, annotate: true, annotationRecipe: 'CLASS_OF_2019' }
      })

      const data = res.data
      if (!data) {
        throw new HTTPException(503, {
          message: 'Search service is currently unavailable. Please try again later.'
        })
      }

      if (!data.results || data.results.length === 0) {
        throw new HTTPException(404, {
          message: 'No songs found matching your query.'
        })
      }

      if (!data.annotations) {
        throw new HTTPException(502, {
          message: 'Received invalid data from the search service. Please try again later.'
        })
      }

      const annotations = data.annotations
      const results = data.results.map((id: string) => annotations[id]).filter(Boolean)

      if (results.length === 0) {
        throw new HTTPException(404, {
          message: 'No songs could be retrieved for your search.'
        })
      }

      return createSearchSongPayload(results, annotations, limit)
    } catch (error) {
      throw error
    }
  }
}
