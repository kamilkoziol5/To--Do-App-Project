const inputTask = document.getElementById("input-task-field");
const addBtn = document.getElementById("add-task-btn");
const taskContainer = document.getElementById("task-container");

function AddTask() {
	if (inputTask.value.trim() === "") {
		alert("You must write something!");
		return;
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputTask.value;
		taskContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputTask.value = "";
}
taskContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
		}
	},
	false
);
