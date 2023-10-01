import { TDescriptionRepository, TLocationRepository, TLocationsRepository, TQAndARepository, TServiceCategoryRepository, TServiceOptionRepository, TServiceRepository } from '../entities/repositories'
import { fetchApi, fetchAsset } from './apiAdapter'

export const fetchPortfolioImages2 = async (): Promise<string[]> => {
  const res = await fetchAsset({
    table: 'assets',
    option: { limit: 500 }
  })
  return res.data
}

export const fetchServices2 = async (): Promise<TServiceRepository[]> => {
  const res = await fetchApi<TServiceRepository[]>({
    table: 'service',
    option: { order: 'fields.order' }
  })
  return res.data
}

export const fetchServiceCategories2 = async (): Promise<TServiceCategoryRepository[]> => {
  const res = await fetchApi<TServiceCategoryRepository[]>({
    table: 'serviceCategories',
    option: { order: 'fields.order' }
  })
  return res.data
}

export const fetch2ServiceOptions = async (): Promise<TServiceOptionRepository[]> => {
  const res = await fetchApi<TServiceOptionRepository[]>({
    table: 'serviceOption',
  })
  return res.data
}

export const fetch2Descriptions = async (): Promise<TDescriptionRepository[]> => {
  const res = await fetchApi<TDescriptionRepository[]>({
    table: 'description',
  })
  return res.data
}

export const fetch2Locations = async (): Promise<TLocationsRepository[]> => {
  const res = await fetchApi<TLocationsRepository[]>({
    table: 'locations',
  })
  return res.data
}

export const fetch2Location = async (): Promise<TLocationRepository[]> => {
  const res = await fetchApi<TLocationRepository[]>({
    table: 'location',
  })
  return res.data
}

export const fetch2QuestionAndAnswer = async (): Promise<TQAndARepository[]> => {
  const res = await fetchApi<TQAndARepository[]>({
    table: 'question',
  })
  return res.data
}