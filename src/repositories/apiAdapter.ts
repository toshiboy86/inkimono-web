import { TGetApi, TImages } from '../entities/repositories';

export const fetchAsset = async (param?: {
  query?: { id?: string };
}): Promise<{ data: TImages }> => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${
      process.env.CTF_SPACE_ID
    }/environments/master/assets?limit=1000${
      param?.query?.id ? `&sys.id[in]=${param.query.id}` : ''
    }`,
    {
      credentials: 'omit',
      headers: { Authorization: `Bearer ${process.env.CTF_CDA_ACCESS_TOKEN}` },
    }
  );

  if (res.ok) {
    const data = await res.json();
    return { data: data };
  } else {
    const errorData = await res.json();
    throw new Error(
      `API Error: ${res.status} ${res.statusText} - ${
        errorData.message || 'Unknown error'
      }`
    );
  }
};

export const fetchApi = async <T>(param: TGetApi): Promise<{ data: T }> => {
  let query: string = '';

  const queryOption = { ...param.option, include: '2' };

  if (queryOption) {
    const obj = queryOption as { [key: string]: string };

    query = Object.keys(queryOption)
      .map((e) => {
        return `${e}=${obj[e]}`;
      })
      .join('&');
  }

  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CTF_SPACE_ID}/environments/master/entries?content_type=${param.table}&${query}`,
    {
      credentials: 'omit',
      headers: {
        Authorization: `Bearer ${process.env.CTF_CDA_ACCESS_TOKEN}`,
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
      next: { revalidate: 0 },
      cache: 'no-store',
    }
  );

  if (res.ok) {
    const data = await res.json();
    return { data: data.items as unknown as T };
  } else {
    return { data: `${res.status}: ${res.statusText}` as unknown as T };
  }
};
