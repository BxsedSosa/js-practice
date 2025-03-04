const app = Vue.createApp({
  data: () => {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randNum = Math.random();
      return randNum < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
