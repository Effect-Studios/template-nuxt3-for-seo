import { defineStore } from 'pinia'

// https://pinia.vuejs.org/introduction.html#basic-example
export default defineStore('app', () => {
  const state = reactive({
    count: 0
  })

  function increment() {
    state.count++
  }

  return { 
    state,
    increment 
  }
})
