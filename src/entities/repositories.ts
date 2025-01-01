import { Asset } from 'contentful';
import {
  IServiceFields,
  IService,
  IServiceCategories,
  IServiceCategoriesFields,
  IServiceOptionFields,
  IServiceOption,
  IDescriptionFields,
  IDescription,
  IPageFields,
  IPage,
  ILocationsFields,
  ILocations,
  ILocationFields,
  ILocation,
  IQuestionFields,
  IQuestion,
  IServiceDetailFields,
  IServiceDetail,
} from '../../@types/generated/contentful';

export type TGetApi = {
  table: string;
  query?: object;
  option?: object;
};

export type TServiceRepository = { fields: IServiceFields } & IService;

export type TService = IServiceFields & { id: string };

export type TServiceById = Record<string, TService>;

export type TServiceCategoryRepository = {
  fields: IServiceCategoriesFields;
} & IServiceCategories;

export type TServiceCategory = IServiceCategoriesFields & { id: string };

export type TServiceDetailRepository = {
  fields: IServiceDetailFields;
} & IServiceDetail;

export type TServiceDetail = Record<string, IServiceDetailFields>;

export type TServiceOptionRepository = {
  fields: IServiceOptionFields;
} & IServiceOption;

export type TDescriptionRepository = {
  fields: IDescriptionFields;
} & IDescription;

export type TLocationsRepository = { fields: ILocationsFields } & ILocations;

export type TLocationRepository = { fields: ILocationFields } & ILocation;

export type TPageRepository = { fields: IPageFields } & IPage;

export type TPage = IPageFields & { id: string };

export type TQAndARepository = { fields: IQuestionFields } & IQuestion;

export type TImages = { items: Asset[] };
