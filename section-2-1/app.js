// Mount applications
//vm view model
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Jhon',
      lastName: 'Doe',
      middleName: '',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="blank">Google</a>',
      age: 20,
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery',
        ],
      },
    }
  },
  methods: {
    // here it's not ok to have a computed method
    // fullName() {
    //   return `${this.firstName} - ${
    //     this.middleName
    //   } - ${this.lastName.toUpperCase()}`
    // },
    increment() {
      this.age++
    },
    updateLastName(msg, event) {
      this.lastName = event.target.value
      console.log(msg)
    },
    updateMiddleName(event) {
      this.middleName = event.target.value
    },
    
  },
  computed: {
    fullName() {
      console.log('computed function was called')
      return `${this.firstName} - ${
        this.middleName
      } - ${this.lastName.toUpperCase()}`
    },
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20
      }, 3000)
    },
  },
}).mount('#app')

// setTimeout(() => {
//   vm.firstName = "Bob";
// }, 2000);

//second vue
// Mount applications
// Vue.createApp({
//   data() {
//     return {
//       firstName: "Jhonel",
//       lastName: "pula",
//     };
//   },
// }).mount("#app2");
