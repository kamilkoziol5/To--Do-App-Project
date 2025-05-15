import { Task } from './Task.js';

export class TaskList {
	constructor() {
		this.tasks = [];
	}

	addTasks(text) {
		const task = new Task(text);
		this.tasks.push(task);
	}

	removeTask(index) {
		this.tasks.splice(index, 1);
	}

	toggleTask(index) {
		this.tasks[index].toggle();
	}

	getTasks() {
		return this.tasks;
	}
}
