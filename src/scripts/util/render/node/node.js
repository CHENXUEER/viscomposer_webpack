import { generateUUID } from '../../commonfunctions';

class Node {
	constructor() {
		this.uuid = generateUUID('N');

		this.dom = null;
		this.container = null;
		this.defs = [];
	}

	buildDOM() {
		this.dom = null;
		console.log('buildDOM method not reimplemented.');
	}
}

Node.props = {};

export default Node;
