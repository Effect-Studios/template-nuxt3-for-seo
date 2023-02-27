// https://pinia.vuejs.org/introduction.html#basic-example:~:text=You%20can%20even%20use%20a%20function%20(similar%20to%20a%20component%20setup())%20to%20define%20a%20Store%20for%20more%20advanced%20use%20cases%3A
export default function() {
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
}
