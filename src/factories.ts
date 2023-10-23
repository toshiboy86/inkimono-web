import { TService, TServiceCategory, TServiceCategoryRepository, TServiceDetail, TServiceDetailRepository, TServiceRepository } from "./entities/repositories";

export const makeServiceFactory = (data: TServiceRepository[]): TService[] => {
  return data.map((e) => {
    return { ...e.fields,  id: e.sys.id }
  })
}

export const makeServiceCategoryFactory = (data: TServiceCategoryRepository[]): TServiceCategory[] => {
  return data.map((e) => {
    return { ...e.fields,  id: e.sys.id }
  })
}

export const makeServiceDetailsFactory = (data: TServiceDetailRepository[]): TServiceDetail => {
  let res: TServiceDetail = {}
  data.forEach((e) => {
    res = { ...res, [e.sys.id]: e.fields }
  })
  return res
}