## Scaffolding
```shell
npx nuxi init -t gh:Effect-Studios/template-nuxt3-for-seo
```

# Guide

## Plugins
### API
```[~/plugins/1.api.js](plugins/1.api.js)```
The api plugin is a wrapper around an axios instance that defines error, response and request interceptors. These interceptors are designed to manage the user authorization token based on the options defined in the ```runtimeConfig.public.api``` property of the nuxt configuration file, and unwrap error and request responses. <br>
The module created by this plugin can be accessed from ```useNuxtApp().$api``

### Store (Pinia State Management)
```[~/plugins/store.js](plugins/store.js)```
This plugin creates a Pinia ```$store``` module for global state management using files available in the **stores** directory of the app. This plugin uses the function approach to define it's stores. <br>
##### Example
See [~/stores/app.js](stores/app.js) for reference
```javascript
export default function() {
  // State
  const state = reactive({
    count: 0
  })

  // Action
  function increment() {
    state.count++
  }

  // Exposed definitions
  return { 
    state,
    increment 
  }
}
```
Each store's name (id) is generated from the filename of the module. Eg; **app** and **auth** stores will generated from modules with filenames of **app.js** and **auth.js** respectively.
<br><br>
This Pinia $store can be accessed from ```useNuxtApp().$store``` throughout the application, including but not limited to; components, layouts, pages, composables, other plugins, middlewares, etc.
<br><br>
If you do not need global state management, you simply remove the stores directory.