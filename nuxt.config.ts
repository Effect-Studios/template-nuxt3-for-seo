// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [
			  { charset: 'utf-8' },
			  { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
			  { name: 'format-detection', content: 'telephone=no' },
			  { name: 'theme-color', content: '#002E3B' },
			  { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
			  { hid: 'og:type', property: 'og:type', content: 'website' },
			  { hid: 'og:description', property: 'og:description', content: 'Boilerplate for a nuxt app with SEO features' },
			  { hid: 'og:url', property: 'og:url', content: process.env.NUXT_PUBLIC_URL },
			  { hid: 'og:title', property: 'og:title', content: 'Nuxt3 SEO App' },
			  { hid: 'og:image', property: 'og:image', content: '/social.png' },
			  { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: '/social.png' },
			  { hid: 'twitter:title', name: 'twitter:title', content: 'Nuxt3 SEO App' },
			  { hid: 'twitter:description', name: 'twitter:description', content: 'Boilerplate for a nuxt app with SEO features' },
			  { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
			  { hid: 'twitter:image', name: 'twitter:image', content: '/social.png' },
			],
			link: [
			  { hid: 'canonical', rel: 'canonical', href: process.env.NUXT_PUBLIC_URL },
			  { rel: 'icon', type: 'image/png', href: '/favicon.png' },
			],
		}
	},

	css: [],

	modules: [ '@nuxtjs/sitemap' ],

	buildModules: [],

	// https://sitemap.nuxtjs.org/usage/sitemap
	sitemap: {
    hostname: process.env.NUXT_PUBLIC_URL,
    gzip: true,
    exclude: [],
    routes: []
  },
})
