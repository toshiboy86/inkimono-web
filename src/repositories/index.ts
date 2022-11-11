const contentful = require("contentful")

const CTF_SPACE_ID = process.env.CTF_SPACE_ID
const CTF_CDA_ACCESS_TOKEN = process.env.CTF_CDA_ACCESS_TOKEN

const config = {
  space: CTF_SPACE_ID,
  accessToken: CTF_CDA_ACCESS_TOKEN
}

const client = contentful.createClient(config)

interface IPortfolioImage {
  metadata: {
    tags: [
      {
        sys: {
          id: string
        }
      }
    ]
  }
}

export const fetchPortfolioImages = (): Promise<string[]> => {
  return Promise.all([
    client.getAssets({limit: 10}) //500
  ]).then((entries) => {
    const portfolioTagAssets = entries[0].items.filter((i: IPortfolioImage) => i.metadata.tags.length > 0 && i.metadata.tags.filter((t) => t.sys.id === 'portfolio') )
    return portfolioTagAssets.map((e: { fields: { file: { url: string }}}) => `https:${e.fields.file.url}`)
  }).catch(console.error)
}

export const getRandomImages = async (limit: number) => {
  const myfun = function(x: string,y: string){
    return 0.5 - Math.random()
  }
  const images = await fetchPortfolioImages()
  return images.sort(myfun).slice(0, 3)
}

export const fetchServices = () => {
  return Promise.all([
    client.getEntries({
      'content_type':'service',
      order: 'fields.order'
    })
  ]).then((entries) => {
    return entries[0].items
  }).catch(console.error)
}

export const fetchServiceCategories = () => {
  return Promise.all([
    client.getEntries({
      'content_type':'serviceCategories',
      order: 'fields.order'
    })
  ]).then((entries) => {
    return entries[0].items
  }).catch(console.error)
}

export const fetchServiceById = (id: number) => {
  return Promise.all([
    client.getEntries({
      'content_type':'service',
      'sys.id': id.toString()
    })
  ]).then((entries) => {
    return entries[0].items[0]
  }).catch(console.error)
}

export const fetchServiceOptions = () => {
  return Promise.all([
    client.getEntries({
      'content_type':'serviceOption',
    })
  ]).then((entries) => {
    return entries[0].items
  }).catch(console.error)
}

export const fetchDescriptions = () => {
  return Promise.all([
    client.getEntries({
      'content_type':'description',
    })
  ]).then((entries) => {
    return entries[0].items
  }).catch(console.error)
}
