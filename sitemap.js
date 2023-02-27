export default async () => {
  const axios = require('axios')
  axios.defaults.baseURL = process.env.API_BASE_URL

  async function fetchAll(url = '', property, results = []) {
    try {
      const res = await axios(url)
      const { data, next_page_url: nxt } = res.data[property]
      results = results.concat(data)
      if (nxt) {
        return await fetchAll(nxt, property, results)
      }
    } catch {}

    return results
  }

  function toSitemapProps({ data, page = '', getExtraProps = () => ({}) }) {
    return data.map((item) => ({
      url: `${page}/${item.slug}`,
      lastmod: item.updated_at,
      changefreq: 'daily',
      ...getExtraProps(item)
    }))
  }

  let list = []

  // Example
  /* 
  list = list.concat(
    toSitemapProps({
      data: await fetchAll(
        '/v1/products/?limit=200&status=true&sortby=desc',
        'products'
      ),
      page: '/products',
      getExtraProps(prod) {
        return {
          img: {
            url: prod.image,
            title: prod.title
          }
        }
      }
    )
  })
  */

  return list
}
