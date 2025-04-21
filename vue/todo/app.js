Vue.createApp({
	data() {
		return {
			addTaskText: "",
			tasks: [],
		};
	},
	methods: {
		addTask() {
			this.tasks.push(this.addTaskText);
			this.addTaskText = "";
		},
		deleteTask(idx) {
			this.tasks.splice(idx, 1);
		},
	},
}).mount("#todoTask");
