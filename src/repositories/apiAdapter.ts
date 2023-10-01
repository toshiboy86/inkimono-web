import { TGetApi } from '../entities/repositories'
import { client } from './api'
import { Asset } from "contentful";


export const fetchAsset = async (param: TGetApi) => {
  const api = client.getAssets(param.option)
  const assets = await Promise.all([api])
  const temp = assets[0].items.filter((i) => i.metadata.tags.length > 0 && i.metadata.tags.filter((t) => t.sys.id === 'portfolio'))
  const strings = temp.map((e: Asset) => `https:${e?.fields?.file?.url}`)
  return { data: strings }
}

export const fetchApi = async <T>(param: TGetApi): Promise<{data: T}> => {
  const api = client.getEntries(
    {
      'content_type': param.table,
      ...param.query,
      ...param.option
    }
  )
  const entries = await Promise.all([api])
  return {data: entries[0].items as T}
}