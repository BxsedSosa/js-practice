const app = Vue.createApp({
  data() {
    return {
      taskText: "",
      tasks: [],
      isVisible: "visible",
      btnText: "Hide list",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskText);
      this.taskText = "";
    },
    toggleVisibility() {
      if (this.isVisible === "visible") {
        this.isVisible = "hidden";
        this.btnText = "Show list";
      } else {
        this.isVisible = "visible";
        this.btnText = "Hide list";
      }
    },
  },
});

app.mount("#assignment");
