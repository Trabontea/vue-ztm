// Mount applications
//vm view model
const vm = Vue.createApp({
  data() {
    return {
      firstName: "Jhon",
      lastName: "Doe",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      event.preventDefault();
      this.lastName = event.target.value;
      console.log(msg);
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Bob";
// }, 2000);

// Mount applications
// Vue.createApp({
//   data() {
//     return {
//       firstName: "Jhonel",
//       lastName: "pula",
//     };
//   },
// }).mount("#app2");
