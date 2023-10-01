import { IServiceFields, IService, IServiceCategories, IServiceCategoriesFields, IServiceOptionFields, IServiceOption, IDescriptionFields, IDescription, ILocationsFields, ILocations, ILocationFields, ILocation, IQuestionFields, IQuestion } from "../../@types/generated/contentful"

export type TGetApi = {
  table: string,
  query?: object,
  option?: object
}

export type TServiceRepository = ({ fields: IServiceFields } & IService)

export type TService = IServiceFields & { id: string }

export type TServiceById = Record<string, TService>

export type TServiceCategoryRepository = ({ fields: IServiceCategoriesFields } & IServiceCategories)

export type TServiceCategory = IServiceCategoriesFields & { id: string }

export type TServiceOptionRepository = ({ fields: IServiceOptionFields } & IServiceOption)

export type TDescriptionRepository = ({ fields: IDescriptionFields } & IDescription)

export type TLocationsRepository = ({ fields: ILocationsFields } & ILocations )

export type TLocationRepository = ({ fields: ILocationFields } & ILocation )

export type TQAndARepository = ({ fields: IQuestionFields } & IQuestion )
