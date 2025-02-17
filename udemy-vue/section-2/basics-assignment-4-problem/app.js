const app = Vue.createApp({
  data() {
    return {
      inputedClass: "",
      inputedBackground: "",
      activeClass: "",
      btnClass: "visible",
    };
  },
  methods: {
    getClass() {
      this.activeClass = this.inputedClass;
      this.inputedClass = "";
    },
    buttonChange() {
      if (this.btnClass === "hidden") {
        this.btnClass = "visible";
      } else {
        this.btnClass = "hidden";
      }
    },
  },
});

app.mount("#assignment");
