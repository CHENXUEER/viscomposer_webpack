class Table {
	constructor(data, columns) {
		this.data = data;
		this.fields = columns;

		this.updateFields();
	}

	updateFields() {
		if (this.fields == null) {
			this.fields = [];
			for (let key in this.data[0]) {
				this.fields.push(key);
			}
		}

		for (let key of this.fields){

		}
	}
}

export default Table;
