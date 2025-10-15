import z from 'zod'
import { SearchModel } from '../models/index.js'
import {
  createSearchSongPayload,
  createSearchAlbumPayload,
  createSearchArtistPayload,
  createSearchPlaylistPayload
} from './index.js'

type PayloadEntry = {
  results: any[]
  createFn: (results: any[], annotations?: any) => { total: number; results: any[] }
}

export const createSearchAllPayload = (search: any): z.infer<typeof SearchModel> => {
  const annotations = search.annotations || {}
  const results = search.results || []

  const payloadMap: Record<string, PayloadEntry> = {
    TR: { results: [], createFn: createSearchSongPayload },
    AL: { results: [], createFn: createSearchAlbumPayload },
    AR: { results: [], createFn: createSearchArtistPayload },
    PL: { results: [], createFn: createSearchPlaylistPayload }
  }

  for (const id of results) {
    const item = annotations[id]
    if (!item) continue

    const typeKey = item.type
    if (!(typeKey in payloadMap)) continue

    const entry = payloadMap[typeKey]
    const payload = entry.createFn([item], annotations)
    entry.results.push(...payload.results)
  }

  return {
    songs: {
      total: payloadMap.TR.results.length,
      results: payloadMap.TR.results
    },
    albums: {
      total: payloadMap.AL.results.length,
      results: payloadMap.AL.results
    },
    artists: {
      total: payloadMap.AR.results.length,
      results: payloadMap.AR.results
    },
    playlists: {
      total: payloadMap.PL.results.length,
      results: payloadMap.PL.results
    }
  }
}
