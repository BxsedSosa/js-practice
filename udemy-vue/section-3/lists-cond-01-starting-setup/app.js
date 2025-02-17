const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputValue);
      this.inputValue = "";
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
