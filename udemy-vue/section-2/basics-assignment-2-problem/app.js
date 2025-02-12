const app = Vue.createApp({
  data() {
    return {
      writtenText: "",
      confirmedText: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is a alert");
    },
    displayConfirmedText(event) {
      this.confirmedText = event.target.value;
    },
    displayWrittenText(event) {
      this.writtenText = event.target.value;
    },
  },
});

app.mount("#assignment");
