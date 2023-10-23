import { TDescriptionRepository, TLocationRepository, TLocationsRepository, TQAndARepository, TServiceCategoryRepository, TServiceDetailRepository, TServiceOptionRepository, TServiceRepository } from '../entities/repositories'
import { fetchApi, fetchAsset } from './apiAdapter'

export const fetchPortfolioImages = async (): Promise<string[]> => {
  const images = await fetchAsset()
  return images.data.items.map((image) => image.fields.file?.url) as string[]
}

export const fetchPortfolioImagesById = async () => {
  const images = await fetchAsset()
  let imagesObj: Record<string, string> = {}
  
  images.data.items.forEach((image) => {
    const id = image.sys.id as string
    imagesObj[id] = image.fields.file?.url as string
  })
  return imagesObj
}

export const fetchServices = async (): Promise<TServiceRepository[]> => {
  const res2 = await fetchApi<TServiceRepository[]>({
    table: 'service',
    option: { order: 'fields.order' }
  })
  return res2.data
}

export const fetchServiceCategories = async (): Promise<TServiceCategoryRepository[]> => {
  const res = await fetchApi<TServiceCategoryRepository[]>({
    table: 'serviceCategories',
    option: { order: 'fields.order' }
  })
  return res.data
}

export const fetchServiceOptions = async (): Promise<TServiceOptionRepository[]> => {
  const res = await fetchApi<TServiceOptionRepository[]>({
    table: 'serviceOption',
  })
  return res.data
}

export const fetchDescriptions = async (): Promise<TDescriptionRepository[]> => {
  const res = await fetchApi<TDescriptionRepository[]>({
    table: 'description',
  })
  return res.data
}

export const fetchServiceDetails = async (): Promise<TServiceDetailRepository[]> => {
  const res = await fetchApi<TServiceDetailRepository[]>({
    table: 'serviceDetail',
  })
  return res.data
}

export const fetchLocations = async (): Promise<TLocationsRepository[]> => {
  const res = await fetchApi<TLocationsRepository[]>({
    table: 'locations',
  })
  return res.data
}

export const fetchLocation = async (): Promise<TLocationRepository[]> => {
  const res = await fetchApi<TLocationRepository[]>({
    table: 'location',
  })
  return res.data
}

export const fetchQuestionAndAnswer = async (): Promise<TQAndARepository[]> => {
  const res = await fetchApi<TQAndARepository[]>({
    table: 'question',
  })
  return res.data
}