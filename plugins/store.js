const modules = import.meta.glob('@/stores/*.js', {
  import: 'default',
  eager: true
})

export default defineNuxtPlugin((nuxtApp) => {
  const store = Object.entries(modules)
    .reduce((output, [path, func]) => {
      const name = path.match(/(?<name>\w+).js$/).groups.name
      output[name] = func()
      return output
    }, {})

  return {
    provide: {
      store
    }
  }
})
