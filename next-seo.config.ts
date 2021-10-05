const title = "Vihe's Space 👋"
const description = 'This Website is a resume of Vicky Hermawan.'
const url = 'https://vihermawan-space.vercel.app/'

export const configSEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    url: url,
    type: 'website',
    title,
    locale: 'jkt-INA',
    description,
    images: [
      {
        url: `${url}/images/banner.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    site: '@vihermawan',
    handle: '@vihermawan',
    cardType: 'summary_large_image'
  }
}
