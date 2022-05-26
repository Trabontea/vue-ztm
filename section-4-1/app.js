let vm = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
    }
  },
  beforeCreate() {
    console.log('beforeCreate() function Called', this.message)
  },

  created() {
    console.log('created() function Called', this.message)
  },

  beforeMount() {
    console.log('beforeMount() function Called', this.$el)
  },
  mounted() {
    console.log('mounted() function Called', this.$el)
  },
  beforeUpdate() {
    console.log('beforeUpdate() function Called')
  },
  updated() {
    console.log('Updated() function Called')
  },
  beforeUnmount() {
    console.log('beforeUnmount() function Called')
  },
  unmounted() {
    console.log('unmounted() function Called')
  },
  template: `{{message}}`,
})

vm.component('hello', {
  template: `<h1> {{message}} </h1>`,
  data() {
    return {
      message: 'Message from component',
    }
  },
})

vm.mount('#app')

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)

let vm2 = Vue.createApp({
  data() {
    return {
      message: 'hello world 2',
    }
  },
  render() {
    return Vue.h('h1', this.message)
  },
}).mount('#app2')
