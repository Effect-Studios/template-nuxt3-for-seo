/* 
  This plugin creates a Pinia $store module for global state management using files available in the "stores" directory of the app. This plugin uses the function approach to define it's stores. See here ~/stores/app.js for reference
  Each store's name (id) is generated from the filename of the module. Eg; "app" and "auth" stores will generated from modules with filenames of "app.js" and "auth.js" respectively.

  This Pinia $store can be accessed from useNuxtApp().$store throughout the application, including but not limited to; components, layouts, pages, composables, other plugins, middlewares, etc.

  If you do not need global state management, you simply remove the stores directory.
*/

import { defineStore } from 'pinia'

const modules = import.meta.glob('@/stores/*.js', {
  import: 'default',
  eager: true
})


export default defineNuxtPlugin(() => {
  const store = Object.entries(modules).reduce(
    (output, [path, module]) => {
      const { id } = path.match(/(?<id>\w+).js$/).groups
      output[id] = defineStore(id, module)()
      return output
    }, 
    {}
  )
  return {
    provide: {
      store
    }
  }
})
