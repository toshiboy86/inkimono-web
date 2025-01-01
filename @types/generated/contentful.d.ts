// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBlogFields {
  /** title */
  title?: string | undefined;

  /** body */
  body?: Document | undefined;

  /** images */
  images?: Asset[] | undefined;

  /** test */
  test?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** Blog Content linked to inkimono.com */

export interface IBlog extends Entry<IBlogFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blog";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IDescriptionFields {
  /** aboutme_en */
  aboutme_en?: Document | undefined;

  /** aboutme_ja */
  aboutme_ja?: Document | undefined;

  /** choose_your_plan_en */
  chooseYourPlan_en?: Document | undefined;

  /** choose_your_plan_ja */
  chooseYourPlan_ja?: Document | undefined;

  /** workshop_title_en */
  workshop_title_en?: Document | undefined;

  /** workshop_title_ja */
  workshop_title_ja?: Document | undefined;
}

export interface IDescription extends Entry<IDescriptionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "description";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILocationFields {
  /** title_en */
  title_en?: string | undefined;

  /** title_ja */
  title_ja?: string | undefined;

  /** description_en */
  description_en?: Document | undefined;

  /** description_ja */
  description_ja?: Document | undefined;
}

export interface ILocation extends Entry<ILocationFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "location";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILocationsFields {
  /** title_en */
  title_en?: string | undefined;

  /** title_ja */
  title_ja?: string | undefined;

  /** description_en */
  description_en?: Document | undefined;

  /** description_ja */
  description_ja?: Document | undefined;

  /** main_image */
  main_image?: Asset | undefined;

  /** order */
  order?: number | undefined;

  /** images */
  images?: Asset[] | undefined;
}

export interface ILocations extends Entry<ILocationsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "locations";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** type */
  type: string;

  /** desc_title_en_1 */
  desc_title_en_1?: string | undefined;

  /** desc_title_ja_1 */
  desc_title_ja_1?: string | undefined;

  /** description_en_1 */
  description_en_1: Document;

  /** description_ja_1 */
  description_ja_1?: Document | undefined;

  /** image_1 */
  image_1?: Asset | undefined;

  /** description_en_2 */
  description_en_2?: Document | undefined;

  /** description_ja_2 */
  description_ja_2?: Document | undefined;

  /** image_2 */
  image_en_2?: Asset | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IQuestionFields {
  /** question_ja */
  question_ja?: string | undefined;

  /** question_en */
  question_en?: string | undefined;

  /** answer_en */
  answer_en?: string | undefined;

  /** answer_ja */
  answer_ja?: string | undefined;
}

/** Question and Answer */

export interface IQuestion extends Entry<IQuestionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "question";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceFields {
  /** title */
  title: string;

  /** title_en */
  title_en?: string | undefined;

  /** title_ja */
  title_ja?: string | undefined;

  /** main_image */
  mainImage?: Asset | undefined;

  /** portfolio_images */
  portfolioImages?: Asset[] | undefined;

  /** price */
  price?: number | undefined;

  /** description_en */
  description_en?: Document | undefined;

  /** description_ja */
  description_ja?: Document | undefined;

  /** service_category */
  serviceCategory?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** order */
  order?: number | undefined;

  /** service_details */
  serviceDetails?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** reservation_url */
  reservation_url?: string | undefined;
}

export interface IService extends Entry<IServiceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "service";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceCategoriesFields {
  /** title */
  title?: string | undefined;

  /** order */
  order?: number | undefined;
}

export interface IServiceCategories extends Entry<IServiceCategoriesFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "serviceCategories";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceDetailFields {
  /** title_en */
  title_en?: string | undefined;

  /** title_ja */
  title_ja?: string | undefined;
}

export interface IServiceDetail extends Entry<IServiceDetailFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "serviceDetail";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceOptionFields {
  /** body_en */
  body_en?: string | undefined;

  /** body_ja */
  body_ja?: string | undefined;
}

export interface IServiceOption extends Entry<IServiceOptionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "serviceOption";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "blog"
  | "description"
  | "location"
  | "locations"
  | "page"
  | "question"
  | "service"
  | "serviceCategories"
  | "serviceDetail"
  | "serviceOption";

export type IEntry =
  | IBlog
  | IDescription
  | ILocation
  | ILocations
  | IPage
  | IQuestion
  | IService
  | IServiceCategories
  | IServiceDetail
  | IServiceOption;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
