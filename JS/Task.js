export class Task {
	constructor(text) {
		this.text = text;
		this.checked = false;
	}

	toggle() {
		this.checked = !this.checked;
	}
}
