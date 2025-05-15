import { Task } from './Task.js';
import { TaskList } from './TaskList.js';

export class TaskApp {
	constructor(input, btn, container) {
		this.taskList = new TaskList();
		this.inputTask = document.querySelector(input);
		this.addBtn = document.querySelector(btn);
		this.taskContainer = document.querySelector(container);
		this.addEventLisener();
		this.render();
	}

	addTask() {
		const taskValue = this.inputTask.value.trim();
		if (!taskValue) {
			alert('Nie można dodac pustego zadania!');
			return;
		}

		this.taskList.addTasks(taskValue);
		this.render();
		this.inputTask.value = '';
	}

	render() {
		this.taskContainer.innerHTML = '';
		const taskItems = this.taskList.getTasks();
		taskItems.forEach((task, index) => {
			const li = document.createElement('li');
			li.textContent = task.text;
			li.dataset.index = index;

			if (task.checked) {
				li.classList.add('checked');
			}

			const span = document.createElement('span');
			span.innerHTML = `\u00d7`;
			li.appendChild(span);
			this.taskContainer.appendChild(li);
		});
	}

	addEventLisener() {
		this.addBtn.addEventListener('click', this.addTask.bind(this));
		this.inputTask.addEventListener('keydown', e => {
			if (e.key === 'Enter') {
				this.addTask();
			}
		});
		
		this.taskContainer.addEventListener('click', e => {
			const parentLi =
				e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
			const index = Number(parentLi.dataset.index); 
			if (e.target.tagName === 'LI') {
				this.taskList.toggleTask(index);
				this.render();
			} else if (e.target.tagName === 'SPAN') {
				this.taskList.removeTask(index);
				this.render();
			}
		});
	}
}
