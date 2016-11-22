import _ from 'underscore';
import Canvas from './node/canvas';
import Circle from './node/circle';

class NodeFactory {
	constructor() {
		this.nodeRegisted = new Map();

		// define default types
		[['canvas', Canvas], ['circle', Circle]].forEach((pair) => {
			this.registerNode(...pair);
		});
	}

	registerNode(type, classConstructor) {
		if (type instanceof Array) {
			type.forEach((typeX) => {
				this.nodeRegisted.set(typeX, classConstructor);
			});
		} else {
			this.nodeRegisted.set(type, classConstructor);
		}
	}

	getConstructor(type) {
		return this.nodeRegisted.get(type);
	}

	buildNode(json) {
		const type = json.type;

		if (type == null) return null;

		let TypeConstructor = this.getConstructor(type);

		if (TypeConstructor == null) return null;

		let obj = new TypeConstructor();
		obj.type = type;
		obj.props = _.extend(TypeConstructor.props, _.pick(json, (value, key) => {
			return TypeConstructor.props[key] !== undefined;
		}));

		return obj;
	}

	build(json) {
		let node = this.buildNode(json);
		if (node == null) return null;

		let tree = { node, children: [] };

		for (let child of json.children || []) {
			let childNode = this.build(child);

			tree.children.push(childNode);
		}

		return tree;
	}

	save(tree) {
		let node = tree.node,
			TypeConstructor = node.constructor;

		let json = {
			type: node.type,
		};
		json.props = _.pick(node.props, (value, key) => {
			return TypeConstructor.props[key] !== undefined;
		});

		json.children = [];

		for (let child of tree.children) {
			let childJSON = this.save(child);

			json.children.push(childJSON);
		}

		return json;
	}
}

const nodeFactory = new NodeFactory();

export default nodeFactory;
