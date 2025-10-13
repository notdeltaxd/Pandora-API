import z from 'zod'
import { SearchAlbumModel } from '../../models/index.js'
import { IUseCase, SearchArgs } from '../../../../types/index.js'
import { useFetch } from '../../../../common/helpers/index.js'
import { endpoints } from '../../../../common/constants/index.js'
import { HTTPException } from 'hono/http-exception'
import { createSearchAlbumPayload } from '../../helpers/index.js'

export class SearchAlbumsUseCase implements IUseCase<SearchArgs, z.infer<typeof SearchAlbumModel>> {
  constructor() {}

  async execute({ query, limit = 10 }: SearchArgs): Promise<z.infer<typeof SearchAlbumModel>> {
    try {
      const res = await useFetch<any>({
        path: endpoints.search,
        method: 'POST',
        body: { query, types: ['AL'], listener: null, count: limit, annotate: true, annotationRecipe: 'CLASS_OF_2019' }
      })

      const data = res.data
      if (!data) {
        throw new HTTPException(503, {
          message: 'Search service is currently unavailable. Please try again later.'
        })
      }

      if (!data.results || data.results.length === 0) {
        throw new HTTPException(404, {
          message: 'No albums found matching your query.'
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
          message: 'No albums could be retrieved for your search.'
        })
      }

      return createSearchAlbumPayload(results, annotations, limit)
    } catch (error) {
      throw error
    }
  }
}
