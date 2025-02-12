const APP = Vue.createApp({
  data() {
    return {
      name: "donovan",
      age: 25,
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/013/734/184/original/3d-google-logo-google-is-usa-multinational-corporation-free-vector.jpg",
      inputVal: "hello",
    };
  },
  methods: {
    randNum() {
      return Math.random().toFixed(2);
    },
  },
});

APP.mount("#assignment");
