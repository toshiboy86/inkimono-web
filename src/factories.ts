import { TService, TServiceCategory, TServiceCategoryRepository, TServiceRepository } from "./entities/repositories";

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