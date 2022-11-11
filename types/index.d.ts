import type { NextPage, NextPageWithLayout } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'

declare module 'next' {
  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactElement
  }
}

declare module 'next/app' {
  type AppPropsWithLayout<P = {}> = AppProps<P> & {
    Component: NextPageWithLayout<P>
  }
}

export type TService = {
  fields: {
    title: string
    title_en: string
    title_ja: string
    // portfolioImages: [
    //   { metadata: [Object], sys: [Object], fields: [Object] },
    //   { metadata: [Object], sys: [Object], fields: [Object] },
    //   { metadata: [Object], sys: [Object], fields: [Object] },
    //   { metadata: [Object], sys: [Object], fields: [Object] }
    // ],
    price: number
    description_en: { content: [{content: [{value: string}]}] },
    description_ja: { content: [{content: [{value: string}]}] },
    mainImage: {
      fields: {
        file: {
          url: string
        }
      }
    }
    serviceCategory: {
      sys: {
        id: number
      }
      fields: {
        title: string
      }
    } 
    // serviceCategory: {
    //   metadata: { tags: [] },
    //   sys: {
    //     space: [Object],
    //     id: '2BBLKk9MoEzg0So6zZcxP1',
    //     type: 'Entry',
    //     createdAt: '2022-04-02T08:03:36.510Z',
    //     updatedAt: '2022-11-03T11:04:49.658Z',
    //     environment: [Object],
    //     revision: 3,
    //     contentType: [Object],
    //     locale: 'en-US'
    //   },
    //   fields: { title: 'KIMONO EXPERIENCE + PHOTOSHOOT', order: 1 }
    // },
    order: number
    serviceDetails: [{fields: { title_en: string, title_ja: string }}]
    // serviceDetails: [
    //   { metadata: [Object], sys: [Object], fields: [Object] },
    //   { metadata: [Object], sys: [Object], fields: [Object] },
    //   { metadata: [Object], sys: [Object], fields: [Object] },
    //   { metadata: [Object], sys: [Object], fields: [Object] },
    //   { metadata: [Object], sys: [Object], fields: [Object] },
    //   { metadata: [Object], sys: [Object], fields: [Object] },
    //   { metadata: [Object], sys: [Object], fields: [Object] }
    // ],
    reservation_url: string
  }
}