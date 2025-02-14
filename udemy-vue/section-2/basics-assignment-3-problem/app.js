const app = Vue.createApp({
  data() {
    return {
      total: 0,
    };
  },
  computed: {
    result() {
      if (this.total < 37) {
        return "Not there yet";
      } else if (this.total === 37) {
        return `${this.total}`;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result() {
      console.log("watcher looking");
      const that = this;
      setTimeout(function() {
        that.total = 0;
        console.log("reset");
      }, 5000);
    },
  },
  methods: {
    add5() {
      this.total += 5;
      console.log(this.total);
    },
    add1() {
      this.total += 1;
      console.log(this.total);
    },
  },
});

app.mount("#assignment");
