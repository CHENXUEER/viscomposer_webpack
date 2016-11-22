/**
 * Renderer
 */

import _ from 'underscore';
import nodeFactory from './nodefactory';
import * as f from '../commonfunctions';

function tryParseJSON(string) {
	try {
		return JSON.parse(string);
	} catch (e) {
		console.error('parse json:', e);
		console.log('trying to fix...');

		let fixedString = string.replace(/\\'/g, "'");
		try {
			return JSON.parse(fixedString);
		} catch (e2) {
			console.error('parse json:', e2);
			return null;
		}
	}
}

class Renderer {
	constructor(props) {
		/**
		 props:
		 	-mode: STAND_ALONE / DEBUG
		 	-container: svg canvs
		*/

		const config = _.extend({
			mode: 'DEBUG',
			container: (() => {
				let svg = document.createElement('svg');
				svg.setAttribute('width', '400');
				svg.setAttribute('height', '400');
				svg.setAttribute('style', 'background:#f2f2f2');
				document.body.appendChild(svg);
				return svg;
			})(),
		}, props);

		this.mode = config.mode;
		this.container = config.container;
		this.root = null;

		this.defs = this.container.appendChild(f.createSVGElement('defs'));
	}

	parse(filetype, ...props) {
		switch (filetype) {
		case 'JSON':
			return this.parseJSON(...props);
		default:
			return this;
		}
	}

	parseString(string) {
		let parsed = tryParseJSON(string);

		return parsed == null ? this.clearAll() : this.buildFromJSON(parsed);
	}

	parseJSON(props) {
		const config = _.extend({
			source: 'string',
			string: '',
		}, props);

		switch (config.source) {
		case 'file':
			return this;
		case 'string': default:
			return this.parseString(config.string);
		}
	}

	buildFromJSON(obj) {
		let root = nodeFactory.build(obj, this.mode === 'DEBUG');

		if (root == null) {
			return this.clearAll();
		}

		let node = root.node;

		if (node.type !== 'canvas') {
			return this.clearAll();
		}

		this.json = obj;
		this.root = root;

		node.buildDOM();
		this.container.appendChild(node.dom);
		for (let def of node.defs) {
			this.defs.appendChild(def);
		}

		console.log(JSON.stringify(nodeFactory.save(root)));
		return this;
	}

	clearAll() {
		this.json = null;
		this.root = null;

		return this;
	}
}

export default Renderer;
